import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../values/colors";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/icons/photo1.jpeg")}
          style={styles.img}
        />

        <Text style={styles.txt}>Order Your Favourite Flowers</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.replace("SignUp")}
        >
          <Text style={styles.btn_txt}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  img: { marginVertical: 25 },
  txt: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 25,
    fontWeight: "400",
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
    color: colors.offwhite,
    fontSize: 15,
  },
});
