import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../components/Container';
import FavoritasCard from '../components/FavoritasCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { getFavoritas } from '../services/favoritas.service';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';


const Favoritas = () => {
  const [favoritas, setFavoritas] = useState([]);
  const { userId } = useUser();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    getFavoritas().then((listaDeFavoritas) => {
      const favoritosFiltrados = listaDeFavoritas.filter(f => f.userId === userId);
      setFavoritas(favoritosFiltrados);
    });
  }, [isFocused]);

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
          {
            favoritas.length != 0 ?
            <FlatList
             style={styles.section}
             data={favoritas}
             renderItem={({ item }) => (
                 <FavoritasCard
                     style={styles.card}
                     titulo={item.receita.tituloReceita}
                     imagem={item.receita.imagem}
                     onPress={() => navigation.navigate('Receita', { item: item.receita })} 
                 />
             )}
             keyExtractor={(item) => item.id.toString()} 
          /> : 
            <FavoritasCard
              style={styles.cardSemReceita}
              titulo={"Não existem receitas para exibir..."}
              onPress={() => {}} 
            />
          } 
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
  cardSemReceita: {
    alignItems: 'center'
  }
});

export default Favoritas;
