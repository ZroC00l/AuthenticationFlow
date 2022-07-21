import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          styles[`buttonText_${type}`],
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
  container_TERTIARY: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  buttonText_TERTIARY: {
    color: "gray",
  },
});
