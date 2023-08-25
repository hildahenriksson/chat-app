import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}