import { StyleSheet, View, TextInput } from "react-native";
import React from "react";

const Form = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {},
  input: {},
});
