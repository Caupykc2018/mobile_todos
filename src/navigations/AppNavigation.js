import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { useSelector } from 'react-redux';
import { MainBottomTab } from './MainBottomTab';

export const AppNavigation = () => {
  const { id } = useSelector((state) => state.currentUser);

  return (
    <NavigationContainer>
      {id ? <MainBottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
