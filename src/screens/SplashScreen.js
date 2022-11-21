import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../values/colors";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
const Splash = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  setTimeout(() => {
    return navigation.replace("OnBoarding");
  }, 1500);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            fontFamily: "Pacifico_400Regular",
          },
        ]}
      >
        Flowery
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontSize: 50,
    fontWeight: "900",
    fontFamily: "Pacifico_400Regular",
  },
});
