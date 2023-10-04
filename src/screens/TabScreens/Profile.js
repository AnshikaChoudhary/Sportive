import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import Photo from "../../components/import/Photo";
import Btn from "../../components/TochableOpacity/btn";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.details}>
        <Photo />
        <View style={styles.follow}>
          <Text style={styles.num}>1.4K</Text>
          <Text style={styles.followName}>Followers</Text>
        </View>
        <View style={styles.follow}>
          <Text style={styles.num}>1.4K</Text>
          <Text style={styles.followName}>Following</Text>
        </View>
      </View>
      <Text style={styles.holderDetail}>Aaron Hardie</Text>
      <Text style={styles.holderDetail}>(800) 555‑0100</Text>

      <Text style={styles.holderDetail}>companyname@gmail.com</Text>
      <Text
        style={[
          styles.holderDetail,
          { fontSize: 14, fontWeight: "500", lineHeight: 22 },
        ]}
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type Lorem Ipsum .
      </Text>
      <View style={styles.extraDetails}>
        <Text style={[styles.holderDetail, styles.extra]}>20 - May - 1999</Text>
        <Text style={[styles.holderDetail, styles.extra]}>Height: 5.6</Text>
        <Text style={[styles.holderDetail, styles.extra]}>My Role</Text>
        <Text style={[styles.holderDetail, styles.extra]}>Committed</Text>
        <Text style={[styles.holderDetail, styles.extra]}>Cricket player</Text>
        <Text style={[styles.holderDetail, styles.extra]}>College</Text>
        <Text style={[styles.holderDetail, styles.extra]}>
          17, Iskcon Rd, opposite Ganesh Garden, Patel Nagar, Mansarovar,
          Jaipur, Rajasthan 302020
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Btn
          style={styles.loginBtn}
          TextStyles={{ fontSize: 16, color: "#FFF" }}
          title="Edit Profile"
        />
      </View>
      <Text
        style={{
          color: "#FFFFFFE5",
          fontWeight: "700",
          fontSize: 20,
          margin: 20,
        }}
      >
        All Shortcuts
      </Text>
      <View style={styles.blocks}>
        <TouchableOpacity
          style={styles.shortcut}
          onPress={() => navigation.navigate("MyRecruit")}
        >
          <Image source={images.ShortCut1} />
          <Text style={styles.shortcutItems}>Recruit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shortcut}
          onPress={() => navigation.navigate("Chat Inbox")}
        >
          <Image source={images.ShortCut2} />
          <Text style={styles.shortcutItems}>Chat Inbox</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.blocks}>
        <TouchableOpacity style={styles.shortcut}>
          <Image source={images.ShortCut3} />
          <Text style={styles.shortcutItems}>My Group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shortcut}
          onPress={() => navigation.navigate("My Feed")}
        >
          <Image source={images.ShortCut4} />
          <Text style={styles.shortcutItems}>My Feeds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.blocks}>
        <TouchableOpacity style={styles.shortcut}>
          <Image source={images.ShortCut5} />
          <Text style={styles.shortcutItems}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110026",
    flex: 1,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginVertical: 10,
  },
  follow: {
    alignItems: "center",
    marginTop: 30,
  },
  num: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFFCC",
  },
  followName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF80",
    textDecorationLine: "underline",
  },
  holderDetail: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF99",
    marginHorizontal: 20,
  },
  extraDetails: {
    backgroundColor: "#1D0D31",
    marginVertical: 20,
  },
  extra: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#FFFFFF0D",
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
  },
  blocks: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  shortcut: {
    backgroundColor: "#FFFFFF33",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "48%",
  },
  shortcutItems: {
    color: "#FFFFFFCC",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default Profile;
