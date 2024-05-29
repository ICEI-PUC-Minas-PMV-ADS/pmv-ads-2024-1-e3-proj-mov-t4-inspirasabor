import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../components/Container';
import FavoritasCard from '../components/FavoritasCard';
import Body from '../components/Body';
import Header from '../components/Header';
import getFavoritas from '../services/favoritas.service';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const Favoritas = () => {
  const [favoritas, setFavoritas] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchFavoritas = async () => {
      const dados = await getFavoritas();
      if (dados) {
        setFavoritas(dados);
      } else {
        console.error("Erro ao buscar favoritas");
      }
    };

    fetchFavoritas();
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <FavoritasCard
      style={styles.card}
      titulo={item.tituloReceita}
      imagem={item.imagem}
      onPress={() => navigation.navigate('Receita', { item })}
    />
  );


  return (
    <Container>
      <Header 
        title={`Favoritas`} 
        leftIcon={'arrow-left'} 
        onPressLeftIcon={() => navigation.goBack()} 
      />
      <Body>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lista de Receitas Favoritas</Text>
          <FlatList
             style={styles.section}
             data={favoritas}
             renderItem={({ item }) => (
                 <FavoritasCard
                     style={styles.card}
                     titulo={item.tituloReceita}
                     imagem={item.imagem}
                     onPress={() => navigation.navigate('Receita', { item })} 
                 />
             )}
             keyExtractor={(item) => item.id.toString()} 
          />
        </View>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
  },
});

export default Favoritas;
