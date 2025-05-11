import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function BookItem({ book, navigation }) {
  return (
    <Pressable style={styles.item} onPress={() => navigation.navigate('Details', { book })}>=
      <Image source={{ uri: book.image }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author} ({book.year})</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item:
   {
  flexDirection: 'row',
  marginBottom: 15,
  backgroundColor: '#fff',
  borderRadius: 10,
  
},
  cover:
  {
  width: 60,
  height: 90 
  },
  info:
  {
  flex: 1,
  padding: 10,
  justifyContent: 'center' 
  },
  title:
  {
  fontSize: 16,
  fontWeight: 'bold'
  },
  author:
  {
  fontSize: 14,
  color: '#555' 
  },
});