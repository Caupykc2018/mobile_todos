import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountStack } from './AccountStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TodosStack } from './TodosStack';

const Tab = createBottomTabNavigator();

export const MainBottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="todos">
      <Tab.Screen
        component={AccountStack}
        name={'account'}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => (
            <Icon name="account" size={30} color={focused ? 'blue' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        component={TodosStack}
        name={'todos'}
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="clipboard-check"
              size={30}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
