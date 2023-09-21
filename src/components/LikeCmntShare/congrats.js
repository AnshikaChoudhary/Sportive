import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { images } from "../../assets/images";
const Congrats = () => {
  return (
    <ImageBackground source={images.BtnBackground} style={styles.image}>
      <Icon name="thumb-up" color="#fff" size={25} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
  },
});
export default Congrats;
