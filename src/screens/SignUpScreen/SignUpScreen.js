import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Form from "../../components/Form";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";

const onSignUpPressed = () => {
  console.warn("Sign Up Pressed");
};
const onTermsServicePressed = () => {
  console.warn("Terms of Service Pressed");
};
const onPrivacyPolicyPressed = () => {
  console.warn("Privacy Policy Pressed");
};

const onGoogleSignUpPressed = () => {
  console.warn("Sign Up with Google Pressed");
};

const onAppleSignUpPressed = () => {
  console.warn("Sign Up with Apple Pressed");
};

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.navIconView}>
          <Icon
            type="material-community"
            name="arrow-left"
            size={30}
            color="white"
            style={{ backgroundColor: "#828F0E", borderRadius: 5 }}
          />
        </View>
        <Text style={styles.title}>Create an account</Text>
        <Form
          placeholder="UserName"
          value={userName}
          setValue={setUserName}
          name="account"
        />
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
          name="lock"
        />
        <Form
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          name="lock"
        />
        <CustomButton text="Sign up" type="PRIMARY" onPress={onSignUpPressed} />
        <Text style={styles.textBody}>
          By, registering you agree to our{" "}
          <Text style={styles.link} onPress={onTermsServicePressed}>
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Sign up with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
          onPress={onGoogleSignUpPressed}
        />
        <CustomButton
          text="Sign up with Apple"
          bgColor="#e3e3e3"
          fgColor="#363636"
          onPress={onAppleSignUpPressed}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
    fontSize: "24",
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
