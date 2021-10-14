import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import { Mainheader } from "../components";

const Stack = createStackNavigator();

const Rootstack = () => {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="App" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default Rootstack;
