import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { noImagePic } from "../assets";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  image: {
    width: 98,
    height: 98,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

const ListItem = ({ imageUrl, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {imageUrl ? (
          <Image style={styles.image} source={{ url: imageUrl }} />
        ) : (
          <Image style={styles.image} source={noImagePic} />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.subText}>{author && author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
