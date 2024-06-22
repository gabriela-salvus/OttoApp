import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ModoManualScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo Manual</Text>
      <Text style={styles.description}>Como funciona a lógica: </Text>
      <Image source={require('../assets/CodigoManual.png')} style={styles.image} />
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
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
