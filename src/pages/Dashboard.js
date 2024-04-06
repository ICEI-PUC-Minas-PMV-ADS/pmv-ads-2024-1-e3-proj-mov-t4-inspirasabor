import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import StarRating from '../components/StarRating';
import Receitas from '../db/Receitas';
import Categorias from '../db/Categorias';

const ItemCard = ({ titulo, nota, imagem, categoria }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Card.Cover style={styles.cardImage} source={{ uri: imagem }} />
      <Text variant="titleLarge">{titulo || categoria}</Text>
      <StarRating rating={nota} />
    </Card.Content>
  </Card>
);

const Dashboard = () => {
  return (
    <Container>
      <Header title={'Dashboard'} />
      <Body>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Receita do dia</Text>
            <Card>
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
                  data={Receitas}
                  renderItem={({ item }) => (
                    <ItemCard
                      titulo={item.titulo}
                      nota={item.nota}
                      imagem={item.imagem}
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
                  data={Categorias}
                  renderItem={({ item }) => (
                    <ItemCard categoria={item.categoria} imagem={item.imagem} />
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
  card: {
    marginHorizontal: 8,
    width: 200,
  },
  cardImage: {
    borderRadius: 5,
  },
});

export default Dashboard;
