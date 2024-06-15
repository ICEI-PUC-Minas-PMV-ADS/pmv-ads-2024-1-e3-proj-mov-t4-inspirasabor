import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Alert } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { getFavoritas, removeFavorita } from '../services/favoritas.service';
import ReceitaCard from '../components/ReceitaCard'; 
import { removeFavorita } from '../services/favoritas.service';

const FavoritasReceita = () => {
    const { userId } = useUser();
    const [favoritas, setFavoritas] = useState([]);

    useEffect(() => {
        fetchFavoritas();
    }, []);

    const fetchFavoritas = () => {
        getFavoritas().then((listaDeFavoritas) => {
            const favoritosFiltrados = listaDeFavoritas.filter(f => f.userId === userId);
            setFavoritas(favoritosFiltrados);
        }).catch(error => {
            console.error('Erro ao buscar receitas favoritas:', error);
            Alert.alert('Ocorreu um erro ao buscar receitas favoritas. Tente novamente mais tarde.');
        });
    };

    const desfavoritarReceita = (id) => {
        removeFavorita(id).then(res => {
            Alert.alert('Receita removida da lista de Favoritas!');
            fetchFavoritas();
        }).catch(error => {
            console.error('Erro ao remover a receita dos favoritos:', error);
            Alert.alert('Ocorreu um erro ao remover a receita dos favoritos. Tente novamente mais tarde.');
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={favoritas}
                renderItem={({ item }) => (
                    <ReceitaCard
                        receita={item.receita}
                        onRemove={() => desfavoritarReceita(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default FavoritasReceita;
