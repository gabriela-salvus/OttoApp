import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function ComponentesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Componentes eletrônicos</Text>
      <View style={styles.componentContainer}>
        <Image source={require('../assets/servomotor.jpeg')} style={styles.image} />
        <Text style={styles.description}>
          <Text style={styles.boldText}>Servo motor:</Text> É um atuador que permite controle preciso de posição, velocidade e aceleração. Ele é composto por um motor, um sensor de posição e um circuito de controle.
        </Text>
      </View>
      <View style={styles.componentContainer}>
        <Image source={require('../assets/modulo.jpeg')} style={styles.image} />
        <Text style={styles.description}>
          <Text style={styles.boldText}>Modulo Hc05:</Text> Dispositivo que permite comunicação sem fio entre dispositivos eletrônicos via Bluetooth.
        </Text>
      </View>
      <View style={styles.componentContainer}>
        <Image source={require('../assets/sensor.jpeg')} style={styles.image} />
        <Text style={styles.description}>
          <Text style={styles.boldText}>Sensor ultrassônico:</Text> Dispositivo que utiliza ondas sonoras de alta frequência para medir distâncias ou detectar objetos.
        </Text>
      </View>
      <View style={styles.componentContainer}>
        <Image source={require('../assets/arduino.jpeg')} style={styles.image} />
        <Text style={styles.description}>
          <Text style={styles.boldText}>Arduino nano:</Text> É uma pequena e completa placa microcontroladora, que serve como o cérebro do robo, ela que irá ser responsavel pelas suas acões.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e5f5e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  componentContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
