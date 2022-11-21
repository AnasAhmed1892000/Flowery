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
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../values/colors";
import GridFlatList from "grid-flatlist-react-native";
import WishlistItem from "../components/WishlistItem";
import { Flowers } from "../values/data";

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput
          style={styles.txt_input}
          placeholder="Search My Wish List"
          placeholderTextColor={colors.heavyGrey}
        />
        <AntDesign
          name="search1"
          style={[styles.icon, { position: "absolute", top: 27, right: 24 }]}
          size={18}
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          paddingHorizontal: 25,
          marginVertical: 15,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 21 }}>My Wish List</Text>
        <View
          style={{
            width: "100%",
          }}
        >
          <GridFlatList
            data={Flowers}
            renderItem={(flower) => (
              <WishlistItem
                title={flower.title}
                image={flower.image}
                price={flower.price}
                description={flower.description}
                reviews={flower.reviews}
              />
            )}
            gap={0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavouriteScreen;

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
