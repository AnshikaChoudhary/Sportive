import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

function InputBox(Props) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholderTextColor="#FFFFFF80"
        placeholder={Props.placeholder}
        style={[styles.entry, Props.style, styles.inputStyle]}
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
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    padding: 10,
    fontWeight: "500",
  },
});
export default InputBox;
