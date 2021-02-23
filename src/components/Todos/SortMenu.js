import React, { useState, useCallback } from 'react';
import { Menu, Button } from 'react-native-paper';
import { ASC, DESC } from '../../constants';

export const SortMenu = ({ value, label, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnPressButton = useCallback(() => {
    setShowMenu(true);
  }, []);

  const handleOnDismiss = useCallback(() => {
    setShowMenu(false);
  }, []);

  const handleOnPressMenuItem = useCallback(
    (type) => () => {
      onChange(type);
      handleOnDismiss();
    },
    [onChange],
  );

  return (
    <Menu
      visible={showMenu}
      anchor={<Button onPress={handleOnPressButton}>{label}</Button>}
      onDismiss={handleOnDismiss}>
      <Menu.Item
        title="Default"
        disabled={value === ''}
        onPress={handleOnPressMenuItem('')}
      />
      <Menu.Item
        title="Ascending"
        disabled={value === ASC}
        onPress={handleOnPressMenuItem(ASC)}
      />
      <Menu.Item
        title="Descending"
        disabled={value === DESC}
        onPress={handleOnPressMenuItem(DESC)}
      />
    </Menu>
  );
};
