import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Mainheader } from "../components";

const About = () => {
  return (
    <>
      <Text>어바웃화면입니당</Text>
    </>
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

export default About;
