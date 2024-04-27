import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper'; // Importe o IconButton do react-native-paper
import Dashboard from '../pages/Dashboard';
import ListaReceita from '../pages/ListaReceita';
import Receita from '../pages/Receita';
import ReceitasPorCategoria from '../pages/ReceitasPorCategoria';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ListaReceita"
        component={ListaReceita}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Receita"
        component={Receita}
        options={({ navigation }) => ({
          headerLeft: () => (
            <IconButton // Adicione um IconButton à esquerda do cabeçalho
              icon="arrow-left"
              onPress={() => navigation.navigate('Dashboard')} // Navegue de volta para a tela inicial
            />
          ),
          headerLeftContainerStyle: { paddingLeft: 10 }, // Adicione um espaçamento à esquerda do botão
          header: () => null,
        })}
      />
      <Stack.Screen
        name="ReceitasPorCategoria"
        component={ReceitasPorCategoria}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Main;


