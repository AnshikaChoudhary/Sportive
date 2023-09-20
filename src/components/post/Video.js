import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { images } from "../../assets/images";
import LikeCmntShare from "../LikeCmntShare/likeCmntShare";
import LikeCmnt from "../LikeCmnt";
import NameHeader from "./NameHeader";
import Icon from "react-native-vector-icons/MaterialIcons";

const Video = () => {
  const [changeIcon, setchangeIcon] = useState(1);
  return (
    <View style={styles.item}>
      <NameHeader />
      <Image
        source={images.VideoPhoto}
        style={styles.img}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.videoIcons}>
        {changeIcon ? (
          <Icon
            name="volume-up"
            size={30}
            color="#FFFFFF"
            onPress={() => setchangeIcon(0)}
          />
        ) : (
          <Icon
            name="volume-off"
            size={30}
            color="#FFFFFF"
            onPress={() => setchangeIcon(1)}
          />
        )}
      </TouchableOpacity>

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
    paddingTop: 20,
    paddingBottom: 10,
  },
  img: {
    width: "100%",
    // borderRadius: 10,
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
  videoIcons: {
    position: "absolute",
    zIndex: 1,
    width: "97%",
    // borderWidth: 2,
    alignItems: "flex-end",
    height: "73%",
    justifyContent: "flex-end",
  },
});
export default Video;
