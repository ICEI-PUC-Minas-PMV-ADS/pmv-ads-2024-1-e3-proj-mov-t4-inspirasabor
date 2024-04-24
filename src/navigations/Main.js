import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import ListaReceita from '../pages/ListaReceita';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
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
    </Stack.Navigator>
  );
};

export default Main;
