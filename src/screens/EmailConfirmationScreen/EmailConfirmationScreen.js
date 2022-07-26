import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Form from "../../components/Form";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";

const onConfirmPressed = () => {
  console.warn("Sign Up Pressed");
};

const onGoBackPressed = () => {
  console.warn("Go Back Pressed");
};

const onResendCodePressed = () => {
  console.warn("Resend Code Pressed");
};

const EmailConfirmationScreen = () => {
  const [otpCode, setOtpCode] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <Form
          placeholder="Enter Confirmation Code"
          value={otpCode}
          setValue={setOtpCode}
          name="account-key"
        />
        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
          bgColor="blue"
          fgColor="white"
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          mode="SECONDARY"
          bgColor="white"
        />
        <CustomButton
          text="Back to Sign In"
          mode="TERTIARY"
          onPress={onGoBackPressed}
        />
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    margin: 10,
    paddingBottom: 10,
  },
  textBody: {
    marginVertical: 10,
    color: "gray",
  },
});
