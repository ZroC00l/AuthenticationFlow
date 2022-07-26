import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Form from "../../components/Form";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";

const onGoBackPressed = () => {
  console.warn("Go Back Pressed");
};

const onSubmitPressed = () => {
  console.warn("Resend Code Pressed");
};

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newpassword, setNewPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <View style={styles.labelContainer}>
          <Text style={styles.inputLabel}>Confirmation Code*</Text>
        </View>

        <Form
          placeholder="Enter confirmation code"
          value={code}
          setValue={setCode}
          name="account"
        />
        <View style={styles.labelContainer}>
          <Text style={styles.inputLabel}>Password*</Text>
        </View>

        <Form
          placeholder="Enter your new password"
          name="lock"
          value={newpassword}
          setValue={setNewPassword}
        />
        <CustomButton
          text="Submit"
          onPress={onSubmitPressed}
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

export default NewPasswordScreen;

const styles = StyleSheet.create({
  root: {
    //alignItems: "center", //prevents me from aliging label container to the left side
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    margin: 10,
    textAlign: "center",
    paddingBottom: 20,
  },
  labelContainer: {
    flex: 1,
  },

  inputLabel: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  textBody: {
    marginVertical: 10,
    color: "gray",
  },
});
