import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewBase, StyleSheet, Text, Button, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import News from './screens/News';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
