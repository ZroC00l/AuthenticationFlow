import { StyleSheet, View, TextInput } from "react-native";
import React from "react";

const Form = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5, // so there is space inbetween the input textfields
  },
  input: {},
});
