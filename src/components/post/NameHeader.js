import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { images } from "../../assets/images";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const NameHeader = () => {
  return (
    <View style={styles.content}>
      <View style={{ flexDirection: "row" }}>
        <Image source={images.Person} />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={[styles.name]}>John Nichk</Text>
          <Text style={[styles.job]}>Sports Coach, 20 h </Text>
        </View>
      </View>
      <Icon name="dots-horizontal" color="#FFFFFF80" size={30} />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  name: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  job: {
    color: "#8C8C8C",
    fontSize: 12,
    fontWeight: "500",
  },
});
export default NameHeader;
