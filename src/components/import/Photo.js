import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { images } from "../../assets/images";

const Photo = () => {
  return (
    <View style={styles.maskImg}>
      <Image source={images.Mask} />
    </View>
  );
};
const styles = StyleSheet.create({
  maskImg: {
    backgroundColor: "#FFFFFF1A",
    padding: 5,
    borderRadius: 100,
  },
});
export default Photo;
