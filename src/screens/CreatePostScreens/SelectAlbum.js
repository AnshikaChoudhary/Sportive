import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { images } from "../../assets/images";

const SelectAlbum = () => {
  const DATA = [
    {
      photo: images.AlbumImage,
      topic: "Athlete Session 7 Sep 2023",
      posts: "0 posts",
      privacy: "Public",
    },
    {
      photo: images.AlbumImage,
      topic: "Athlete Session 5 Sep 2023",
      posts: "91 posts",
      privacy: "Public",
    },
    {
      photo: images.AlbumImage,
      topic: "Athlete Session 2 Sep 2023",
      posts: "70 posts",
      privacy: "Public",
    },
    {
      photo: images.AlbumImage,
      topic: "Best Time with Family :-)",
      posts: "12 posts",
      privacy: "Public",
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)

    <TouchableOpacity style={styles.item}>
      <Image source={title.photo} resizeMode="cover" style={styles.img} />
      <View
        style={{
          paddingHorizontal: 10,
          borderBottomWidth: 2,
          borderColor: "#FFFFFF1A",
          width: "100%",
          //           margin: 5,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
          {title.topic}
        </Text>
        <Text style={styles.privacy}>{title.posts}</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="earth" color="#B0B2B1" size={15} />
          <Text style={styles.privacy}>{title.privacy}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.addAlbum}>
          <Icon name="plus" color="#6894DE" size={40} />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            borderBottomWidth: 2,
            borderColor: "#FFFFFF1A",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#0A4CA0", fontWeight: "600", fontSize: 16 }}>
            Create Album
          </Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110026",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
  },
  privacy: {
    color: "#8C8C8C",
    fontWeight: "500",
    //     paddingVertical: 5,
    fontSize: 12,
  },
  addAlbum: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#696A6C",
    width: 85,
    height: 85,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SelectAlbum;
