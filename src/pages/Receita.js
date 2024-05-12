import React, { useState, useRef, useLayoutEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import StarCard from '../components/StarCard';
import { captureRef } from "react-native-view-shot";
import { updateReceitas } from '../services/receitas.service';
import * as Sharing from 'expo-sharing';
import { Button } from 'react-native-paper';

const Receita = ({ route }) => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const { item } = route.params;

  const handleAvaliacao = () => {
    updateReceitas({
      id: item.id,
      tituloReceita: item.tituloReceita,
      ingredientes: item.ingredientes,
      modoPreparo: item.modoPreparo,
      nota: rating,
      imagem: item.imagem,
      categoriaId: item.categoriaId,
      categoria: item.categoria,
    }).then();
  }

  const imageRef = useRef();
  const handleShare = async () => {
    try {
      const uri = await captureRef(imageRef, {
        quality: 1,
        format: 'png',
      });
      
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.log(error);
    }
  }

  useLayoutEffect(() => {
    handleShare();
  }, []);


  return (
    <Container>
      <Header 
        title={'Detalhes da receita'}
        leftIcon={'arrow-left'}
        onPressLeftIcon={() => navigation.goBack()} 
      />
      <Body>
        <ScrollView>
          <View ref={imageRef} collapsable={false}>
          <Text style={styles.titulo}>{item.tituloReceita}</Text>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <Text style={styles.subtitulo}>Ingredientes:</Text>
          <Text>{item.ingredientes}</Text>
          <Text style={styles.subtitulo}>Modo de Preparo:</Text>
          <Text>{item.modoPreparo}</Text>
          <Text style={styles.subtitulo}>Categoria:</Text>
          <Text>{item.categoria}</Text>
          <Text style={styles.subtitulo}>Nota:</Text>
          <StarRatingDisplay 
            rating={item.nota}
            starSize={20}
          />
          </View>
          <StarCard
            title={"Avaliação"}
            buttonPlaceHolder={"Enviar avaliação"}
            rating={rating}
            onChange={setRating}
            onPress={handleAvaliacao}
          />

          <Button
          title = {"Compartilhar"}
          buttonPlaceHolder={"Compartilhar"} 
          mode="outlined"
          onPress = {handleShare}
          >
            Compartilhar
           </Button> 
        </ScrollView>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Receita;
