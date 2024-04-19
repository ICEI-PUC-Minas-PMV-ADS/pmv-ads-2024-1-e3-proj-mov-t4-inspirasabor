import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, children, home , search }) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon='home' onPress={home} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={search} />
      <Appbar.Action icon="account-circle" onPress={() => {}} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
