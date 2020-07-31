import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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
    width: 100,
    height: 100,
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

const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/10/200/200" }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          Lorem ipsum is typically a corrupted version of De finibus bonorum et
          malorum, a first-century BC text by the Roman statesman and
          philosopher Cicero, with words altered, added, and removed to make it
          nonsensical, improper Latin.
        </Text>
        <Text style={styles.subText}>ReactNews</Text>
      </View>
    </View>
  );
};

export default ListItem;
