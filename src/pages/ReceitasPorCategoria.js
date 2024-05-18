import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../components/Container';
import ReceitaCard from '../components/ReceitaCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { findAllCategorias } from '../services/categorias.service';

const ReceitasPorCategoria = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoria } = route.params;
  const [receitasPorCategoria, setReceitasPorCategoria] = useState([]);

  useEffect(() => {
    findAllCategorias().then((dados) => {
      const categoriasEncontradas = dados.find(cat => cat.categoria === categoria);
      if (categoriasEncontradas) {
        setReceitasPorCategoria(categoriasEncontradas.receitas);
      } else {
        setReceitasPorCategoria([]);
      }
    });
  }, [categoria]);

  return (
    <Container>
      <Header 
        title={`Receitas de ${categoria}`} 
        leftIcon={'arrow-left'} 
        onPressLeftIcon={() => navigation.goBack()} 
      />
      <Body>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receitas por Categoria</Text>
          <FlatList
            data={receitasPorCategoria}
            renderItem={({ item }) => (
              <ReceitaCard
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
