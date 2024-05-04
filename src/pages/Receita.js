import React, { useState } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import StarCard from '../components/StarCard';

import { updateReceitas } from '../services/receitas.service';

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

  return (
    <Container>
      <Header 
        title={'Detalhes da receita'}
        leftIcon={'arrow-left'}
        onPressLeftIcon={() => navigation.goBack()} 
      />
      <Body>
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
        <StarCard
          rating={rating}
          onChange={setRating}
          onPress={handleAvaliacao}
        />
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
