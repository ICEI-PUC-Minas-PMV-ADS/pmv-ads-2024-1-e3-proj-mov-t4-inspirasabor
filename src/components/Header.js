import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, children, leftIcon, onPressLeftIcon, rightIcon, onPressRightIcon, onPressPlusBox }) => {
  return (
    <Appbar.Header>
      {
        leftIcon && <Appbar.Action icon={leftIcon} onPress={onPressLeftIcon} />
      }    
      <Appbar.Content title={title} />
      {
        onPressPlusBox && <Appbar.Action icon="plus-box" onPress={onPressPlusBox} />
      }
      
      {
        rightIcon && <Appbar.Action icon={rightIcon} onPress={onPressRightIcon} />
      }
      <Appbar.Action icon="account-circle" onPress={() => {}} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
