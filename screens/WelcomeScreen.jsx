import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>Library App System</Text>
        
        <Text style={styles.teamHeader}>Team Members:</Text>
        <Text style={styles.member}>Mayyas Banat-22311107</Text>
        <Text style={styles.member}>Salahaldin AbdalNabi-12242003</Text>
        <Text style={styles.member}>Wadie Arja-22310900</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>GO TO HOME SCREEN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00537f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#084261',
    marginBottom: 20,
  },
  teamHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  member: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#00537f',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;