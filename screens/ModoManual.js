import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ModoManualScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Modo Manual (2).png')} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover', // Garante que a imagem cubra toda a área disponível
  },
});



