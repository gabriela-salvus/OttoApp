import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ComponentesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        <Image source={require('../assets/images/componenteselet (1).png')} style={styles.imageTopo} />
        <View style={styles.componentContainer}>
          <Image source={require('../assets/images/f1ca6741-1fbb-48fa-b321-8e7d313560b4.png')} style={styles.image} />
          <Text style={styles.description}>
            <Text style={styles.boldText}>Servo motor:</Text> É um atuador que permite controle preciso de posição, velocidade e aceleração. Ele é composto por um motor, um sensor de posição e um circuito de controle.
          </Text>
        </View>
        <View style={styles.componentContainer}>
          <Image source={require('../assets/images/590cd2c8-d502-4466-ac84-b82de7891eab.png')} style={styles.image} />
          <Text style={styles.description}>
            <Text style={styles.boldText}>Modulo Hc05:</Text> Dispositivo que permite comunicação sem fio entre dispositivos eletrônicos via Bluetooth.
          </Text>
        </View>
        <View style={styles.componentContainer}>
          <Image source={require('../assets/images/99fde358-0add-4cdf-957e-d6280eeff395.png')} style={styles.image} />
          <Text style={styles.description}>
            <Text style={styles.boldText}>Sensor ultrassônico:</Text> Dispositivo que utiliza ondas sonoras de alta frequência para medir distâncias ou detectar objetos.
          </Text>
        </View>
        <View style={styles.componentContainer}>
          <Image source={require('../assets/images/f6af149c-d7aa-486e-92c4-04fbbd9cd2a2.png')} style={styles.image} />
          <Text style={styles.description}>
            <Text style={styles.boldText}>Arduino nano:</Text> É uma pequena e completa placa microcontroladora, que serve como o cérebro do robo, ela que irá ser responsavel pelas suas acões.
          </Text>
        </View>
        <Image source={require('../assets/images/componenteseletbaixo.png')} style={styles.imageBaixo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#F0FFFF',
  },
  container: {
    flexGrow: 1,
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
  },
  backButton: {
    position: 'absolute',
    top: 15, 
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Roboto',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3.5,
  },
  componentContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  imageTopo: {
    //position: 'absolute',
    top: -60,
    width: '100%',
    height: 250,
    marginTop: 0,
    marginBottom: -100,
  },
  imageBaixo: {
    //position: 'absolute',
    top: -50,
    width: '100%',
    height: 250,
    marginTop: 0,
    marginBottom: -100,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 25,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2.5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#4682B4',
    fontSize: 18,
  },
});
