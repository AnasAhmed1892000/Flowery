import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../values/colors";
import { useRoute } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Flowers } from "../values/data";
import Headers from "../components/HomeComponents/Headers";
import Item from "../components/Item";
import MaterialCommunityIconsEntypo from "react-native-vector-icons/MaterialCommunityIcons";

const FlowerDetailsScreen = () => {
  const route = useRoute();
  const { title, image, price, reviews, description } = route.params;
  const [visible, setVisible] = useState(false);
  // const onPressShare = () =>
  //   Visible ? setVisible(Visible) : setVisible(visible);
  // useEffect(() => {
  //   onPressShare();
  // }, []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <TouchableWithoutFeedback>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image style={styles.Image} source={{ uri: image }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                width: "100%",
                marginVertical: 0,
                // alignItems: "center",
              }}
            >
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity>
                <FontAwesome
                  name="heart-o"
                  size={25}
                  color={colors.pink}
                  style={{ paddingVertical: 19 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginVertical: -15,
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Text style={styles.price}>${price}</Text>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="star" size={20} color={colors.yellow} />
                <Text style={styles.reviews}>{Flowers[1].reviews}</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-start",
                width: "100%",
                paddingHorizontal: 23,
                marginVertical: 40,
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 21 }}>
                Description
              </Text>
              <Text
                style={{
                  color: colors.heavyGrey,
                  textAlign: "left",
                }}
              >
                {Flowers[1].description}
              </Text>
              <Text style={{ fontWeight: "400", fontSize: 21, marginTop: 15 }}>
                Reviews
              </Text>
            </View>
            <View style={styles.reviewsContainer}>
              <Text style={{ marginRight: 5, fontWeight: "500", fontSize: 24 }}>
                {Flowers[1].rating}
              </Text>
              <Text style={{ marginRight: 5, fontWeight: "500", fontSize: 20 }}>
                {" "}
                / 5{" "}
              </Text>
              <AntDesign name="star" size={20} color={colors.yellow} />
              <AntDesign name="star" size={20} color={colors.yellow} />
              <AntDesign name="star" size={20} color={colors.yellow} />
              <AntDesign name="star" size={20} color={colors.yellow} />
              <AntDesign name="star" size={20} color={colors.lightYellow} />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace("Home")}
            >
              <Text style={styles.btn_txt}>Add To Cart </Text>
            </TouchableOpacity>
            <Headers title="You Might Also Like " />
            <View style={{ flexDirection: "row" }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Item
                  title={Flowers[1].title}
                  image={Flowers[1].image}
                  price={Flowers[1].price}
                  description={Flowers[1].description}
                  reviews={Flowers[1].reviews}
                />
                <Item
                  title={Flowers[2].title}
                  image={Flowers[2].image}
                  price={Flowers[2].price}
                  description={Flowers[2].description}
                  reviews={Flowers[2].reviews}
                />
                <Item
                  title={Flowers[3].title}
                  image={Flowers[3].image}
                  price={Flowers[3].price}
                  description={Flowers[3].description}
                  reviews={Flowers[3].reviews}
                />
                <Item
                  title={Flowers[4].title}
                  image={Flowers[4].image}
                  price={Flowers[4].price}
                  description={Flowers[4].description}
                  reviews={Flowers[4].reviews}
                />
                <Item
                  title={Flowers[5].title}
                  image={Flowers[5].image}
                  price={Flowers[5].price}
                  description={Flowers[5].description}
                  reviews={Flowers[5].reviews}
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modal}>
          <Text style={{ fontWeight: "600", fontSize: 21 }}>Share With</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 15,
              marginTop: 25,
            }}
          >
            <View style={styles.svg}>
              <MaterialCommunityIconsEntypo
                name="instagram"
                size={45}
                color={colors.white}
              />
            </View>
            <View style={styles.svg}>
              <MaterialCommunityIconsEntypo
                name="whatsapp"
                size={45}
                color={colors.white}
              />
            </View>
            <View style={styles.svg}>
              <MaterialCommunityIconsEntypo
                name="facebook"
                size={45}
                color={colors.white}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 15,
              marginTop: 15,
            }}
          >
            <View style={styles.svg}>
              <MaterialCommunityIconsEntypo
                name="facebook-messenger"
                size={45}
                color={colors.white}
              />
            </View>
            <View style={styles.svg}>
              <MaterialCommunityIconsEntypo
                name="twitter"
                size={45}
                color={colors.white}
              />
            </View>
            <View style={styles.svg}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <MaterialCommunityIconsEntypo
                  name="content-copy"
                  size={45}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FlowerDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.offwhite,
    alignItems: "center",
    //  padding: 20,
    width: "100%",
  },
  Image: {
    width: 300,
    height: 300,
    borderRadius: 25,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "Pacifico_400Regular",
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 22,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
  },
  reviews: {
    fontSize: 16,
    color: colors.heavyGrey,
  },
  reviewsContainer: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: -25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
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
  modal: {
    width: "100%",
    height: "40%",
    backgroundColor: colors.white,
    marginTop: "auto",
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  svg: {
    width: 80,
    height: 80,
    backgroundColor: colors.pink,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
