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
import SwitchSelector from "react-native-switch-selector";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from "../../assets/images";
import Btn from "../../components/TochableOpacity/btn";
import InputBox from "../../components/inputBox/inputBox";
import HoriLine from "../../components/horiLine/HoriLine";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Login = () => {
  const navigation = useNavigation();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const storeData = async (id, name) => {
  //   try {
  //     const jsonValue = JSON.stringify(id);
  //     await AsyncStorage.setItem("user_id", jsonValue);

  //     await AsyncStorage.setItem("username", name);

  //     setTimeout(() => {
  //       navigation.navigate("TabLayout");
  //     }, 100);
  //   } catch (e) {
  //     Alert.alert(e.toString());
  //     // saving error
  //   }
  // };

  // const fetchData = () => {
  //   console.log(password + ":" + username);
  //   fetch("http://62.72.31.254:5000/auth/login", {
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
  //       username: username,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         if (result.success) {
  //           storeData(result.data.user._id, result.data.username);
  //         } else {
  //           Alert.alert("UserName or Password is wrong");
  //         }
  //       },
  //       (error) => {
  //         console.log(error.toString());
  //         Alert.alert("ERROR HERE", error.toString());
  //       }
  //     );
  // };

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
          <InputBox
            placeholder={"Email Id/ Phone number"}
            style={styles.input}
          />
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
        <View style={{ alignItems: "flex-end", width: "90%" }}>
          <Text style={styles.underlineText}>Forgot Password?</Text>
        </View>
        <Btn
          style={styles.loginBtn}
          TextStyles={{ fontSize: 16, color: "#FFF" }}
          title="Login"
          onPress={() => navigation.navigate("TabLayout")}
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
    color: "#FFFFFF99",
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
export default Login;
