import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SwitchSelector from "react-native-switch-selector";
import { images } from "../assets/images";
import Login from "./Login/Login";
import Register from "./Register/Register";
import InputBox from "../components/inputBox/inputBox";
import Btn from "../components/TochableOpacity/btn";

const DetailPage = () => {
  const navigation = useNavigation();
  const [showLogin, setShowLogin] = useState(1); // Use a state variable to control which component to show

  const toggleComponent = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={images.Sportive} style={styles.img} />

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
            { label: "Login", value: 0 },
            { label: "Register", value: 1 },
          ]}
          testID="page-switch-selector"
          accessibilityLabel="page-switch-selector"
        />
        {showLogin ? <Login /> : <Register />}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#110026", //"#746ABA",
  },
  img: {
    marginVertical: 60,
  },
  switch: {
    width: "90%",
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default DetailPage;
