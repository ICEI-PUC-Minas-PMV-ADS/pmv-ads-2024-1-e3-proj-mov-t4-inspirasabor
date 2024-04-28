import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../components/Container';
import ItemCard from '../components/ItemCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { findAllReceitas } from '../services/receitas.service';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const ListaReceita = ({ route }) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const busca = route.params ? route.params : '';
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        findAllReceitas().then((dados) => {
            if (busca) {
                setReceitas(dados.filter(r => r.tituloReceita.toLowerCase().includes(busca.toLowerCase())));
            } else {
                setReceitas(dados);
            }
        });
    }, [isFocused]);

    return (
        <Container>
            <Header
                title={'Receitas'}
                leftIcon={'home'}
                onPressLeftIcon={() => navigation.navigate('Dashboard')}
                search={() => navigation.navigate('ListaReceita')} 
            />
            <Body>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Resultado</Text>
                    <View>
                        <FlatList
                            style={styles.section}
                            data={receitas}
                            renderItem={({ item }) => (
                                <ItemCard
                                    style={styles.card}
                                    titulo={item.tituloReceita}
                                    nota={item.nota}
                                    imagem={item.imagem}
                                    onPress={() => navigation.navigate('Receita', { item })} // Passando o item da receita como parâmetro
                                />
                            )}
                            keyExtractor={(item) => item.id.toString()} // Convertendo para string, pois o id é um número
                        />
                    </View>
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
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ListaReceita;
