import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Container from '../components/Container';
import ReceitaCard from '../components/ReceitaCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { findAllReceitas } from '../services/receitas.service';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const ListaReceita = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [busca, setBusca] = useState('');
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        findAllReceitas().then((dados) => {
            if (busca) {
                setReceitas(dados.filter(r => r.tituloReceita.toLowerCase().includes(busca.toLowerCase())));
            } else {
                setReceitas(dados);
            }
        });
    }, [busca, isFocused]);

    return (
        <Container>
            <Header
                title={'Receitas'}
                leftIcon={'home'}
                onPressLeftIcon={() => navigation.navigate('Dashboard')}
            />
            <Body>
                <Searchbar
                    style={styles.serachBar}
                    placeholder="Digite o nome da receita"
                    onChangeText={setBusca}
                    value={busca}
                />
                <View style={styles.section}>
                    <View>
                        <FlatList
                            style={styles.section}
                            data={receitas}
                            renderItem={({ item }) => (
                                <ReceitaCard
                                    style={styles.card}
                                    titulo={item.tituloReceita}
                                    nota={item.media}
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
    serachBar: {
        marginBottom: 10,
        borderRadius: 5
    }
});

export default ListaReceita;
