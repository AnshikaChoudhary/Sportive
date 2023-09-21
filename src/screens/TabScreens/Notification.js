import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileImage from "../../components/import/ProfileImage";

export default function Notification() {
  const [isEnabled, setIsEnabled] = useState(false);
  const DATA = [
    {
      name: "Ravi Chauhan",
      like: " likes your comment:",
      wishes: "Congratulations 🎉👏.",
      dateTime: "Aug 4 at 6:33 AM",
    },
    {
      name: "Ravi Chauhan",
      like: " likes your comment:",
      wishes: "Congratulations 🎉👏.",
      dateTime: "Aug 4 at 6:33 AM",
    },
    {
      name: "Ravi Chauhan",
      like: " likes your comment:",
      wishes: "Congratulations 🎉👏.",
      dateTime: "Aug 4 at 6:33 AM",
    },
    {
      name: "Ravi Chauhan",
      like: " likes your comment:",
      wishes: "Congratulations 🎉👏.",
      dateTime: "Aug 4 at 6:33 AM",
    },
    {
      name: "Ravi Chauhan",
      like: " likes your comment:",
      wishes: "Congratulations 🎉👏.",
      dateTime: "Aug 4 at 6:33 AM",
    },
    {
      name: "Ravi Chauhan",
      like: " likes your comment:",
      wishes: "Congratulations 🎉👏.",
      dateTime: "Aug 4 at 6:33 AM",
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)
    <TouchableOpacity
      style={styles.item}
      // onPress={() => setIsEnabled((value) => !value)}
      // backgroundColor={isEnabled ? "#FFFFFF1A" : "#1D0D31"}
    >
      <ProfileImage />
      <View>
        <Text style={styles.name}>
          {title.name}
          <Text>{title.like}</Text>
        </Text>
        <Text style={styles.name}>{title.wishes}</Text>
        <Text style={styles.name}>{title.dateTime}</Text>
      </View>
      <Icon name="dots-horizontal" color="#FFFFFF80" size={30} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF1A",
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  name: {
    // fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFFCC",
  },
});
