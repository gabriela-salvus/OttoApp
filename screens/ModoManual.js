import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function ModoManualScreen() {
  return (
     <View style={styles.container}>
        <Image source={require('../assets/Modo Manual.png')} style={styles.image} resizeMode="contain" />
      </View>
  );
}

const styles = StyleSheet.create({
  //scrollContainer: {
    //flexGrow: 1,
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    //paddingVertical: 20,
    //backgroundColor: '#FFE4E1',
  //},
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFE4E1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 750,
    aspectRatio: 1, // Mantém a proporção da imagem
    marginBottom: 20,
    marginTop:0,
    resizeMode: 'contain', // Garante que a imagem seja contida dentro das dimensões
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
