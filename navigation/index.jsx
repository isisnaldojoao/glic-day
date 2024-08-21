import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TabNavigator } from './tab-navigator'; 
import { Register } from '../screens/register'; 

const Stack = createStackNavigator();

export default function RootStack() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        {!isRegistered ? (
          <Stack.Screen
            name="Register"
            children={(props) => <Register {...props} onRegister={() => setIsRegistered(true)} />}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
