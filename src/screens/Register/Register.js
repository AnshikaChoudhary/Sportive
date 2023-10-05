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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import { images } from "../../assets/images";
import Btn from "../../components/TochableOpacity/btn";
import HoriLine from "../../components/horiLine/HoriLine";
import Photo from "../../components/import/Photo";
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Register = () => {
  const navigation = useNavigation();
  const [documentRead, setDocumentRead] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();
    var userData = {};
    if (password === passwordConfirm) {
      if (String(name).length <= 0) { Alert.alert("Please fill the Name"); return }
      if (String(phoneNumber).length <= 0) { Alert.alert("Please fill phone number"); return }
      if (String(email).length <= 0) { Alert.alert("Please fill the Email Address"); return }
      if (String(password).length <= 0) { Alert.alert("Please fill password"); return }
      if (String(location).length <= 0) { Alert.alert("Please fill your location"); return }
      if (!documentRead) { Alert.alert("Please verify you have read our Terms & Conditions"); return }

      if (name && phoneNumber && email && password && location && documentRead) {

        userData.name = name;
        userData.phoneNumber = phoneNumber;
        userData.email = email;
        userData.password = password;
        userData.location = location;
        navigation.navigate("Complete Your Profile", userData)
      }
    } else {
      Alert.alert("Password and Confirm Password did not match")
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Photo />
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="account-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput placeholder={"Name"} style={styles.input} onChangeText={(setName)} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="phone-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput
            placeholder={"Phone number"}
            keyboardType={"numeric"}
            style={styles.input}
            onChangeText={(setPhoneNumber)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="email-open-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput
            placeholder={"Email Id"}
            keyboardType={"email-address"}
            style={styles.input}
            onChangeText={(setEmail)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="map-marker-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput placeholder={"Location"} style={styles.input} onChangeText={(setLocation)} />

        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="lock-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput placeholder={"Password"} secureTextEntry={true} style={styles.input} onChangeText={(setPassword)} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="lock-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
          <TextInput placeholder={"Confirm Password"} secureTextEntry={true} style={styles.input} onChangeText={(setPasswordConfirm)} />
        </View>
        <View
          style={{ flexDirection: "row", width: "90%", marginVertical: 10 }}
        >
          {console.log(documentRead)}
          {documentRead ? (
            <Icon
              name="checkbox-marked-outline"
              size={25}
              color="#fff"
              onPress={() => setDocumentRead(false)}
              style={{ marginHorizontal: 15 }}
            />

          ) : (
            <Icon
              name="checkbox-blank-outline"
              size={25}
              color="#FFFFFF99"
              onPress={() => setDocumentRead(true)}
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
          onPress={(e) => handleRegister(e)}
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
    color: "#fff",
    fontWeight: "500",
  },
  loginBtn: {
    width: "100%",
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
