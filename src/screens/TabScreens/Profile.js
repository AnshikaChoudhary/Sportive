import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { images } from "../../assets/images";
import Photo from "../../components/import/Photo";
import Btn from "../../components/TochableOpacity/btn";

const Profile = () => {
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
      <Btn
        style={styles.loginBtn}
        TextStyles={{ fontSize: 16, color: "#FFF" }}
        title="Edit Profile"
      />
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
    alignItems: "center",
  },
});
export default Profile;
