import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../values/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

const SigninScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [secure, setSecure] = useState(true);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <SafeAreaView>
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: "Pacifico_400Regular",
                  },
                ]}
              >
                Flowery
              </Text>
            </View>
            <View style={styles.header}>
              <Text style={styles.Text1}>Sign in to your account</Text>
              <View>
                <TextInput
                  style={styles.txt_input}
                  placeholder="Username\E-mail"
                  placeholderTextColor={colors.heavyGrey}
                />

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={styles.txt_input}
                    placeholder="Password"
                    placeholderTextColor={colors.heavyGrey}
                    secureTextEntry={secure}
                  />
                  {show == true ? (
                    <TouchableOpacity
                      style={{ position: "absolute", top: 27, right: 20 }}
                      onPress={() => {
                        setShow(false);
                        setSecure(false);
                      }}
                    >
                      <Entypo
                        name="eye-with-line"
                        style={styles.icon}
                        size={18}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{ position: "absolute", top: 27, right: 20 }}
                      onPress={() => {
                        setShow(true);
                        setSecure(true);
                      }}
                    >
                      <Entypo name="eye" style={styles.icon} size={18} />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.checkbox_container}>
                  <BouncyCheckbox
                    size={17}
                    text="Remember me"
                    fillColor={colors.pink}
                    unfillColor={colors.pink}
                    iconStyle={{ borderColor: colors.pink }}
                    style={{
                      marginVertical: 10,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ForgetPassword")}
                  >
                    <Text style={styles.checkbox_txt}> Forget Password </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("Home")}
              >
                <Text style={styles.btn_txt}>Sign in</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: colors.lightGrey }}>Not a member ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text style={{ color: colors.pink }}> Sign up </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: "flex-start",
  },
  title: {
    color: colors.black,
    fontSize: 45,
    fontWeight: "900",
    fontFamily: "Pacifico_400Regular",
    marginVertical: 25,
  },
  Text1: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 25,
  },
  header: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    margin: 15,
  },
  txt_input: {
    width: 330,
    height: 50,
    borderRadius: 60,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  checkbox_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox_txt: {
    color: colors.pink,
    marginHorizontal: 3,
  },
  checkbox_touch: {
    color: colors.black,
    marginHorizontal: 3,
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
  icon: {
    color: colors.heavyGrey,
  },
});
