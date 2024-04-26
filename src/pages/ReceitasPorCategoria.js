import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../components/Container';
import ItemCard from '../components/ItemCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import jsonData from '../db/db.json'; 

const ReceitasPorCategoria = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoria } = route.params;
  const [receitasPorCategoria, setReceitasPorCategoria] = useState([]);

  useEffect(() => {
    // Encontrar a categoria no JSON
    const categoriaEncontrada = jsonData.categorias.find((cat) => cat.categoria === categoria);
    // Se a categoria for encontrada, defina as receitas associadas a ela
    if (categoriaEncontrada) {
      setReceitasPorCategoria(categoriaEncontrada.receitas);
    } else {
      setReceitasPorCategoria([]);
    }
  }, [categoria]);

  return (
    <Container>
      <Header title={`Receitas de ${categoria}`} home={() => navigation.goBack()} />
      <Body>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receitas por Categoria</Text>
          <FlatList
            data={receitasPorCategoria}
            renderItem={({ item }) => (
              <ItemCard
                style={styles.card}
                titulo={item.tituloReceita}
                nota={item.nota}
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
};

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

export default ReceitasPorCategoria;