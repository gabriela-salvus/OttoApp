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
    backgroundColor: '#e5f5e5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
