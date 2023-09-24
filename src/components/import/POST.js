import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../../assets/images";

const POST = () => {
  return (
    <TouchableOpacity>
      <Image source={images.PostBackColor} style={{ borderRadius: 5 }} />
      <Text
        style={{
          color: "#FFFFFFCC",
          position: "absolute",
          zIndex: 1,
          marginTop: 5,
          marginLeft: 15,
        }}
      >
        POST
      </Text>
    </TouchableOpacity>
  );
};

export default POST;
