import React from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ComponentesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/Modo Manual (2).png')} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  imageContainer: {
    width: width,
    alignItems: 'center',
    marginBottom:-60,
  },
  image: {
    top:-30,
    width: width,
    height: undefined,
    aspectRatio: 0.48, 
  },
  backButton: {
    position: 'absolute',
    top: 20, 
    left: 10,
    zIndex: 1,
  },
});

