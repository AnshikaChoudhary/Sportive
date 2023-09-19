import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native";
import Layout from "./src/layout/Layout";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </>
  );
}
