import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
// import { Switch } from "react-native-switch";
const Switches = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Switch
      trackColor={{ false: "#FFFFFF1A", true: "#fff" }}
      thumbColor={isEnabled ? "#291A3C" : "#fff"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default Switches;
