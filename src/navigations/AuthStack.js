import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LoginScreen}
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterScreen}
        name="register"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
