import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import Container from '../components/Container';
import ItemCard from '../components/ItemCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { findAllReceitas } from '../services/receitas.service';
import { findAllCategorias } from '../services/categorias.service'; // Importe a função corretamente
import { useNavigation, useIsFocused} from '@react-navigation/native';


const Dashboard = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [categorias, setCategorias] = useState([]);
  const [receitasDoDia, setReceitasDoDia] = useState([]);
  const [melhoresAvaliadas, setMelhoresAvaliadas] = useState([]);
  

  useEffect(() => {
    findAllCategorias().then((dados) => { 
      setCategorias(dados);
    });
    findAllReceitas().then((dados) => {
      setReceitasDoDia(dados.filter(r => r.nota === 5));
      setMelhoresAvaliadas(dados.filter(r => r.nota >= 4));
    });
  }, [isFocused]);

  const handleCategoryPress = (categoria) => { 
    navigation.navigate('ReceitasPorCategoria', { categoria });
  };

  return (
    <Container>
      <Header 
      title={'Dashboard'} 
      home={() => navigation.navigate('Dashboard')} 
      search={() => navigation.navigate('ListaReceita')} />
      <Body>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Receitas do dia</Text>
                <FlatList
                  horizontal
                  data={receitasDoDia}
                  renderItem={({ item }) => (
                    <ItemCard
                      style={styles.cardDay}
                      imagem={item.imagem}
                      onPress={() => navigation.navigate('Receita', { item })}
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()} // Corrija a chave do FlatList
                />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Melhor avaliadas</Text>
              <View style={styles.listContainer}>
                <FlatList
                  horizontal
                  data={melhoresAvaliadas}
                  renderItem={({ item }) => (
                    <ItemCard 
                      style={styles.card}
                      titulo={item.tituloReceita}
                      nota={item.nota}
                      imagem={item.imagem}
                      onPress={() => navigation.navigate('Receita', { item })}
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()} // Corrija a chave do FlatList
                />
              </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
              <View style={styles.listContainer}>
                <FlatList
                  horizontal
                  data={categorias}
                  renderItem={({ item }) => (
                    <ItemCard 
                      style={styles.card} 
                      categoria={item.categoria} 
                      imagem={item.imagem} 
                      onPress={() => handleCategoryPress(item.categoria)} /> 
                  )}
                  keyExtractor={(item) => item.id.toString()} 
                />
              </View>
          </View>
        </ScrollView>
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
  listContainer: {
    flexDirection: 'row',
  },
  card: {
    marginHorizontal: 8,
    width: 200,
  },
  cardDay: {
    marginHorizontal: 8,
    width: 380,
  },
});

export default Dashboard;
