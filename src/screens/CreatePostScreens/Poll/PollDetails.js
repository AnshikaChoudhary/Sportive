import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import InputBox from "../../../components/inputBox/inputBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { images } from "../../../assets/images";

const PollDetails = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>QUESTION</Text>
        <InputBox
          placeholder={"Who is best Athlete sep 2023?"}
          style={styles.input}
        />
        <Text style={styles.heading}>OPTIONS</Text>
        <View style={styles.block}>
          <View style={styles.insideBlock}>
            <Text style={styles.blockText}>LeBron James</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#fff", fontSize: 16, padding: 3 }}>
                1 Vote
              </Text>
              <Icon name="star-outline" color="#FFFFFF" size={25} />
            </View>
          </View>
          <View style={styles.voting}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={images.ChatPhoto}
                style={{ width: 40, height: 40 }}
                resizeMode="cover"
              />
              <Text style={[styles.voterName, { fontSize: 16, marginLeft: 5 }]}>
                Gloria Sharma
              </Text>
            </View>
            <Text style={[styles.voterName, { fontSize: 12 }]}>
              Today 11:32 PM
            </Text>
          </View>
          <View style={styles.insideBlock}>
            <Text style={styles.blockText}>Babe Ruth</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#fff", fontSize: 16, padding: 3 }}>
                0 Vote
              </Text>
              {/* <Icon name="star-outline" color="#FFFFFF" size={25} /> */}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110026",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    color: "#FFFFFF80",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    paddingVertical: 5,
  },
  input: {
    //     paddingHorizontal: 10,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "100%",
  },
  block: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    marginVertical: 10,
  },

  insideBlock: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF1A",
    borderRadius: 10,
    padding: 10,
  },
  blockText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  voting: {
    backgroundColor: "#FFFFFF14",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
  },
  voterName: {
    color: "#fff",
    fontWeight: "600",
    paddingVertical: 10,
  },
});
export default PollDetails;
