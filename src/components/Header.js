import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, leftIcon, onPressLeftIcon, rightIcon, onPressRightIcon, middleIconA, onPressMiddleIconA, middleIconB, onPressMiddleIconB, children }) => {

  return (
    <Appbar.Header>

      {leftIcon && <Appbar.Action icon={leftIcon} onPress={onPressLeftIcon} />}

      <Appbar.Content title={title} />

      {middleIconA && <Appbar.Action icon={middleIconA} onPress={onPressMiddleIconA} />}
      {middleIconB && <Appbar.Action icon={middleIconB} onPress={onPressMiddleIconB} />}
      {rightIcon && <Appbar.Action icon={rightIcon} onPress={onPressRightIcon} />}
      {children}

    </Appbar.Header>
  );
};

export default Header;
