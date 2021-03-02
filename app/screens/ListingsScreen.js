import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Good Condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.lightGrey,
    paddingTop: 50,
  },
});

export default ListingsScreen;
