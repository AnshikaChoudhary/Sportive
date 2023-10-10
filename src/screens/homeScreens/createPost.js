import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../assets/images";
import InputBox from "../../components/inputBox/inputBox";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CreatePost = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const Album = ["bfgcgghh", "ggghhh"];
  const Public = ["Public", "Private"];
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={images.ChatPhoto}
          resizeMode="cover"
          style={styles.img}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>
            Gloria Sharma
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "#E254A4" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle="menu-swap"
              data={Public}
              search
              maxHeight={300}
              iconColor="#FFFFFF80"
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Public" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              // onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                // setIsFocus(false);
              }}
            />

            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "#E254A4" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle="menu-swap"
              data={Album}
              search
              maxHeight={300}
              iconColor="#FFFFFF80"
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Album" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              // onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                // setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <Icon
                  name="add"
                  size={20}
                  color="#A099A8"
                  onPress={toggleModal}
                />
              )}
            />
            {/* <Modal
                style={styles.mode}
                isVisible={isModalVisible}
                deviceWidth={100}
                // deviceHeight={10}
                // swipeDirection="up"
                onBackdropPress={() => setModalVisible(false)}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF33",
                    height: 4,
                    width: 60,
                    borderRadius: 60,
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                ></View>
                <TouchableOpacity
                  style={styles.posts}
                  onPress={() => navigation.navigate("Job Post")}
                >
                  <Icon name="work-outline" size={20} color="#FFFFFF99" />
                  <Text style={styles.postName}>Job Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.posts}>
                  <Icon name="photo-camera" size={20} color="#FFFFFF99" />
                  <Text style={styles.postName}>Photo / video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.posts}>
                  <Icon name="person-outline" size={20} color="#FFFFFF99" />
                  <Text style={styles.postName}>Tag people</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.posts}>
                  <Icon name="live-tv" size={20} color="#FFFFFF99" />
                  <Text style={styles.postName}>Live Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.posts}>
                  <Icon name="add" size={20} color="#FFFFFF99" />
                  <Text style={styles.postName}>Polls</Text>
                </TouchableOpacity>
              </Modal> */}
          </View>
        </View>
      </View>
      <InputBox
        placeholder={"What's on your mind?"}
        multiline={true}
        numberOfLines={5}
        style={styles.input}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110026",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    paddingHorizontal: 20,
    marginVertical: 10,
    // borderWidth: 0.1,
    width: "100%",
  },
  // dropcol: { width: "45%" },
  dropdown: {
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    paddingHorizontal: 5,
    // paddingVertical: 10,
    backgroundColor: "#FFFFFF1A",
    width: "40%",
  },

  placeholderStyle: {
    // fontSize: 16,
    color: "#FFFFFFCC",
    fontWeight: "500",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#FFFFFF1A",
    fontWeight: "500",
    // paddingVertical: 5,
  },
  inputSearchStyle: {
    fontSize: 16,
  },
  posts: {
    borderBottomWidth: 1,
    borderColor: "#FFFFFF1A",
    flexDirection: "row",
    paddingVertical: 10,
  },
  postName: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: 15,
  },
  mode: {
    backgroundColor: "#1D0D31",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 40,
  },
});
export default CreatePost;
