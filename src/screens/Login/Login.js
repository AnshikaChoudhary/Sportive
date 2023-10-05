/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from "../../assets/images";
import Btn from "../../components/TochableOpacity/btn";
import HoriLine from "../../components/horiLine/HoriLine";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Logs } from 'expo'
import { Loginapi } from "../../_services/auth.service";

Logs.enableExpoCliLogging()

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    var InputsValue = {
      'email': email,
      'password': password
    }

    e.preventDefault();
    Loginapi(InputsValue).then(async (response) => {
      // setIsLoding(false)
      console.log(response, "response");
      if (response?.success) {

        let data = response?.data;
        let users = response?.data;
        try {
          //await AsyncStorage.setItem("role", users?._id);
          await AsyncStorage.setItem("token_key", data?.token);
          await AsyncStorage.setItem("users", JSON.stringify(users));
          console.log(data);
          navigation.navigate("TabLayout")

        } catch (error) {
          console.log(error);
        }
      } else if (response?.message === 'YOU_ARE_NOT_A_ADMIN') {
        //document.getElementById('errorMsg').textContent = "You are not authorized to login to Admin";
      } else {
        Alert.alert('Invalid Email/Password');
        //document.getElementById('errorMsg').textContent = "Invalid User Name or password.";
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="account-outline"
            // name="email-open-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput
            placeholder={"Email Id/ Phone number"}
            style={styles.input}
            onChangeText={(setEmail)}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon
            name="lock-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput
            placeholder={"Password"}
            style={styles.input}
            onChangeText={(setPassword)}
          />
        </View>
        <View style={{ alignItems: "flex-end", width: "90%" }}>
          <Text style={styles.underlineText}>Forgot Password?</Text>
        </View>
        <Btn
          style={[styles.loginBtn, { borderRadius: 20 }]}
          TextStyles={{ fontSize: 16, color: "#FFF" }}
          title="Login"
          onPress={(e) => handleLogin(e)}
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
            Don’t have an account?
            <Text style={{ color: "#fff" }}>Sign Up</Text>
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
  input: {
    paddingHorizontal: 40,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "90%",
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 10,
    paddingLeft: 50,
    color: 'white',
  },
  icons: {
    zIndex: 1,
    position: "absolute",
    marginTop: 20,
    marginLeft: 20,
  },
  underlineText: {
    textDecorationLine: "underline",
    color: "#FFFFFF99",
    fontWeight: "500",
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    // marginVertical: 30,
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
export default Login;
