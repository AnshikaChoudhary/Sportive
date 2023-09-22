import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { images } from "../../assets/images";

const Album = () => {
  const DATA = [
    {
      image: images.AtheletSession2,
      session: "Athlete Session 7 Sep 2023",
      items: "20 Items",
    },
    {
      image: images.AtheletSession,
      session: "Athlete Session 8 Sep 2023",
      items: "18 Items",
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)
    <View style={styles.item}>
      <Image
        source={title.image}
        style={styles.atheletImg}
        resizeMode="cover"
      />
      <Text style={styles.sessions}>{title.session}</Text>
      <Text style={styles.textItem}>{title.items}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 18,
          color: "#FFFFFF",
          margin: 10,
        }}
      >
        Albums
      </Text>
      <FlatList
        data={DATA}
        horizontal
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  item: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 10,
    margin: 10,
  },
  atheletImg: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
  },
  sessions: {
    color: "#EEEFF1",
    fontWeight: "500",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textItem: {
    color: "#EEEFF1",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
export default Album;
