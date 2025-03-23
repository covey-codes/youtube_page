import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const  ReactQuery = () => {
  return (
    <View>
      <Text style={styles.maintext}>React Query Exposed by its Maintainer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    maintext: {
        fontSize: 22,
        marginTop: 10,
        margin: 5,
    }
})