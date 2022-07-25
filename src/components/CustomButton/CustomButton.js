import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, mode, bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${mode}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          styles[`buttonText_${mode}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
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
  container_PRIMARY: {
    backgroundColor: "#828F0E",
  },
  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },
  container_TERTIARY: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  buttonText_SECONDARY: {
    color: "#3B71F3",
  },
  buttonText_TERTIARY: {
    color: "gray",
  },
});
