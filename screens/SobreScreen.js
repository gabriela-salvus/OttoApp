import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ComponentesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.outerContainer}>
      <Image source={require('../assets/images/sobre robo.png')} style={styles.imageTopo} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        {'\t'}O Robô Otto é um projeto de robótica educacional que utiliza componentes eletrônicos, como o Arduino e o módulo Bluetooth HC-05, para criar um robô bípede interativo. Este projeto é amplamente reconhecido por sua simplicidade e eficácia em ensinar conceitos básicos de programação, eletrônica e engenharia mecânica de uma maneira prática e envolvente. Otto pode ser controlado remotamente e é capaz de realizar diversos movimentos, como andar, dançar e evitar obstáculos, o que o torna uma ferramenta versátil para o aprendizado.
      </Text>
      <Text style={styles.text}>
        {'\t'}O principal objetivo do Robô Otto é educacional. Ele foi desenvolvido para ser uma ferramenta acessível e divertida, ajudando alunos e entusiastas a aprender e aplicar conhecimentos em várias áreas. No campo da programação, Otto pode ser programado usando a linguagem C/C++ através da IDE do Arduino, o que permite aos usuários desenvolverem habilidades de codificação. A montagem do robô envolve a conexão de diversos componentes eletrônicos, proporcionando uma compreensão prática dos circuitos e componentes eletrônicos. A construção física do Otto, geralmente feita com peças impressas em 3D, introduz conceitos básicos de mecânica e design estrutural. Além disso, o uso do módulo Bluetooth HC-05 permite que Otto seja controlado remotamente, adicionando uma camada de interatividade e aplicação prática de tecnologias sem fio.
      </Text>
      <Text style={styles.text}>
        {'\t'}Em resumo, o Robô Otto serve como uma introdução abrangente ao mundo da robótica e da engenharia, promovendo a aprendizagem através da construção prática e do uso de tecnologias modernas. Ele é ideal para iniciantes e entusiastas da robótica que desejam explorar e aprender de maneira prática e divertida.
      </Text>
    </ScrollView>
    <Image source={require('../assets/images/sobre robo baixo.png')} style={styles.imageBaixo} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 0,
    padding: 0,
    paddingBottom: 0,
    backgroundColor: '#F0FFF0',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: '#F0FFF0',
  },
  backButton: {
    position: 'absolute',
    top: 20, 
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 34,
    //fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  imageTopo:{
    top:-75,
    width: '100%',
    height: 250,
    marginBottom:-110,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal:0,
  },
  imageBaixo: {
    //position: 'absolute',
    top: -25,
    width: '100%',
    height: 250,
    marginTop: 0,
    marginBottom: -100,
  },
});
