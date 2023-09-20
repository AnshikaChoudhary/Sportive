import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Dot from "./Dot";

const LikeCmnt = () => {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
      <Text style={styles.likeComment}>88 Likes</Text>
      <Dot />
      <Text style={styles.likeComment}>4 comments</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  likeComment: {
    color: "#fff",
    fontWeight: "600",
  },
});
export default LikeCmnt;
