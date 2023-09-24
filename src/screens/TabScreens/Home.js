import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { images } from "../../assets/images";
import InputBox from "../../components/inputBox/inputBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import SwitchSelector from "react-native-switch-selector";
import Feed from "../homeScreens/feed";
import Live from "../homeScreens/Live";

const Home = () => {
  const navigation = useNavigation();
  const [showLogin, setShowLogin] = useState(1); // Use a state variable to control which component to show

  const toggleComponent = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          marginHorizontal: 15,
        }}
      >
        <Image source={images.Logo} style={styles.Logo} resizeMode="cover" />

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.topButtons}
            onPress={() => navigation.navigate("Create Post")}
          >
            <Image source={images.Add} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topButtons}
            onPress={() => navigation.navigate("Chat Inbox")}
          >
            <Image source={images.Forum} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.topText}>Hey, John 👋🏻</Text>
      <View style={styles.mind}>
        <Image source={images.Char} style={{ marginTop: 5 }} />
        <InputBox placeholder={"What's on your mind?"} style={styles.input} />
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
      <SwitchSelector
        initial={0}
        onPress={toggleComponent}
        textColor={"#FFFFFF99"}
        selectedColor={"#fff"}
        buttonColor={"#004225"}
        backgroundColor={"#FFFFFF1A"}
        // borderColor={"#004225"}
        buttonMargin={5}
        borderRadius={10}
        style={styles.switch}
        // hasPadding
        options={[
          { label: "Feed", value: 0 },
          { label: "Live", value: 1 },
        ]}
        testID="page-switch-selector"
        accessibilityLabel="page-switch-selector"
      />
      {showLogin ? <Feed /> : <Live />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#110026", //"#746ABA",
  },
  Logo: {
    // borderRadius: 100,
    // height: 30,
    // width: 30,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
  },
  topButtons: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  topText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    margin: 20,
  },
  input: {
    // width: "70%",
    paddingHorizontal: "7%",
    marginHorizontal: 15,
  },
  mind: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // width: "90%",
    marginHorizontal: 20,
  },
  search: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  switch: {
    // width: "90%",
    borderRadius: 10,
    margin: 20,
  },
});
export default Home;
