import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const Settings = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15,
        marginTop: 10,
        marginVertical: 15,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
      <AntDesign name="right" size={20} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
