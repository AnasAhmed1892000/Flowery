import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../values/colors";
import MaterialCommunityIconsEntypo from "react-native-vector-icons/MaterialCommunityIcons";

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <MaterialCommunityIconsEntypo
          name="email-newsletter"
          size={45}
          color={colors.white}
        />
      </View>
      <Text style={styles.title}>Check Your Email</Text>
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 20,
          color: colors.heavyGrey,
        }}
      >
        We have sent a password reset to your email
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("OTP")}
      >
        <Text style={styles.btn_txt}>Open Email App </Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 20,
          color: colors.heavyGrey,
        }}
      >
        Didn't get an Email ? check your spam folder , or
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
        <Text style={styles.checkbox_txt}> Try agian </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  svg: {
    width: 80,
    height: 80,
    backgroundColor: colors.pink,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "700",
    //fontFamily: "Pacifico_400Regular",
    marginVertical: 25,
    marginHorizontal: 30,
  },
  btn: {
    marginVertical: 25,
    width: 250,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_txt: {
    color: colors.white,
  },
  checkbox_txt: {
    color: colors.pink,
    marginHorizontal: 3,
    marginVertical: 15,
  },
});
