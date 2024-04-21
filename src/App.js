import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './navigations/Main';
import Login from './pages/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
