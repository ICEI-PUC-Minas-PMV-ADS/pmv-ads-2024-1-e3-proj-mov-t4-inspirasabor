import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from '../components/StarRating';

const Receita = ({ route }) => {
  const navigation = useNavigation(); 


  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{item.tituloReceita}</Text>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.subtitulo}>Ingredientes:</Text>
      <Text>{item.ingredientes}</Text>
      <Text style={styles.subtitulo}>Modo de Preparo:</Text>
      <Text>{item.modoPreparo}</Text>
      <Text style={styles.subtitulo}>Nota:</Text>
      <StarRating rating={item.nota}/>
      
      {/* Adicione um botão para voltar para a tela anterior (Dashboard) */}
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 55,
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
