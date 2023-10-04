import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Horizontal = () => {
  return <View style={styles.line}></View>;
};
const styles = StyleSheet.create({
  line: {
    backgroundColor: "#FFFFFF",
    height: 1,
    width: "100%",
  },
});
export default Horizontal;
