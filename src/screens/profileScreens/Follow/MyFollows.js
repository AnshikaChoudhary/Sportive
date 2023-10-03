import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import Horizontal from "../../../components/horiLine/Horizontal";
import InputBox from "../../../components/inputBox/inputBox";
import Followers from "./Followers";
import Following from "./Following";

const MyFollows = () => {
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
            Followers
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
            Following
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
          <Followers />
        </>
      )}
      {count === 1 && (
        <>
          <Following />
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
export default MyFollows;
