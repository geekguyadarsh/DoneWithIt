import React from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";

import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const LoginScreen = () => {
  <AppButton title="Login" onPress={() => console.log(email, password)} />;
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="emailAddress"
        />

        <AppSubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    width: 80,
    marginBottom: 20,
    marginTop: 50,
  },
});
export default LoginScreen;
