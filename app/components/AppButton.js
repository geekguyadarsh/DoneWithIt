import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    textTransform: "uppercase",
    color: colors.white,
  },
});

export default AppButton;
