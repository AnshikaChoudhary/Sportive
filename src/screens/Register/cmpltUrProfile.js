import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from 'react-native-date-picker';

import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import Btn from "../../components/TochableOpacity/btn";

const data = [];
const CmpltUrProfile = (props) => {

  const navigation = useNavigation();
  const [radioButton, setRadioButton] = useState("Yes");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <ScrollView>
      <View style={styles.container}>
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
            placeholder={!isFocus ? "Select User type" : "..."}
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput placeholder={"DOB"} style={styles.input} onPressIn={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <Icon
            name="calendar-outline"
            size={25}
            color="#FFFFFF99"
            style={styles.icons}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder={"Occupation"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder={"Hometown"} style={styles.input} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder={"Height"} style={styles.input} />
        </View>
        <View style={styles.vReal}>
          <TouchableOpacity
            style={styles.fDrow}
            onPress={() => setRadioButton("Yes")}
          >
            <Icon
              name={
                radioButton === "Yes" ? "radiobox-marked" : "radiobox-blank"
              }
              size={25}
              color="#FFFFFF80"
              style={styles.pR}
            />
            <Text style={styles.innerThings}>Committed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fDrow}
            onPress={() => setRadioButton("No")}
          >
            <Icon
              name={radioButton === "No" ? "radiobox-marked" : "radiobox-blank"}
              size={25}
              color="#FFFFFF80"
              style={styles.pR}
            />
            <Text style={styles.innerThings}>Uncommitted</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Contact With any team/collage"}
            multiline={true}
            style={styles.input}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Description"}
            multiline={true}
            numberOfLines={5}
            style={[styles.input]}
          />
        </View>
        <Btn
          style={styles.loginBtn}
          TextStyles={{ fontSize: 16, color: "#FFF" }}
          title="Save"
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
    marginTop: 20,
    marginBottom: 10,
    // paddingHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF1A",
    width: "90%",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#FFFFFF1A",
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
    paddingHorizontal: 40,
    marginVertical: 10,
    width: "90%",
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 10,
    color: 'white',
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
export default CmpltUrProfile;
