import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodosScreen } from '../screens/TodosScreen';
import { MainHeader } from '../components/headers/MainHeader';

const Stack = createStackNavigator();

export const TodosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={TodosScreen}
        name="todos"
        options={{ header: () => <MainHeader title="Todos" /> }}
      />
    </Stack.Navigator>
  );
};
