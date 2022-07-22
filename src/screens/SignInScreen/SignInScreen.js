import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/logo2.png";
import Form from "../../components/Form";
import CustomButton from "../../components/CustomButton";
//import { Icon } from "react-native-elements";

const onSignInPressed = () => {
  console.warn("Sign In Pressed");
};

const onForgotPasswordPressed = () => {
  console.warn("Forgot Password Pressed");
};

const onSignUpPressed = () => {
  console.warn("Sign Up Pressed");
};

const onSignInGooglePressed = () => {
  console.warn("Sign In with Google Pressed");
};

const onSignInApplePressed = () => {
  console.warn("Sign In with Apple Pressed");
};

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <Form
          placeholder="Email"
          value={email}
          setValue={setEmail}
          name="email"
        />
        <Form
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          name="lock"
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} mode="PRIMARY" />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          mode="TERTIARY"
        />
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
        <CustomButton
          text="Don't have an account? Sign up"
          mode="TERTIARY"
          onPress={onSignUpPressed}
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    resizeMode: "contain",
    width: "70%",
    maxHeight: 200, // this for a nice view on larger screens
    maxWidth: 300, // this for a nice view on larger screens
  },
});
