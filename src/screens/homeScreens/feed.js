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
import { useNavigation } from "@react-navigation/native";
import Caption from "../../components/post/Caption";
import Video from "../../components/post/Video";
import Requirements from "../../components/post/Requirements";
import Album from "../../components/import/Album";

const Feed = () => {
  const navigation = useNavigation();
  const DATA = [
    { post: Caption },
    { post: Video },
    { post: Requirements },
    { post: Album },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)
    <View style={styles.item}>
      <Caption />
      <Video />
      <Requirements />
      <Album />
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
  // item: {
  //   backgroundColor: "#FFFFFF1A",
  //   borderRadius: 10,
  // },
});
export default Feed;
