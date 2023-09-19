import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../../assets/images";

function Btn(Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={Props.onPress}
      style={{
        marginVertical: 30,
        //  borderRadius: 10,
        //borderWidth: 1,
        // borderColor: "#fff",
        width: "90%",
      }}
    >
      <ImageBackground
        source={images.BtnBackground}
        resizeMode="cover"
        style={[styles.btnLogin, Props.style]}
      >
        <Text style={[styles.btn, Props.TextStyles]}>{Props.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLogin: {
    // backgroundColor: "#004225",
    // textAlign: "center",
    borderRadius: 20,
    alignSelf: "center",
  },
  btn: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    //  padding: 10,
  },
});
export default Btn;
