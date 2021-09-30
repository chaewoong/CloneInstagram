import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';


const Stack = createStackNavigator();

const Rootstack = () => {
    return (
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{
            headerShown: false
            }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}

export default Rootstack;