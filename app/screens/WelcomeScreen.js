import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={4}
      source={require("../assets/background.jpg")}
      style={styles.bgImage}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Sign in" onPress={() => console.log("Pressed")} />
        <AppButton
          title="Register"
          onPress={() => console.log("Pressed")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
  },
  logoContainer: {
    top: 100,
    position: "absolute",
    alignSelf: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoText: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
