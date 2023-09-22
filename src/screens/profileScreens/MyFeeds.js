import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import Caption from "../../components/post/Caption";
import Video from "../../components/post/Video";
import Requirements from "../../components/post/Requirements";
import Album from "../../components/import/Album";

const MyFeeds = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Album />
        <Video />
        <Requirements />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
  },
});
export default MyFeeds;
