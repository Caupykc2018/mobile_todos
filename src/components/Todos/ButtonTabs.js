import React, { useState, useCallback } from 'react';
import { Button, Menu } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTab } from '../../actions';
import { ACTIVE, ALL, COMPLETED } from '../../constants';
import { buttonTabsStyles } from './utils/styles';

export const ButtonTabs = () => {
  const [showMenu, setShowMenu] = useState(false);

  const tab = useSelector((state) => state.currentTab[state.currentUser.login]);

  const dispatch = useDispatch();

  const handleOnPressOpenMenu = useCallback(() => {
    setShowMenu(true);
  }, []);

  const handleOnPressDismiss = useCallback(() => {
    setShowMenu(false);
  }, []);

  const handleOnPressTab = useCallback(
    (tab) => () => {
      dispatch(setUserTab(tab));
      setShowMenu(false);
    },
    [],
  );

  return (
    <Menu
      visible={showMenu}
      anchor={
        <Button
          mode="outlined"
          style={buttonTabsStyles.button}
          onPress={handleOnPressOpenMenu}>
          Tabs
        </Button>
      }
      onDismiss={handleOnPressDismiss}>
      <Menu.Item
        title="All"
        onPress={handleOnPressTab(ALL)}
        disabled={ALL === tab}
      />
      <Menu.Item
        title="Active"
        onPress={handleOnPressTab(ACTIVE)}
        disabled={ACTIVE === tab}
      />
      <Menu.Item
        title="Completed"
        onPress={handleOnPressTab(COMPLETED)}
        disabled={COMPLETED === tab}
      />
    </Menu>
  );
};
