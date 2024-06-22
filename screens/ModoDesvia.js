import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ModoDesviaObstaculosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo Desvia de Obstáculos</Text>
      <Text style={styles.description}>Como funciona a lógica: </Text>
      <Image source={require('../assets/CodigoDesviaObst.png')} style={styles.image} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e5f5e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
});
