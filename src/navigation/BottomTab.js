import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Main, MyPage, Reels, Search, Shop } from "../Views";
import Icon from "react-native-vector-icons/Ionicons";
import { Mainheader } from "../components";

const Tab = createBottomTabNavigator();

const SelectIcon = (routeName, focused) => {
  switch (routeName) {
    case "Main":
      return focused ? "home" : "home-outline";
    case "Search":
      return focused ? "search" : "search-outline";
    case "Reels":
      return focused ? "videocam" : "videocam-outline";
    case "Shop":
      return focused ? "basket" : "basket-outline";
    case "MyPage":
      return focused ? "person" : "person-outline";
  }
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ size, focused }) => {
          let iconName = SelectIcon(route.name, focused);
          return <Icon name={iconName} size={size} />;
        },
        header: ({ options }) => {
          const title = options.title;
          return <Mainheader title={title} />;
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ title: "Instagram" }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTab;
