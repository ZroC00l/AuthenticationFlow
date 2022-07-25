import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import EmailConfirmationScreen from "./src/screens/EmailConfirmationScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <EmailConfirmationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#CADB2A",
  },
});
