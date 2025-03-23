import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "../constants/images";

export const ReactConfrences = () => {
  return (
    <View style={styles.container}>
      <Image source={images.profile} style={styles.profile} />

      <View style={styles.channelContainer}>
        <Text style={styles.channelName}>React Conferences by GitNation</Text>
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  channelContainer: {
    flex: 1,
  },
  channelName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  subscribeButton: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  subscribeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "semibold",
  },
});
