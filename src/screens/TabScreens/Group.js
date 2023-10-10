import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import InputBox from "../../components/inputBox/inputBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ForYou from "../GroupScreens/ForYou";
import YourGroups from "../GroupScreens/YourGroups";
import Discover from "../GroupScreens/Discover";

const Group = () => {
  const [showPage, setShowPage] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mind}>
        <InputBox placeholder={"Search people"} style={styles.input} />
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.navigate("")}
        >
          <Icon
            name="magnify"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <TouchableOpacity
          onPress={() => setShowPage(0)}
          style={[
            styles.changingBtn,
            { backgroundColor: showPage == 0 ? "#004225" : "#FFFFFF1A" },
          ]}
        >
          <Text style={styles.changingBtnText}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowPage(1)}
          style={[
            styles.changingBtn,
            { backgroundColor: showPage == 1 ? "#004225" : "#FFFFFF1A" },
          ]}
        >
          <Text style={styles.changingBtnText}>Your Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowPage(2)}
          style={[
            styles.changingBtn,
            { backgroundColor: showPage == 2 ? "#004225" : "#FFFFFF1A" },
          ]}
        >
          <Text style={styles.changingBtnText}>Discover</Text>
        </TouchableOpacity>
      </View>
      {showPage === 0 && (
        <>
          <ForYou />
        </>
      )}
      {showPage === 1 && (
        <>
          <YourGroups />
        </>
      )}
      {showPage === 2 && (
        <>
          <Discover />
        </>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
    flex: 1,
  },
  mind: {
    flexDirection: "row",
    // justifyContent: "space-between",
    margin: 10,
    // borderWidth: 2,
    width: "95%",
  },
  search: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 47,
    height: 47,
  },
  input: {
    width: 280,
    marginRight: 10,
  },
  changingBtn: {
    borderRadius: 80,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  changingBtnText: {
    color: "#FFFFFFE5",
    fontWeight: "600",
  },
});
export default Group;
