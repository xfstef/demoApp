import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Item({ item }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.text}</Text>
        </View>
    );
  }

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'grey',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 20,
    },
});

  export default Item;