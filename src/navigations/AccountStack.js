import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens/AccountScreen';
import { DefaultHeader } from '../components/headers/DefaultHeader';

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AccountScreen}
        name={'account'}
        options={{
          header: () => <DefaultHeader title={'Account'} />,
        }}
      />
    </Stack.Navigator>
  );
};
