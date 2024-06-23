import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import Container from '../components/Container';
import ReceitaCard from '../components/ReceitaCard';
import Body from '../components/Body';
import Header from '../components/Header';
import { getReceitas } from '../services/receita.service';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const ListaReceita = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [busca, setBusca] = useState('');
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        getReceitas().then((dados) => {
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
                leftIcon={'arrow-left'}
                onPressLeftIcon={() => navigation.goBack()}
            />
            <Body>
                <Searchbar
                    style={styles.serachBar}
                    placeholder="Digite o nome da receita"
                    onChangeText={setBusca}
                    value={busca}
                />
                <View style={styles.section}>
                    <FlatList
                        data={receitas}
                        renderItem={({ item }) => (
                            <ReceitaCard 
                                style={styles.card}
                                titulo={item.tituloReceita}
                                nota={item.media}
                                imagem={item.imagem}
                                onPress={() => navigation.navigate('Receita', { item })}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()} // Corrija a chave do FlatList
                    />
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
