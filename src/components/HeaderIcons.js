import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../values/colors";
import { useNavigation } from "@react-navigation/native";
const HeaderIcons = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/equalizer.png")}
        style={styles.Image}
      />
      <Entypo
        name={"shopping-cart"}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
        color={colors.black}
      />
    </View>
  );
};
const HeaderShare = () => {
  const navigation = useNavigation();
  const [Visible, setVisible] = useState(true);
  return (
    <TouchableOpacity>
      <FontAwesome name="share" size={24} />
    </TouchableOpacity>
  );
};
export { HeaderIcons, HeaderShare };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
    marginRight: 15,
  },
});
