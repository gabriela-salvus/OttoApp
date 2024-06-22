import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Otto App</Text>
        <Image source={require('../assets/otto_image.jpeg')} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Componentes')}>
            <Text style={styles.buttonText}>Componentes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Códigos')}>
            <Text style={styles.buttonText}>Códigos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Como Construir')}>
            <Text style={styles.buttonText}>Como Construir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.buttonText}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Conectar')}>
            <Text style={styles.buttonText}>Conectar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Criado por Gabriela Teixeira, Luana Moura e Kevin Valentim.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5f5e5',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4CAF50',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 20,
    marginTop: height * 0.1,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  footerText: {
    color: '#4CAF50',
    fontSize: 16,
  },
});
