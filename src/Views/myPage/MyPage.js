import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyPage = () => {
  return (
    <View style={styles.container}>
      <Text>마이페이지 화면</Text>
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

export default MyPage;
