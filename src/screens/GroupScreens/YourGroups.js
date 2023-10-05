import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const YourGroups = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contain}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={styles.heading}>Pinned</Text>
          <Text style={[styles.heading, { color: "#6F6CBE" }]}>Edit</Text>
        </View>
        <Text style={styles.para}>
          Pinned groups are easier to find because they appear at the top of
          your groups. To pin a group, tap Edit.
        </Text>
      </View>
      <View style={styles.contain}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={styles.heading}>Groups you manage</Text>
          <Text style={[styles.heading, { color: "#6F6CBE" }]}>Create</Text>
        </View>
        <Text style={styles.para}>
          Become an admin or moderator of a group to see it listed here.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateGroup")}
          style={styles.btn}
        >
          <Text style={[styles.heading, { color: "#FFFFFFCC" }]}>
            Create Group
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  contain: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF33",
    backgroundColor: "#FFFFFF1A",
    padding: 10,
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: "#FFFFFFCC",
  },
  para: {
    color: "#FFFFFF99",
    fontWeight: "500",
    fontSize: 12,
    paddingVertical: 10,
  },
  btn: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFFFFF33",
    backgroundColor: "#FFFFFF0D",
    alignItems: "center",
    justifyContent: "center",
    width: 165,
    height: 40,
    marginLeft: "24%",
  },
});
export default YourGroups;
