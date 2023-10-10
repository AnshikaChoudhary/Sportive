import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { images } from "../../assets/images";
import Caption from "../../components/post/Caption";
import InputBox from "../../components/inputBox/inputBox";

const ForYou = () => {
  const DATA = [
    {
      photo: images.LogoPlaceholder,
      name: "Interaction Design Association (IxDA)",
      occupation: "Mauricio Manhaes",
      captionProfile: images.ChatPhoto,
    },
    {
      photo: images.LogoPlaceholder,
      name: "Interaction Design Association (IxDA)",
      occupation: "Mauricio Manhaes",
      captionProfile: images.ChatPhoto,
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)

    <TouchableOpacity style={styles.item}>
      <View style={{ flexDirection: "row", paddingVertical: 10 }}>
        <Image source={title.photo} resizeMode="cover" style={styles.img} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>{title.name}</Text>
          <Text style={styles.occupations}>{title.occupation}</Text>
        </View>
        <Icon name="dots-horizontal" size={25} color="#FFFFFF80" />
      </View>
      <Caption />
      <View style={{ flexDirection: "row", paddingVertical: 10 }}>
        <Image source={title.captionProfile} style={styles.img} />
        <InputBox
          placeholder={"Write a comment..."}
          style={{ width: 240, marginHorizontal: 20 }}
        />
      </View>
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
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF0D",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  occupations: {
    color: "#8C8C8C",
    fontSize: 12,
    fontWeight: "500",
  },
});
export default ForYou;
