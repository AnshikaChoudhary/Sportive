import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileImage = () => {
  return (
    <View style={styles.proof}>
      <Icon name="account" color="#FFFFFF80" size={45} />
    </View>
  );
};
const styles = StyleSheet.create({
  proof: {
    backgroundColor: "#1D0D31",
    borderRadius: 100,
    padding: 10,
  },
});
export default ProfileImage;
