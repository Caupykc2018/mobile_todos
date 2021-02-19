import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodosScreen } from '../screens/TodosScreen';
import { TodosHeader } from '../components/headers/TodosHeader';

const Stack = createStackNavigator();

export const TodosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={TodosScreen}
        name="todos"
        options={{ header: () => <TodosHeader /> }}
      />
    </Stack.Navigator>
  );
};
