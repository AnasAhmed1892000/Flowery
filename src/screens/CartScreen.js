import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import CartItem from "../components/CartItem";
import { Flowers } from "../values/data";
import { colors } from "../values/colors";
const CartScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>My Cart</Text>
        <CartItem
          image={Flowers[10].image}
          title={Flowers[10].title}
          price={Flowers[10].price}
        />
        <CartItem
          image={Flowers[11].image}
          title={Flowers[11].title}
          price={Flowers[11].price}
        />
        <CartItem
          image={Flowers[12].image}
          title={Flowers[12].title}
          price={Flowers[12].price}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={styles.price}>Total Price</Text>
          <Text style={styles.price}>$ 66</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btn}
            //  onPress={() => navigation.replace("Home")}
          >
            <Text style={styles.btn_txt}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 25,
    fontWeight: "600",
    fontSize: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
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
