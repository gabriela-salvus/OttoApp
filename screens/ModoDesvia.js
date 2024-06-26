import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ComponentesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={require('../assets/images/Modo Desvia.png')} style={styles.image} resizeMode="cover" />
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
  backButton: {
    position: 'absolute',
    top: 20, 
    left: 10,
    zIndex: 1,
  },
});

