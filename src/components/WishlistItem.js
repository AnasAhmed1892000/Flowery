import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../values/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const WishlistItem = ({ title, image, price, description, reviews }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("FlowerDetials", {
            title,
            image,
            price,
            description,
            reviews,
          })
        }
      >
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "20%",
              paddingHorizontal: 15,
            }}
          >
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>$ {price}</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="heart" size={25} color={colors.pink} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 150,
    backgroundColor: colors.white,
    borderRadius: 25,
    margin: 15,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "stretch",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: "Pacifico_400Regular",
    marginVertical: 10,
  },
  price: {
    paddingBottom: 15,
  },
});
