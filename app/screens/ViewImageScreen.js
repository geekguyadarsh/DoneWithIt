import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>

      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   buttonContainer: {
  //     top: 100,
  //     flexDirection: "row",
  //     justifyContent: "space-around",
  //   },
  deleteButton: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
