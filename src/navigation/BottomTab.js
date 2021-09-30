import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Main, MyPage, Reels, Search, Shop } from "../Views";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const SelectIcon = (routeName) => {
  switch (routeName) {
    case "Main":
      return "home-outline";
    case "Search":
      return "search-outline";
    case "Reels":
      return "videocam-outline";
    case "Shop":
      return "basket-outline";
    case "MyPage":
      return "person-outline";
  }
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ size }) => {
          let iconName = SelectIcon(route.name);
          return <Icon name={iconName} size={size} color="black" />;
        },
      })}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTab;
