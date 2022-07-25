import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Form from "../../components/Form";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";

const onGoBackPressed = () => {
  console.warn("Go Back Pressed");
};

const onResetPressed = () => {
  console.warn("Resend Code Pressed");
};

const EmailConfirmationScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <Form
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          name="account"
        />
        <CustomButton
          text="Reset"
          onPress={onResetPressed}
          bgColor="blue"
          fgColor="white"
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
    padding: 30,
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
});
