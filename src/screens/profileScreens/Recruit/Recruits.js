import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { images } from "../../../assets/images";
import InputBox from "../../../components/inputBox/inputBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Recruits = () => {
  const DATA = [
    {
      photo: images.ChatPhoto,
      name: "John Nichk",
      occupation: "Sports Coach",
    },
    {
      photo: images.ChatPhoto,
      name: "John Nichk",
      occupation: "Sports Coach",
    },
    {
      photo: images.ChatPhoto,
      name: "John Nichk",
      occupation: "Sports Coach",
    },
    {
      photo: images.ChatPhoto,
      name: "John Nichk",
      occupation: "Sports Coach",
    },
    {
      photo: images.ChatPhoto,
      name: "John Nichk",
      occupation: "Sports Coach",
    },
    {
      photo: images.ChatPhoto,
      name: "John Nichk",
      occupation: "Sports Coach",
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)

    <TouchableOpacity style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <Image source={title.photo} resizeMode="cover" style={styles.img} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>{title.name}</Text>
          <Text style={styles.occupations}>{title.occupation}</Text>
        </View>
      </View>
      <Icon name="chevron-right" color="#FFFFFF33" size={30} />
    </TouchableOpacity>
  );
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            color: "#FFFFFFE5",
            fontSize: 16,
            fontWeight: "600",
            margin: 10,
          }}
        >
          All Recruits
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  occupations: {
    color: "#8C8C8C",
    fontWeight: "500",
    paddingVertical: 5,
    fontSize: 12,
  },
  img: {
    height: 45,
    width: 45,
  },
});
export default Recruits;
