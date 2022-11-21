import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../values/colors";
import { useNavigation } from "@react-navigation/native";

const Headers = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={styles.Text1}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.checkbox_txt}> View All </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 25,
  },
  Text1: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 25,
  },
  checkbox_txt: {
    color: colors.pink,
    marginHorizontal: 3,
    fontWeight: "600",
  },
});
