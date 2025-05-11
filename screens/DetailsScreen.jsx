import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const loadData = async (key, setter) => {
  const json = await AsyncStorage.getItem(key);
  if (json !== null) {
    setter(JSON.parse(json));
  } else {
  }
};

export default function DetailsScreen({ route, navigation }) {
  const { book } = route.params;
  const FAV_KEY = `@fav_${book.id}`;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    loadData(FAV_KEY, setIsFav);
  }, [book.id]);

  const toggleFav = () => {
    const newFav = !isFav;
    setIsFav(newFav);
    saveData(FAV_KEY, newFav);
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.year}>Published: {book.year}</Text>
      <Text style={styles.author}>By {book.author}</Text>
      <Text style={styles.bio}>About the author: {book.authorBio}</Text>
      <Text style={styles.desc}>{book.description}</Text>
      <View style={styles.buttons}>
        <Button title={isFav ? '★ Unfavorite' : '☆ Favorite'} onPress={toggleFav} />
        <Button title="Back to Home" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#fff'
  },
  image: {
  width: 120,
  height: 180,
  marginBottom: 15 
  },
  title: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 5,
  textAlign: 'center'
  },
  year: {
  fontSize: 14,
  fontStyle: 'italic',
  marginBottom: 3
  },
  author:
  { fontSize: 14,
  marginBottom: 10 
  },
  bio: 
  {
 fontSize: 14,
 textAlign: 'center',
 marginBottom: 15 
 },
 desc:
  {
  fontSize: 14,
  textAlign: 'center',
  marginBottom: 20 
  },
  buttons:
  {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%' 
  }
});
