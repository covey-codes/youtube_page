import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export const LikesCarousel = () => {
  const actions = [
    {
      label: "934",
      icon: <Ionicons name="thumbs-up-outline" size={15} color="black" />,
    },
    {
      label: "2",
      icon: <Ionicons name="thumbs-down-outline" size={15} color="black" />,
    },
    {
      label: "Share",
      icon: <Ionicons name="share-social-outline" size={15} color="black" />,
    },
    {
      label: "Remix",
      icon: <MaterialIcons name="shuffle" size={15} color="black" />,
    },
    {
      label: "Download",
      icon: <Feather name="download" size={15} color="black" />,
    },
    {
      label: "Clip",
      icon: <MaterialIcons name="content-cut" size={15} color="black" />,
    },
    {
      label: "Save",
      icon: <Feather name="bookmark" size={15} color="black" />,
    },
    { label: "Report", icon: <Feather name="flag" size={15} color="black" /> },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionBox}>
          {action.icon}
          <Text style={styles.actionText}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  actionBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 5,
  },
  actionText: {
    fontSize: 14,
    marginLeft: 8,
    color: "#000",
  },
});
