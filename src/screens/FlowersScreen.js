import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { Flowers } from "../values/data";
import { colors } from "../values/colors";
import Item from "../components/Item";
import GridFlatList from "grid-flatlist-react-native";

const FlowersScreen = () => {
  return (
    <SafeAreaView>
      <GridFlatList
        data={Flowers}
        renderItem={(flower) => (
          <Item
            title={flower.title}
            image={flower.image}
            price={flower.price}
            description={flower.description}
            reviews={flower.reviews}
          />
        )}
        gap={0}
      />
    </SafeAreaView>
  );
};

export default FlowersScreen;

const styles = StyleSheet.create({});
