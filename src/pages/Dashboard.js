import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import Container from '../components/Container';
import ItemCard from '../components/ItemCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { findAllReceitas } from '../services/receitas.service';
import { findAllCategorias } from '../services/categorias.service';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [receitas, setReceitas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [receitasDoDia, setReceitasDoDia] = useState([]);

  useEffect(() => {
    findAllCategorias().then((dados) => {
      setCategorias(dados);
    });
    findAllReceitas().then((dados) => {
      setReceitas(dados);
      setReceitasDoDia(dados.filter(r => r.nota >= 4));
    });
  }, []);

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
                  keyExtractor={(item) => item.id}
                />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Melhor avaliadas</Text>
              <View style={styles.listContainer}>
                <FlatList
                  horizontal
                  data={receitas}
                  renderItem={({ item }) => (
                    <ItemCard 
                      style={styles.card}
                      titulo={item.tituloReceita}
                      nota={item.nota}
                      imagem={item.imagem}
                      onPress={() => navigation.navigate('Receita', { item })}
                    />
                  )}
                  keyExtractor={(item) => item.id}
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
                    <ItemCard style={styles.card} categoria={item.categoria} imagem={item.imagem} onPress={() => console.log("Vai para lista de intens por categoria!")} />
                  )}
                  keyExtractor={(item) => item.id}
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
