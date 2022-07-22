import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";

const onSignInGooglePressed = () => {
  console.warn("Sign In with Google Pressed");
};

const onSignInApplePressed = () => {
  console.warn("Sign In with Apple Pressed");
};
const SocialSignInUpButtons = () => {
  return (
    <>
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={onSignInApplePressed}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInUpButtons;

const styles = StyleSheet.create({});
