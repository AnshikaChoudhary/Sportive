import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Switches from "../../components/import/Switches";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.setting, { justifyContent: "space-between" }]}>
        <Text
          style={[styles.terms, { fontWeight: "500", paddingVertical: 10 }]}
        >
          Notification Sound
        </Text>
        <Switches />
      </View>
      <View style={[styles.setting, { justifyContent: "space-between" }]}>
        <Text
          style={[styles.terms, { fontWeight: "500", paddingVertical: 10 }]}
        >
          Push Notifications
        </Text>
        <Switches />
      </View>
      <TouchableOpacity style={[styles.setting]}>
        <Icon name="share-variant-outline" color="#FFFFFF80" size={24} />
        <Text style={[styles.terms, styles.shift]}>Share app</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setting]}>
        <Icon name="delete-outline" color="#FFFFFF80" size={24} />
        <Text style={[styles.terms, styles.shift]}>Delete account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.setting]}
        onPress={() => navigation.navigate("Contact Us")}
      >
        <Icon name="progress-question" color="#FFFFFF80" size={24} />
        <Text style={[styles.terms, styles.shift]}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.setting]}
        onPress={() => navigation.navigate("Terms and Conditions")}
      >
        <Icon name="shield-alert-outline" color="#FFFFFF80" size={24} />
        <Text style={[styles.terms, styles.shift]}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.setting]}
        onPress={() => navigation.navigate("Privacy Policy")}
      >
        <Icon name="shield-alert-outline" color="#FFFFFF80" size={24} />
        <Text style={[styles.terms, styles.shift]}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setting]}>
        <Icon name="logout" color="#FFFFFF80" size={24} />
        <Text style={[styles.terms, styles.shift]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
    flex: 1,
  },
  setting: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF0D",
    marginBottom: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  terms: {
    color: "#FFFFFFE5",
    fontSize: 16,
    lineHeight: 25,
  },
  shift: {
    marginLeft: 10,
  },
});
export default Setting;
