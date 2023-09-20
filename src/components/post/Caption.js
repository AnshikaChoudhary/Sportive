import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LikeCmntShare from "../LikeCmntShare/likeCmntShare";
import LikeCmnt from "../LikeCmnt";
import NameHeader from "./NameHeader";

const Caption = () => {
  return (
    <View style={styles.item}>
      <NameHeader />
      <Text style={styles.about}>
        Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque
        amet in auctor ac
      </Text>
      <LikeCmnt />
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#fff",
          marginVertical: 10,
        }}
      ></View>
      <LikeCmntShare style={{ paddingHorizontal: 20 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF1A",
    marginHorizontal: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  about: {
    color: "#FFFFFF99",
    fontWeight: "500",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  likeComment: {
    color: "#fff",
    fontWeight: "600",
  },
});
export default Caption;
