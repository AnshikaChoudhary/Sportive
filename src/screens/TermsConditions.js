import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const TermsConditions = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus.
        </Text>
        <Text style={styles.text}>
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet.
        </Text>
        <Text style={styles.text}>
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
          rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
          ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
          lorem. Maecenas nec . Nam eget dui. Etiam rhoncus. Maecenas tempus.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#110026", //"#746ABA",
  },
  text: {
    color: "#FFFFFF99",
    fontWeight: "600",
    lineHeight: 30,
    paddingVertical: 20,
  },
});
export default TermsConditions;
