import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { images } from "../../assets/images";
import LikeCmntShare from "../LikeCmntShare/likeCmntShare";
import LikeCmnt from "../LikeCmnt";
import NameHeader from "./NameHeader";
import Icon from "react-native-vector-icons/MaterialIcons";

const Requirements = () => {
  return (
    <View style={styles.item}>
      <NameHeader />
      <View style={styles.details}>
        <Icon name="apartment" color="#FFFFFFB2" size={25} />
        <Text style={styles.requireAdd}>PwC India</Text>
      </View>
      <View style={styles.details}>
        <Icon name="location-on" color="#FFFFFFB2" size={25} />
        <Text style={styles.requireAdd}>Jaipur</Text>
      </View>
      <View style={styles.details}>
        <Icon name="work-outline" color="#FFFFFFB2" size={25} />
        <Text style={styles.requireAdd}>Urgent Required Website Designer</Text>
      </View>
      <View style={styles.details}>
        <Icon name="schedule" color="#FFFFFFB2" size={25} />
        <Text style={styles.requireAdd}>Full Time</Text>
      </View>
      <Text style={styles.about}>
        We are looking for talented web designer to join our team; ability and
        commitment is more important than current skill set.
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
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  about: {
    color: "#FFFFFF99",
    fontWeight: "500",
    marginVertical: 20,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  likeComment: {
    color: "#fff",
    fontWeight: "600",
  },
  details: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  requireAdd: {
    color: "#FFFFFFCC",
    fontWeight: "600",
    paddingLeft: 10,
  },
});
export default Requirements;
