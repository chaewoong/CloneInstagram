import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Mainheader = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.Positioner}>
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Positioner: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 56,
    backgroundColor: "white",
  },
});

export default Mainheader;
