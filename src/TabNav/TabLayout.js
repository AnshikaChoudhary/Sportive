import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Home from "../screens/TabScreens/Home";
import Chats from "../screens/TabScreens/Chats";
import Setting from "../screens/TabScreens/Setting";
import Profile from "../screens/TabScreens/Profile";
import Notification from "../screens/TabScreens/Notification";

import { images } from "../assets/images";

export default function TabLayout() {
  const navigation = useNavigation();
  // const [chat, setChat] = useState("");

  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "#110026" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={30}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="account-multiple-plus"
                size={30}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            headerTintColor: "#004225",
            tabBarIcon: ({ focused }) => (
              <Icon
                name="account"
                size={30}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            headerTintColor: "#004225",
            tabBarIcon: ({ focused }) => (
              <Icon
                name="bell-ring"
                size={25}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="cog" size={30} color={focused ? "#fff" : "#004225"} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
