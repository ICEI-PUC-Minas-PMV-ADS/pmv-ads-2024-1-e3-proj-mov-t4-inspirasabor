import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, children, leftIcon, onPressLeftIcon, search }) => {
  return (
    <Appbar.Header>
      {
        leftIcon && <Appbar.Action icon={leftIcon} onPress={onPressLeftIcon} />
      }
      <Appbar.Content title={title} />
      {
        search && <Appbar.Action icon="magnify" onPress={search} />
      }
      <Appbar.Action icon="account-circle" onPress={() => {}} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
