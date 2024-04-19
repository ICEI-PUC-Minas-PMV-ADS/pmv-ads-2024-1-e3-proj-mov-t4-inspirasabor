import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../components/Container';
import ItemCard from '../components/ItemCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { findAllReceitas } from '../services/receitas.service';
import { useNavigation } from '@react-navigation/native';

const ListaReceita = () => {
    const navigation = useNavigation();
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        findAllReceitas().then((dados) => {
        setReceitas(dados);
        });
    }, []);

    return (
        <Container>
            <Header 
            title={'Receitas'}
            home={() => navigation.navigate('Dashboard')} />
            <Body>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Resultado</Text>
                    <ScrollView>
                    <View>
                        <FlatList style={styles.section}
                        data={receitas}
                        renderItem={({ item }) => (
                            <ItemCard style={styles.card}
                            titulo={item.tituloReceita}
                            nota={item.nota}
                            imagem={item.imagem}
                            onPress={() => navigation.navigate('Receita', {item})}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        />
                    </View>
                    </ScrollView>
                </View>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ListaReceita;
