import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputBox from "../../../components/inputBox/inputBox";
import Btn from "../../../components/TochableOpacity/btn";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const CreatePoll = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>QUESTION</Text>
        <InputBox
          placeholder={"Who is best Athlete sep 2023?"}
          style={styles.input}
        />
        <Text style={styles.heading}>OPTIONS</Text>
        <View style={styles.block}>
          <TouchableOpacity style={styles.insideBlock}>
            <Text style={styles.blockText}>LeBron James</Text>
            <Icon name="menu" color="#FFFFFF33" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.insideBlock}>
            <Text style={styles.blockText}>Babe Ruth</Text>
            <Icon name="menu" color="#FFFFFF33" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.insideBlock}>
            <Text
              style={{ color: "#FFFFFF80", fontWeight: "500", fontSize: 20 }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Btn
            style={styles.loginBtn}
            TextStyles={{ fontSize: 16, color: "#FFF" }}
            title="Cancel"
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110026",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    color: "#FFFFFF80",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    paddingVertical: 5,
  },
  input: {
    //     paddingHorizontal: 10,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "100%",
  },
  block: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    marginVertical: 10,
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
  },
  insideBlock: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF1A",
    borderRadius: 10,
    padding: 10,
  },
  blockText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
export default CreatePoll;
