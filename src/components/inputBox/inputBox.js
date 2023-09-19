import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

function InputBox(Props) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={Props.placeholder}
        style={[styles.entry, Props.style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    flexDirection: "row",
  },
  entry: {
    fontSize: 16,
    // marginVertical: 10,
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    padding: 10,
    fontWeight: "500",
    color: "#FFFFFF99",
    // width: "95%",
  },
});
export default InputBox;
