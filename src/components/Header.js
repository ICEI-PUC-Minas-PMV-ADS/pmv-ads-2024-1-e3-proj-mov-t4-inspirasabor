import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, children, leftIcon, onPressLeftIcon, search, onPress }) => {
  return (
    <Appbar.Header>
      {
        leftIcon && <Appbar.Action icon={leftIcon} onPress={onPressLeftIcon} />
      }    
      <Appbar.Content title={title} />
      {
        onPress && <Appbar.Action icon="plus-box" onPress={onPress} />
      }
      {
        search && <Appbar.Action icon="magnify" onPress={search} />
      }
      <Appbar.Action icon="account-circle" onPress={() => {}} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
