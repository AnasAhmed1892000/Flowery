import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../values/colors";

const Offers = ({ title, description, I }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image
        source={require("../../../assets/icons/photo2.jpeg")}
        style={styles.Image}
      />
    </View>
  );
};
const photo = [
  "../../../assets/icons/photo1.jpeg",
  "../../../assets/icons/photo2.jpeg",
  "../../../assets/icons/photo3.jpeg",
  "../../../assets/icons/photo4.jpeg",
];
export default Offers;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 200,
    height: 150,
    backgroundColor: colors.white,
    marginVertical: 5,
    marginHorizontal: 35,
    paddingHorizontal: 25,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 15,
  },
  Image: {
    width: 90,
    height: 150,
    resizeMode: "stretch",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: colors.pink,
    fontFamily: "Pacifico_400Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    color: colors.heavyGrey,
  },
});
