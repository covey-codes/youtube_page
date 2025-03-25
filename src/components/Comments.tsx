import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COMMENTS, CommentType } from "../constants/comments";
import { Ionicons } from "@expo/vector-icons"; // Import the close icon

export const Comments = () => {
  const [comments, setComments] = useState<CommentType[]>(COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // Controls visibility

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentData: CommentType = {
      id: comments.length + 1,
      user: "You", // Replace with authenticated user if available
      text: newComment,
      timestamp: "Just now",
    };

    setComments([newCommentData, ...comments]);
    setNewComment("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Show "Comments (number)" instead of username */}
        {!isExpanded && comments.length > 0 && (
          <TouchableOpacity
            onPress={() => setIsExpanded(true)}
            style={styles.singleComment}
          >
            <Text style={styles.commentHeader}>
              Comments ({comments.length})
            </Text>
            <Text style={styles.commentText}>{comments[0].text}</Text>
            <Text style={styles.timestamp}>{comments[0].timestamp}</Text>
          </TouchableOpacity>
        )}

        {/* Full comment section (Only visible when expanded) */}
        {isExpanded && (
          <View style={styles.expandedSection}>
            {/* Close Button */}
            <TouchableOpacity
              onPress={() => setIsExpanded(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            {/* Input Box for New Comments */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Add a comment..."
                value={newComment}
                onChangeText={setNewComment}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleAddComment}
              >
                <Text style={styles.buttonText}>Post</Text>
              </TouchableOpacity>
            </View>

            {/* Full Comment List */}
            <FlatList
              data={comments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.comment}>
                  <Text style={styles.username}>{item.user}</Text>
                  <Text style={styles.commentText}>{item.text}</Text>
                  <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
              )}
              scrollEnabled={false} // Disables FlatList's internal scrolling
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures ScrollView takes the full height
  },
  container: {
    padding: 15,
    backgroundColor: "#fff",
    flex: 1,
  },
  singleComment: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  expandedSection: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  comment: {
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  commentText: {
    fontSize: 14,
    marginVertical: 4,
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
  },
});
