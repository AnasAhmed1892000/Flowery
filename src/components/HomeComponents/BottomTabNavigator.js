import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import FavouriteScreen from "../../screens/FavouriteScreen";
import CartScreen from "../../screens/CartScreen";
import AccountScreen from "../../screens/AccountScreen";
import { colors } from "../../values/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name={"home"}
                size={30}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? colors.pink : colors.lightGrey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name={"heart"}
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? colors.pink : colors.lightGrey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name={"shopping-cart"}
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? colors.pink : colors.lightGrey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name={"person"}
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? colors.pink : colors.lightGrey}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
