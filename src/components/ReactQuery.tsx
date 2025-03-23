import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const ReactQuery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>React Query Exposed by its Maintainer</Text>

      <View style={styles.metaContainer}>
        <Text style={styles.metaText}>1.2M views • 2 weeks ago</Text>

        <MaterialIcons
          name="shopping-bag"
          size={18}
          color="#606060"
          style={styles.icon}
        />

        <Text style={styles.moreText}>...more</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  mainText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    fontSize: 14,
    color: "#606060",
  },
  icon: {
    marginHorizontal: 10,
  },
  moreText: {
    fontSize: 14,
    color: "#606060",
  },
});
