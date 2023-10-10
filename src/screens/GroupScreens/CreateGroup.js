import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Btn from "../../components/TochableOpacity/btn";
import InputBox from "../../components/inputBox/inputBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CreateGroup = () => {
  const [radioButton, setRadioButton] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <Icon
        name="camera-outline"
        size={40}
        color="#FFFFFF80"
        style={{
          borderRadius: 100,
          padding: 20,
          backgroundColor: "#FFFFFF1A",
          margin: 10,
          height: 80,
          width: 80,
          alignSelf: "center",
        }}
      />

      <InputBox
        placeholder={"Name your Group"}
        multiline={true}
        style={[styles.input]}
      />
      <InputBox
        placeholder={"Add Members"}
        multiline={true}
        style={[styles.input]}
      />
      <InputBox
        placeholder={"Group Description"}
        multiline={true}
        numberOfLines={5}
        style={[styles.input]}
      />

      <Text style={styles.bigText}>Privacy</Text>
      <TouchableOpacity style={styles.blocks} onPress={() => setRadioButton(1)}>
        <Icon
          name="earth"
          size={20}
          color="#FFFFFF80"
          style={{
            borderRadius: 100,
            padding: 10,
            backgroundColor: "#FFFFFF1A",
            margin: 10,
            height: 40,
            width: 40,
          }}
        />
        <View style={{ width: "70%" }}>
          <Text style={styles.privacy}>Public</Text>
          <Text style={styles.privacyText}>
            Anyone can see who's in the group and what they post.
          </Text>
        </View>
        <Icon
          name={radioButton === 1 ? "radiobox-marked" : "radiobox-blank"}
          size={25}
          color="#FFFFFF80"
          style={styles.pR}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.blocks} onPress={() => setRadioButton(0)}>
        <Icon
          name="lock-outline"
          size={20}
          color="#FFFFFF80"
          style={{
            borderRadius: 100,
            padding: 10,
            backgroundColor: "#FFFFFF1A",
            margin: 10,
            height: 40,
            width: 40,
          }}
        />
        <View style={{ width: "70%" }}>
          <Text style={styles.privacy}>Private</Text>
          <Text style={styles.privacyText}>
            Anyone can see who's in the group and what they post.
          </Text>
        </View>
        <Icon
          name={radioButton === 0 ? "radiobox-marked" : "radiobox-blank"}
          size={25}
          color="#FFFFFF80"
          style={styles.pR}
        />
      </TouchableOpacity>

      <Btn
        style={[styles.loginBtn, { borderRadius: 20 }]}
        TextStyles={{ fontSize: 16, color: "#FFF" }}
        title="Create Group"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
    flex: 1,
    padding: 10,
    // alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
    alignContent: "center",
    marginLeft: 30,
  },
  input: {
    //     paddingHorizontal: 40,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "95%",
  },
  bigText: {
    color: "#FFFFFFE5",
    fontSize: 20,
    fontWeight: "600",
    margin: 10,
    // textAlign: "left",
  },
  blocks: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF80",
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  privacy: {
    color: "#FFFFFFCC",
    fontSize: 18,
    fontWeight: "600",
  },
  privacyText: {
    color: "#FFFFFF99",
    fontWeight: "500",
  },
  pR: {
    paddingTop: 15,
  },
});
export default CreateGroup;
