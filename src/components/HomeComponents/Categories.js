import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../values/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FlowersScreen from "../../screens/FlowersScreen";
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
  const navigaton = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigaton.navigate("Flowers")}>
        <Categ1
          title="Flowers"
          IconName="flower-tulip-outline"
          Icon="MaterialCommunityIcons"
        />
      </TouchableOpacity>

      <Categ1 title="Gifts" IconName="gift" Icon="AntDesign" />
      <Categ1 title="Vases" IconName="wine-glass" Icon="FontAwesome5" />
    </View>
  );
};

const Categ1 = ({ title, Icon, IconName }) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <View style={styles.categ1}>
      {Icon == "MaterialCommunityIcons" ? (
        <MaterialCommunityIcons name={IconName} size={45} style={styles.icon} />
      ) : Icon == "AntDesign" ? (
        <AntDesign name={IconName} size={45} style={styles.icon} />
      ) : (
        <FontAwesome5 name={IconName} size={45} style={styles.icon} />
      )}
    </View>
    <Text style={styles.txt}>{title}</Text>
  </View>
);
export default Categories;

const styles = StyleSheet.create({
  categ1: {
    width: 85,
    height: 85,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  icon: {
    color: colors.pink,
  },
  txt: {
    marginVertical: 10,
    fontFamily: "Pacifico_400Regular",
    fontSize: 18,
    color: colors.heavyGrey,
  },
});
