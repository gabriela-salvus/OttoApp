import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o Robo Otto:</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F0FFF0',
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
});
