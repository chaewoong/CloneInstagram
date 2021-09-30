import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Mainheader = () => {
  return (
    <View style={styles.Positioner}>
      <Text>헤더 만들기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Positioner: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
  },
});

export default Mainheader;
