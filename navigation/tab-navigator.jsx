import React from 'react';

import { TabBarIcon } from '../components/TabBarIcon';
import { TabOneScreen } from '../screens/one'; 
import { TabTwoScreen } from '../screens/two'; 
import { TabThreeScreen } from '../screens/three'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          title: '',
          headerShown: false,
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: '',
          headerShown: false,
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="plus-circle" size={40} color={'#1365A0'} />
          ),
        }}
      />
      <Tab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: '',
          headerShown: false,
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="history" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
