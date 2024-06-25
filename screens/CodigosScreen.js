import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CodigosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Códigos</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ModoManual')}>
        <Text style={styles.buttonText}>Modo Manual</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ModoDesvia')}>
        <Text style={styles.buttonText}>Modo Desvia de Obstáculos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    padding: 20,
  },
  title: {
    fontSize: 50,
    //fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#F00000',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
