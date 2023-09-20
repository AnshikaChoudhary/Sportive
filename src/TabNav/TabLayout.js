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
          tabBarActiveBackgroundColor: "#004225",
          tabBarItemStyle: { borderRadius: 100, margin: 10 },
          tabBarStyle: { backgroundColor: "#110026" },
          headerStyle: {
            backgroundColor: "#110026",
          },
          headerTintColor: "#FFFFFF",
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
                size={25}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            headerLeft: (props) => (
              <Icon
                name="arrow-left"
                size={25}
                color="#FFFFFF80"
                onPress={() => navigation.goBack()}
              />
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                name="account-multiple-plus"
                size={25}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerLeft: (props) => (
              <Icon
                name="arrow-left"
                size={25}
                color="#FFFFFF80"
                onPress={() => navigation.goBack()}
              />
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                name="account"
                size={25}
                color={focused ? "#fff" : "#004225"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerLeft: (props) => (
              <Icon
                name="arrow-left"
                size={25}
                color="#FFFFFF80"
                onPress={() => navigation.goBack()}
              />
            ),
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
            headerLeft: (props) => (
              <Icon
                name="arrow-left"
                size={25}
                color="#FFFFFF80"
                onPress={() => navigation.goBack()}
              />
            ),
            tabBarIcon: ({ focused }) => (
              <Icon name="cog" size={25} color={focused ? "#fff" : "#004225"} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
