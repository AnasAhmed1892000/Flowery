import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../values/colors";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Categories from "../components/HomeComponents/Categories";
import Headers from "../components/HomeComponents/Headers";
import Offers from "../components/HomeComponents/Offers";
import Item from "../components/Item";
import { Flowers } from "../values/data";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.offwhite }}>
      <ScrollView horizontal={false}>
        <SafeAreaView style={styles.container}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              style={styles.txt_input}
              placeholder="Search"
              placeholderTextColor={colors.heavyGrey}
            />
            <AntDesign
              name="search1"
              style={[
                styles.icon,
                { position: "absolute", top: 27, right: 24 },
              ]}
              size={18}
            />
          </View>
          <Categories />
          <Headers title="Offers" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Offers
              title="mothers day"
              description="Get 25% off your special collection"
              I={1}
            />
            <Offers
              title="mothers day"
              description="Get 25% off your special collection"
              I={0}
            />
          </ScrollView>
          <Headers title="Popular" />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Item
              title={Flowers[8].title}
              image={Flowers[8].image}
              price={Flowers[8].price}
            />
            <Item
              title={Flowers[7].title}
              image={Flowers[7].image}
              price={Flowers[7].price}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Item
              title={Flowers[6].title}
              image={Flowers[6].image}
              price={Flowers[6].price}
            />
            <Item
              title={Flowers[5].title}
              image={Flowers[5].image}
              price={Flowers[5].price}
            />
          </View>
          <Headers title="Recently Viewed " />
          <ScrollView horizontal>
            {Flowers.map((flower, index) => (
              <View key={index}>
                <Item
                  title={flower.title}
                  image={flower.image}
                  price={flower.price}
                />
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txt_input: {
    width: 330,
    height: 50,
    borderRadius: 60,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    color: colors.heavyGrey,
  },
});
