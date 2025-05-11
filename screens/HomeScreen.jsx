import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BookItem from '../components/BookItem';


const books = [
  { id: 'hp1', title: 'Harry Potter and the Philosophers Stone', author: 'J.K. Rowling', image: 'https://m.media-amazon.com/images/I/91wKDODkgWL._AC_UF1000,1000_QL80_.jpg', year: 1997, authorBio: 'J.K. Rowling is a British author best known for the Harry Potter series, which has sold over 500 million copies worldwide.', description: 'Harry Potter discovers on his 11th birthday that he is a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry.' },
  { id: 'hp2', title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', image: 'https://m.media-amazon.com/images/I/918wxhKJaPL.jpg', year: 1998, authorBio: 'J.K. Rowling drew inspiration from classical mythology and folklore for many of the magical elements in her books.', description: 'In his second year at Hogwarts, Harry uncovers the mystery of the Chamber of Secrets and faces a dark force that petrifies students.' },
  { id: 'hp3', title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', image: 'https://disneyartonmain.com/cdn/shop/products/Harry-Potter-and-The-Prisoner-of-Azkaban__13175_b62b4132-4ee8-409d-a67d-43cc6d5550ac.jpg?v=1610332335', year: 1999, authorBio: 'Rowling’s works emphasize themes of friendship, courage, and the triumph of good over evil.', description: 'Harry learns that Sirius Black, an escaped prisoner, appears to be hunting him, leading to revelations about his past.' },
  { id: 'hp4', title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling', image: 'https://m.media-amazon.com/images/I/81JwAsLYvGL._AC_UF1000,1000_QL80_.jpg', year: 2000, authorBio: 'Her series has been translated into over 80 languages and adapted into a major film franchise.', description: 'Selected as a competitor in the Triwizard Tournament, Harry faces dangerous tasks and witnesses the return of Voldemort.' },
  { id: 'hp5', title: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling', image: 'https://covers.openlibrary.org/b/id/8317060-L.jpg', year: 2003, authorBio: 'Beyond books, Rowling has written screenplays for the Fantastic Beasts films, set in the same universe.', description: 'Harry returns to Hogwarts to find the Wizarding World in denial about Voldemort’s return and forms Dumbledore’s Army.' },
  { id: 'hp6', title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling', image: 'https://m.media-amazon.com/images/I/81DN1723hUL._AC_UF1000,1000_QL80_.jpg', year: 2005, authorBio: 'Rowling studied French and Classics at the University of Exeter before beginning her writing career.', description: 'Harry learns more about Voldemort’s past with Dumbledore’s help and uncovers a dark secret in a mysterious potion book.' },
  { id: 'hp7', title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling', image: 'https://m.media-amazon.com/images/I/71sH3vxziLL._AC_UF1000,1000_QL80_.jpg', year: 2007, authorBio: 'Her charitable work includes founding Lumos, an organization to support disadvantaged children around the world.', description: 'Harry, Ron, and Hermione set out to destroy Voldemort’s Horcruxes, leading to the final battle at Hogwarts.' }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BookItem book={item} navigation={navigation} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
  flex: 1,
  padding: 15,
  backgroundColor: '#e3f2fd' 
  },
  list:
  { 
    paddingBottom: 20
  }
});