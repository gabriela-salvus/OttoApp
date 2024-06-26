import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CodigosScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    top: 15, 
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 50,
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
