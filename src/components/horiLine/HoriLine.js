import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HoriLine = () => {
  return <View style={styles.line}></View>;
};
const styles = StyleSheet.create({
  line: {
    width: "30%",
    height: 1,
    backgroundColor: "#FFFFFF99",
    marginTop: 10,
  },
});
export default HoriLine;
