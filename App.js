import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Rootstack from "./src/navigation/RootStack";

const App = () => {
  return (
    <NavigationContainer>
      <Rootstack />
    </NavigationContainer>
  );
};

export default App;
