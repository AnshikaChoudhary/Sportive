import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { images } from "../../assets/images";
import Btn from "../../components/TochableOpacity/btn";
import InputBox from "../../components/inputBox/inputBox";
import HoriLine from "../../components/horiLine/HoriLine";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Register = () => {
  const navigation = useNavigation();
  const [myicon, setmyIcon] = useState(1);
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [mobile, setMobileNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [text, onChangeValue] = React.useState("");

  // const fetchData = () => {
  //   fetch("http://62.72.31.254:5000/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-testing-platform": "web",
  //       "x-testing-version": "1.0.0",
  //       Connection: "keep-alive",
  //       Accept: "*/*",
  //       "Accept-Encoding": "gzip,deflate,br",
  //       "Accept-Language": "en",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       username: username,
  //       mobile_number: mobile,
  //       password: password,
  //       confirm_password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         if (result.success) {
  //           navigation.navigate("Login");
  //         } else {
  //           Alert.alert("Enter your details");
  //         }
  //       },
  //       (error) => {
  //         Alert.alert(error.toString());
  //       }
  //     );
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.maskImg}>
          <Image source={images.Mask} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="account-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <InputBox placeholder={"Name"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="phone-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <InputBox placeholder={"Phone number"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="email-open-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <InputBox placeholder={"Email Id"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="map-marker-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <InputBox placeholder={"Location"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="lock-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <InputBox placeholder={"Password"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="lock-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <InputBox placeholder={"Confirm Password"} style={styles.input} />
        </View>
        <View
          style={{ flexDirection: "row", width: "90%", marginVertical: 10 }}
        >
          {myicon ? (
            <Icon
              name="checkbox-blank-outline"
              size={25}
              color="#FFFFFF99"
              onPress={() => setmyIcon(0)}
              style={{ marginHorizontal: 15 }}
            />
          ) : (
            <Icon
              name="checkbox-marked-outline"
              size={25}
              color="#fff"
              onPress={() => setmyIcon(1)}
              style={{ marginHorizontal: 15 }}
            />
          )}
          <Text style={[styles.orLogin, { width: "80%" }]}>
            I have read, understood and agree to abide by the “
            <Text style={styles.underlineText}>User Terms</Text>”, “
            <Text style={styles.underlineText}>Privacy Policy</Text>” and
            understand that by checking this box, I am entering into a legally
            binding contract
          </Text>
        </View>
        <Btn
          style={styles.loginBtn}
          TextStyles={{ fontSize: 16, color: "#FFF" }}
          title="Sign Up"
          onPress={() => navigation.navigate("Complete Your Profile")}
        />
        <View
          style={{
            width: "90%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <HoriLine />
          <Text style={styles.orLogin}>Or login with</Text>
          <HoriLine />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // width: "80%",
          }}
        >
          <View style={styles.explore}>
            <Image source={images.Google} style={styles.img} />
            <Text style={styles.textExplore}>Google</Text>
          </View>
          <View style={styles.explore}>
            <Image source={images.Apple} style={styles.img} />
            <Text style={styles.textExplore}>Apple</Text>
          </View>
        </View>
        <View style={{ marginVertical: 50 }}>
          <Text style={styles.orLogin}>
            Already a Member?
            <Text style={{ color: "#fff" }}>Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#746ABA",
  },
  maskImg: {
    backgroundColor: "#FFFFFF1A",
    padding: 5,
    borderRadius: 100,
  },
  input: {
    paddingHorizontal: 40,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "95%",
  },
  icons: {
    zIndex: 1,
    position: "absolute",
    marginTop: 20,
    marginLeft: 20,
  },
  underlineText: {
    textDecorationLine: "underline",
    color: "#fff",
    fontWeight: "500",
  },
  loginBtn: {
    width: "90%",
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 30,
  },
  orLogin: {
    color: "#FFFFFF99",
    fontWeight: "500",
  },
  explore: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#FFFFFF4D",
    borderRadius: 10,
    width: "40%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 50,
    marginHorizontal: 20,
  },
  textExplore: {
    color: "#fff",
    fontWeight: "500",
    padding: 5,
  },
});
export default Register;
