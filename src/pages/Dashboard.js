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

  useEffect(() => {
    findAllCategorias().then((dados) => {
      setCategorias(dados);
    });
    findAllReceitas().then((dados) => {
      setReceitas(dados);
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
            <Text style={styles.sectionTitle}>Receita do dia</Text>
            <Card onPress={() => navigation.navigate('Receita')} mode='outlined'>
              <Card.Content>
                <Card.Cover 
                style={styles.cardImage} 
                source={{ uri: 'https://images.pexels.com/photos/1683549/pexels-photo-1683549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
              </Card.Content>
            </Card>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Melhor avaliadas</Text>
            <ScrollView horizontal>
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
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal>
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
            </ScrollView>
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
  cardImage: {
    borderRadius: 5,
  },
  card: {
    marginHorizontal: 8,
    width: 200,
  },
});

export default Dashboard;
