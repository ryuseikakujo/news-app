import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};

export default ClipButton;
