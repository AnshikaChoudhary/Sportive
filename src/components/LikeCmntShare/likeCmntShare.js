import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LikeCmntShare = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={[styles.container, props.style]}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity style={styles.circle}>
          <Icon
            name="thumb-up"
            size={20}
            onPress={() => setIsEnabled((value) => !value)}
            color={isEnabled ? "#E254A4" : "#fff"}
            style={{ margin: 5 }}
          />
        </TouchableOpacity>
        {/* <Text style={styles.texting}>{isEnabled ? 1 : 0}</Text> */}
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="chat" size={20} color="#fff" style={{ margin: 5 }} />
        </TouchableOpacity>
        {/* <Text style={styles.texting}>6.3K</Text> */}
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="share" size={25} color="#fff" style={{ margin: 5 }} />
        </TouchableOpacity>
        {/* <Text style={styles.texting}>150</Text> */}
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="send" size={20} color="#fff" style={{ margin: 5 }} />
        </TouchableOpacity>
        {/* <Text style={styles.texting}>150</Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    // backgroundColor: "rgba(255, 255, 255, 0.5);",
    // opacity: 0.2,
    // width: 40,
    // height: 40,
    // borderRadius: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  texting: {
    color: "#FFFFFF",
  },
});
export default LikeCmntShare;
