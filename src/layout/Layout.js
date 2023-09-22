import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from "../TabNav/TabLayout";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import DetailPage from "../screens/DetailPage";
import CmpltUrProfile from "../screens/Register/cmpltUrProfile";
import Feed from "../screens/homeScreens/feed";
import Live from "../screens/homeScreens/Live";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsConditions from "../screens/TermsConditions";
import ContactUs from "../screens/ContactUs";
import MyFeeds from "../screens/profileScreens/MyFeeds";
const Stack = createNativeStackNavigator();

const Layout = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="TabLayout" component={TabLayout} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "#110026" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Complete Your Profile" component={CmpltUrProfile} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Live" component={Live} />
        <Stack.Screen name="Terms and Conditions" component={TermsConditions} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
        <Stack.Screen name="My Feed" component={MyFeeds} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});
export default Layout;
