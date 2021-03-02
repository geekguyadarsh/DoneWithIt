import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const ListItemSaperaator = () => {
  return <View style={styles.saperator} />;
};

const styles = StyleSheet.create({
  saperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGrey,
  },
});
export default ListItemSaperaator;
