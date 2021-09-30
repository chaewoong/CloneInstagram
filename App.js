import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rootstack from './src/navigation/RootStack';


const App = () => {
  return (
    <NavigationContainer>
      <Rootstack/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    },
  });


export default App;
