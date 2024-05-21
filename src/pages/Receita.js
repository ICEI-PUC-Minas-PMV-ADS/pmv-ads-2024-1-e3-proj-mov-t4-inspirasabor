import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView, View, Alert, FlatList, TouchableOpacity } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import StarCard from '../components/StarCard';
import { captureRef } from "react-native-view-shot";
import { updateReceitas } from '../services/receitas.service';
import * as Sharing from 'expo-sharing';
import { TextInput } from 'react-native-paper';
import { useUser } from '../contexts/UserContext';
import { createComentario, getComentarios } from '../services/comentario.service';
import { getCategoriaById } from '../services/categorias.service';
import ComentatioCard from '../components/ComentarioCard';
import Icon from 'react-native-vector-icons/FontAwesome'

const Receita = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { id } = useUser();
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [categoria, setCategoria] = useState('');
  const { item } = route.params;

  const handleAvaliacao = () => {
    if (rating > 0) {
      const notaFinal = Math.round(item.nota + rating);
      const numeroAvaliacao = item.numeroAvaliacao + 1;
      const media = Math.round(notaFinal/numeroAvaliacao);
      updateReceitas({
        id: item.id,
        tituloReceita: item.tituloReceita,
        ingredientes: item.ingredientes,
        modoPreparo: item.modoPreparo,
        nota: notaFinal,
        numeroAvaliacao: numeroAvaliacao,
        media: media,
        imagem: item.imagem,
        categoriaId: item.categoriaId
      }).then();
      Alert.alert('Muito obrigado pela avaliação');
    } else {
      Alert.alert('Atenção!','Valor invalido!');
    }
  };

  const salvarComentario = () => {
    if (!comentario || comentario.trim() === '') {
      Alert.alert('Atenção!','Por favor, preencha o campo de comentario!');
      return;
    };

    createComentario({
      userId: id,
      receitaId: item.id,
      comentario: comentario
    }).then(res => {
      Alert.alert('Muito obrigado pelo comentario');
      setComentario('');
      getComentarios().then((listaDeComentarios) => {
        setComentarios(listaDeComentarios.filter(c => c.receitaId === item.id));
      });
    }).catch(error => {
      console.error('Erro ao criar o comentário:', error);
      Alert.alert('Ocorreu um erro ao criar o comentário. Tente novamente mais tarde.');
    });
  };

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
  };

  useEffect(() => {
    getCategoriaById(item.categoriaId).then((cat) => {
      setCategoria(cat.categoria);
    });
    getComentarios().then((listaDeComentarios) => {
      setComentarios(listaDeComentarios.filter(c => c.receitaId === item.id));
    });
  }, [isFocused]);

  useLayoutEffect(() => {
    handleShare();
  }, []);

  return (
    <Container>
      <Header 
        title={'Detalhes da receita'}
        leftIcon={'arrow-left'}
        rightIcon={'share'}
        onPressRightIcon={handleShare}
        onPressLeftIcon={() => navigation.goBack()} 
      />

    <TouchableOpacity
        style={styles.editButton} // Adiciona estilo para posicionar o botão
        onPress={() => navigation.navigate('AdicionarReceita', { receita: item })}
      >
        <Icon name="edit" size={25} color="white" />
      </TouchableOpacity>
    
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
            <Text>{categoria}</Text>
            <Text style={styles.subtitulo}>Nota:</Text>
            <StarRatingDisplay 
              rating={item.media}
              starSize={20}
            />
          </View>
          <View>
            <StarCard
              title={"Avaliação"}
              buttonPlaceHolder={"Enviar avaliação"}
              rating={rating}
              onChange={setRating}
              onPress={handleAvaliacao}
            />
          </View>
          <View>
            <Text style={styles.subtitulo}>Deixe seu comentário</Text>
            <TextInput
            label="Comentário"
            value={comentario}
            right={<TextInput.Icon 
              icon="send"
              onPress={salvarComentario}
              />}
            onChangeText={text => setComentario(text)}
          />
          </View>
          <View>
            <Text style={styles.subtitulo}>Comentários</Text>
            <FlatList
              horizontal
              data={comentarios}
              renderItem={({ item }) => (
                <ComentatioCard
                  nomeUsuario={item.user.name + ' comentou:'}
                  comentario={item.comentario}
                />
              )}
              keyExtractor={(item) => item.id.toString()} // Corrija a chave do FlatList
            />

         
          </View>
                   
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
  listaComentarios: {
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10
  },
  editButton: {
    position: 'absolute',
    top: 42,
    right: 100,
    zIndex: 1,
  },
});

export default Receita;