import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Form from "../../components/Form";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";

const onConfirmPressed = () => {
  console.warn("Sign Up Pressed");
};

const EmailConfirmationScreen = () => {
  const [otpCode, setOtpCode] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Sign Up</Text>
        <Form
          placeholder="Confirmation Code"
          value={otpCode}
          setValue={setOtpCode}
          name="account-key"
        />
        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
          bgColor="orange"
          fgColor="white"
        />
        <CustomButton text="Resend Code" mode="TERTIARY" />
        <CustomButton text="Go Back" mode="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default EmailConfirmationScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    resizeMode: "contain",
    width: "70%",
    maxHeight: 200, // this for a nice view on larger screens
    maxWidth: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    margin: 10,
  },
  textBody: {
    marginVertical: 10,
    color: "gray",
  },
  link: {
    color: "blue",
  },
  navIconView: {
    width: "100%",
    flexDirection: "row",
  },
});
