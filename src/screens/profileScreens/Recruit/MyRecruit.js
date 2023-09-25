import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import Recruits from "./Recruits";
import Recruiting from "./Recruiting";
import Horizontal from "../../../components/horiLine/Horizontal";
import InputBox from "../../../components/inputBox/inputBox";

const MyRecruit = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          //           justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => setCount(0)}>
          <Text
            style={[
              styles.tabsBtn,
              { color: count == 0 ? "#fff" : "#FFFFFF80" },
            ]}
          >
            <Text>387 </Text>
            Recruits
          </Text>
          {count == 0 ? <Horizontal /> : ""}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(1)}>
          <Text
            style={[
              styles.tabsBtn,
              { color: count == 1 ? "#fff" : "#FFFFFF80" },
            ]}
          >
            <Text>450 </Text>
            Recruiting
          </Text>
          {count == 1 ? <Horizontal /> : ""}
        </TouchableOpacity>
      </View>
      <Image source={images.Recruit} resizeMode="cover" style={styles.img} />
      <View style={styles.mind}>
        <InputBox placeholder={"Search people"} style={styles.input} />
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.navigate("")}
        >
          <Icon
            name="magnify"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
      {count === 0 && (
        <>
          <Recruits />
        </>
      )}
      {count === 1 && (
        <>
          <Recruiting />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
    flex: 1,
  },
  tabsBtn: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  img: {
    margin: 10,
    width: "95%",
    borderRadius: 10,
  },
  mind: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    //borderWidth: 2,
  },
  search: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 47,
    height: 47,
  },
  input: {
    width: 260,
  },
});
export default MyRecruit;
