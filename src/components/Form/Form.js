import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Form = ({ value, setValue, placeholder, secureTextEntry, name }) => {
  return (
    <View style={styles.container}>
      <Icon
        type="material-community"
        name={name}
        size={30}
        style={styles.icon}
      />
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
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5, // so there is space inbetween the input textfields
  },
  input: {
    padding: 10,
    width: "90%",
    flexDirection: "row",
    marginVertical: 5,
  },
  icon: {
    margin: 5,
    flexDirection: "row",
    marginVertical: 5,
  },
});
