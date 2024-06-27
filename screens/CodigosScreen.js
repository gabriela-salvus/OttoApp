import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CodigosScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={require('../assets/images/codigoscima.png')} style={styles.imageTopo} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ModoManual')}>
          <Text style={styles.buttonText}>Modo Manual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ModoDesvia')}>
          <Text style={styles.buttonText}>Modo Desvia de Obstáculos</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/images/codigosbaixo.png')} style={styles.imageBaixo} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    padding: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  imageTopo: {
    top:-85,
    right:5,
    width: '120%',
    height: 280,
    
  },
  imageBaixo: {
    bottom: -85,
    right:5,
    width: '120%',
    height: 280,
  },
});
