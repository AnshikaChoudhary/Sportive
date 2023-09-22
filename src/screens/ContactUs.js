/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Btn from "../components/TochableOpacity/btn";
import InputBox from "../components/inputBox/inputBox";

const ContactUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <InputBox placeholder={"Name"} style={styles.input} />
      <InputBox placeholder={"Email Id"} style={styles.input} />
      <InputBox
        placeholder={"Mobile Number"}
        keyboardType={"numeric"}
        style={styles.input}
      />
      <InputBox
        placeholder={"Message"}
        multiline={true}
        numberOfLines={5}
        style={styles.input}
      />

      <Btn
        style={[styles.loginBtn, { borderRadius: 20 }]}
        TextStyles={{ fontSize: 16, color: "#FFF" }}
        title="Submit"
        onPress={() => navigation.navigate("")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#110026",
  },
  input: {
    paddingHorizontal: 20,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "90%",
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    // marginVertical: 30,
  },
});
export default ContactUs;
