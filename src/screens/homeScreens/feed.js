import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { images } from "../../assets/images";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Dot from "../../components/Dot";
import LikeCmntShare from "../../components/LikeCmntShare/likeCmntShare";
import HoriLine from "../../components/horiLine/HoriLine";

const Feed = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      image: images.Person,
      title: "John Nichk",
      occupation: "Sports Coach, 20 h  ",
      about:
        "Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac",
      like: "88 Likes",
      comment: "4 comments",
    },
    {
      image: images.Person,
      title: "John Nichk",
      occupation: "Sports Coach, 20 h  ",
      about: images.VideoPhoto,
      like: "88 Likes",
      comment: "4 comments",
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)
    <View style={styles.item}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <Image source={title.image} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={[styles.name]}>{title.title}</Text>
            <Text style={[styles.job]}>{title.occupation}</Text>
          </View>
        </View>
        <Icon name="dots-horizontal" color="#FFFFFF80" size={30} />
      </View>
      <Text style={styles.about}>{title.about}</Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <Text style={styles.likeComment}>{title.like}</Text>
        <Dot />
        <Text style={styles.likeComment}>{title.comment}</Text>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#fff",
          marginVertical: 10,
        }}
      ></View>
      <LikeCmntShare style={{ paddingHorizontal: 20 }} />
    </View>
  );
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
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
    backgroundColor: "#FFFFFF1A",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  name: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  job: {
    color: "#8C8C8C",
    fontSize: 12,
    fontWeight: "500",
  },
  about: {
    color: "#FFFFFF99",
    fontWeight: "500",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  likeComment: {
    color: "#fff",
    fontWeight: "600",
  },
});
export default Feed;
