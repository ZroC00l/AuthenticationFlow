import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/logo2.png";
import Form from "../components/Form";
import CustomButton from "../components/CustomButton";

const onSignUpPressed = () => {};

const SignUpScreen = () => {
  const { height } = useWindowDimensions();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  cont[(confirmPassword, setConfirmPassword)] = useState("");

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} />
      <Form placeholder="UserName" value={userName} setValue={setUserName} />
      <Form placeholder="Email" value={email} setValue={setEmail} />
      <Form placeholder="Password" value={password} setValue={setPassword} />
      <Form
        placeholder="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <CustomButton text="Sign up" type="PRIMARY" onPress={onSignUpPressed} />
    </View>
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
});
