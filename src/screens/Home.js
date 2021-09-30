import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>홈화면입니당</Text>
      <Button title="이동하기" onPress={() => navigation.push("About")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
