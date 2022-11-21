import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../values/colors";
import { Flowers } from "../values/data";
import AntDesign from "react-native-vector-icons/AntDesign";
const CartItem = ({ image, title, price }) => {
  const [counter, setCounter] = useState(1);
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          marginHorizontal: 15,
        }}
      >
        <TouchableOpacity onPress={() => setCounter(counter - 1)}>
          <AntDesign name="minuscircle" size={17} style={styles.counter} />
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <AntDesign name="pluscircle" size={17} style={styles.counter} />
        </TouchableOpacity>
      </View>
      <View>
        <AntDesign name="close" size={17} style={{ padding: 5 }} />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "87%",
    height: 130,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "center",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: "Pacifico_400Regular",
    marginVertical: 10,
  },
  price: {
    paddingBottom: 15,
  },
  counter: {
    color: colors.pink,
    marginHorizontal: 15,
  },
});
