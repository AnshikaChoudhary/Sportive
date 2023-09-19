import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

function Btn(Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.btnLogin, Props.style]}
      onPress={Props.onPress}
    >
      <Text style={[styles.btn, Props.TextStyles]}>{Props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: "#004225",
    // textAlign: "center",
    borderRadius: 10,
    // alignSelf: "center",
  },
  btn: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    //  padding: 10,
  },
});
export default Btn;
