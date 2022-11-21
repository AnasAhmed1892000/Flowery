import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../values/colors";
import { useNavigation } from "@react-navigation/native";

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 20,
          color: colors.heavyGrey,
        }}
      >
        Enter the email associated with your account and we will send you an
        email to reset your password
      </Text>
      <TextInput
        style={styles.txt_input}
        placeholder="E-mail"
        placeholderTextColor={colors.heavyGrey}
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("OTP")}
        >
          <Text style={styles.btn_txt}>Send Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: "flex-start",
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "700",
    //fontFamily: "Pacifico_400Regular",
    marginVertical: 25,
    marginHorizontal: 30,
  },
  txt_input: {
    width: 300,
    height: 50,
    borderRadius: 60,
    backgroundColor: colors.white,
    marginVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 25,
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
});
