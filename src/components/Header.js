import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, children }) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon='home' onPress={() => {}} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="account-circle" onPress={() => {}} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
