import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens/AccountScreen';
import { MainHeader } from '../components/headers/MainHeader';

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AccountScreen}
        name={'account'}
        options={{
          header: () => <MainHeader title={'Account'} />,
        }}
      />
    </Stack.Navigator>
  );
};
