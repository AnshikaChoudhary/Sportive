import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import InputBox from "../../components/inputBox/inputBox";
import Btn from "../../components/TochableOpacity/btn";

const data = [];
const JobPost = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <InputBox placeholder={"Job Title"} style={styles.input} />
          <InputBox placeholder={"Company"} style={styles.input} />
          <InputBox placeholder={"Workplace type"} style={styles.input} />
        </View>
        <View style={styles.dropCol}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "#E254A4" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle="menu-swap"
            data={data}
            search
            maxHeight={300}
            iconColor="#FFFFFF80"
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Job type" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <InputBox
            placeholder={"Message"}
            multiline={true}
            numberOfLines={5}
            style={[styles.input]}
          />
        </View>
        <Btn
          style={styles.loginBtn}
          TextStyles={{ fontSize: 16, color: "#FFF" }}
          title="Submit"
          onPress={() => navigation.navigate("TabLayout")}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#110026", //"#746ABA",
  },
  dropCol: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#FFFFFF1A",
    width: "90%",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#FFFFFF80",
    fontWeight: "500",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#FFFFFF1A",
    fontWeight: "500",
    paddingVertical: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    //     paddingHorizontal: 40,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "95%",
  },
  icons: {
    zIndex: 1,
    position: "absolute",
    marginTop: 20,
    marginLeft: "82%",
  },
  vReal: {
    backgroundColor: "#FFFFFF1A",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  innerThings: {
    color: "#FFFFFF80",
    marginHorizontal: 10,
  },
  fDrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 30,
  },
});
export default JobPost;
