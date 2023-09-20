import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { images } from "../../assets/images";
import LikeCmntShare from "../LikeCmntShare/likeCmntShare";
import LikeCmnt from "../LikeCmnt";
import NameHeader from "./NameHeader";

const PostImage = () => {
  return (
    <View style={styles.item}>
      <NameHeader />
      <Text style={styles.about}></Text>
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
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 20,
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
export default PostImage;
