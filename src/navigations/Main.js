import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
        options={{ header: () => null }}
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
