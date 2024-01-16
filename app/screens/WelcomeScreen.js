import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/construction-bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/pocket-csr-logo.png")}
        />
        <Text style={styles.header}>Pocket CSR</Text>
        <Text style={styles.tagline}>Powered by Tamflex</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 20,
    color: colors.black,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 200,
  },
  tagline: {
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 1,
    color: colors.white,
  },
});

export default WelcomeScreen;
