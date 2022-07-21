import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/logo2.png";
import Form from "../components/Form";
import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
      <Form placeholder="Email" value={email} setValue={setEmail} />
      <Form
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton />
    </View>
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
