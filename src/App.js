import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './navigations/Route';
import UserProvider from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}
