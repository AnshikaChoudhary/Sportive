import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";

const ChatInbox = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      photo: images.ChatPhoto,
      name: "Gloria",
      time: "14:33",
      message: "Sup Dude?😅",
      unseenmsgs: "2",
    },
    {
      photo: images.ChatPhoto,
      name: "Jacob Jones",
      time: "Yesterday",
      message: "Okay, I will check...",
      unseenmsgs: "1",
    },
  ];
  const Item = ({ title }) => (
    // console.log('title',title.image)
    // console.log('title',item.title)
    <TouchableOpacity style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <Image source={title.photo} resizeMode="cover" style={styles.img} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 17, color: "#fff", fontWeight: "600" }}>
            {title.name}
          </Text>
          <Text style={styles.msg}>{title.message}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.timing}>{title.time}</Text>
        <View
          style={{
            backgroundColor: "#03AA82",
            borderRadius: 100,
            paddingHorizontal: 5,
          }}
        >
          <Text style={styles.unseen}>{title.unseenmsgs}</Text>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: "#110026",
    paddingHorizontal: 20,
  },
  //   img: {
  //     width: 50,
  //     height: 50,
  //   },
  item: {
    //     backgroundColor: "#FFFFFF1A",
    //     borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    //     paddingHorizontal: 10,
    paddingTop: 10,
  },
  msg: {
    color: "#FFFFFFB2",
    fontSize: 15,
    fontWeight: "500",
    paddingVertical: 5,
  },
  timing: {
    color: "#FFFFFFB2",
    fontSize: 12,
    paddingVertical: 5,
  },
  unseen: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "500",
  },
});
export default ChatInbox;
