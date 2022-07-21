import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.buttonText}>CustomButton</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#828F0E",
    width: "100%",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
