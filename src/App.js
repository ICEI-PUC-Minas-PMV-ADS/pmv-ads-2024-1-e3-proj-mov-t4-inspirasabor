import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './navigations/Route';
import Receita from './pages/Receita';
import UserProvider from './contexts/UserContext';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}
