import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function ComoConstruirScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Como construir o seu otto</Text>
      <Text style={styles.materiais}>Materiais necessários:</Text>
      <Text style={styles.expli}>*Esses componentes você pode imprimir na impressora 3D. As dimensões se encontram no site: www.ottodiy.com </Text>
      <View style={styles.componentContainer}>
        <Image source={require('../assets/Cabeça.png')} style={styles.image} />
        <Image source={require('../assets/Duas Pernas (1).png')} style={styles.image} />
        <Image source={require('../assets/Sensor ultrassônico HC-SR.png')} style={styles.image} />
        <Image source={require('../assets/x4 Servos com hélice modelo.png')} style={styles.image} />
        <Image source={require('../assets/Arduino nano.png')} style={styles.image} />
        <Image source={require('../assets/Mini cabo USB.png')} style={styles.image} />
        <Text style={styles.instrucao}>Instruções:</Text>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 1</Text>
        <Image source={require('../assets/Servo.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Vamos começar com a montagem dos servos no corpo. Perceba que o servo possui ao redor do seu eixo, uma estrutura conforme a figura acima. Você deve colocar o servo de forma que essa estrutura encaixe no buraco presente no corpo. Repita esse passo para encaixar o outro servo.</Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 2</Text>
        <Image source={require('../assets/Design sem nome.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Agora você tem que parafusar os servos para que ele fique bem firme. Cada servo vai precisar de dois parafusos pontudos. Com o auxilio de uma chave de fenda parafuse os servos.</Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 3</Text>
        <Image source={require('../assets/passo .png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Pegue a helice e encaixe no local indicado dentro da perna. Depois encaixe a perna junto com a hélice no eixo do servo que você parafusou. Lembre-se de fixar as hélices com dois parafusos pequenos. </Text>
        <Text style={styles.atencao}> Atenção! </Text>
        <Text style={styles.expli}>{'\t'}Você deve ajustar o eixo do servo de tal modo que quando você encaixar a perna ela possa fazer um movimento de 90° para direita e 90° para esquerda. </Text>
        <Image source={require('../assets/passo3atencao.png')} style={styles.image} /></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 4</Text>
        <Image source={require('../assets/passoquatro.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe o servo na perna do robô. Tenha atenção para que os cabos do servo fiquem bem esticados. </Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 5</Text>
        <Image source={require('../assets/passo5.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe o pé no robô. Perceba que na lateral do pé há um orifício que irá encaixar no eixo do servo. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 6</Text>
        <Image source={require('../assets/passoseis.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Agora, encaixe as hélices nos servos que você acabou de colocar. Fixe elas com parafusos pequenos. </Text>
        <Text style={styles.atencao}> Atenção! </Text>
        <Text style={styles.expli}>{'\t'}Tenha cuidado em centralizar os servos. É extremamente importante que eles estejam centralizados! </Text>
        <Image source={require('../assets/passoseisatençao.png')} style={styles.image} /></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 7</Text>
        <Image source={require('../assets/passosete.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Confira se o pé consegue fazer os movimentos mostrados na figura. Caso ele não consiga, você deve desmontar e recolocar os servos centralizados. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 8</Text>
        <Image source={require('../assets/passooito.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}O corpo ja está pronto. Agora vamos montar os componentes da cabeça. </Text>
        <Text style={styles.expli}>{'\t'}Encaixe o arduino nano na placa de extenção conforme a figura. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 9</Text>
        <Image source={require('../assets/passonove.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe o sensor ultrassônico (HC-SR04) na cabeça do robô de modo que os terminais fiquem para cima. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 10</Text>
        <Image source={require('../assets/passodez.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Agora você deve fazer a conexão dos servos com o arduino, através da placa de extensão. Os servos tem três cabos, tenha atenção na sequência deles. </Text>
        <Image source={require('../assets/passodezotto.png')} style={styles.image} /></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 11</Text>
        <Image source={require('../assets/passoonze.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Coloque o arduino junto com a placa de entensão dentro da cabeça. Tenha cuidado para que a entrada USB do arduino coincida com o buraco USB da cabeça. Aproveite e coloque a chave no local indicado. Dependendo do modelo da chave que você utilizar, pode ser necessário porcas e arruelas. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 12</Text>
        <Image source={require('../assets/passodoze.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Conecte o sensor ultrassônico conforme a figura. A cor dos cabos não tem diferença. </Text>
        <Text style={styles.expli}>{'\t'}O polo negativo do conjunto de pilhas deve ser conectado ao GND da placa de extenção. Já o polo positivo deve ser conectado ao pino central da chave. Em seguida você deve colocar um jumper em um dos pinos restantes da chave conectado ao Vin da placa de extensão.</Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 13</Text>
        <Image source={require('../assets/passotreze.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Coloque o conjunto de pilhas no centro do corpo do robô. </Text></View>
        
        
        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 14</Text>
        <Image source={require('../assets/passo14.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe a cabeça no corpo, pressionando os encaixes com a mão. </Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Seu OTTO está pronto!</Text>
        <Image source={require('../assets/ottopronto.png')} style={styles.image} />
        <Text style={styles.expli}>Agora você pode conectar o USB ao computador e passar o código para ele. Você encontra diversos códigos que têm funções diferentes no site: www.ottodiy.com</Text>
        <Text style={styles.expli}>as imagens das intruções foram retiradas do site www.ottodiy.com e pintadas para tornarem-se mais didáticas</Text></View>


      <View style={styles.componentContainer}></View>
        
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
  stepContainer: {
    marginBottom: 90,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  instrucao: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
    color: '#4CAF50',
  },
  passo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 100, // Adiciona mais espaço nas laterais
    borderRadius: 5, // Adiciona bordas arredondadas para uma aparência mais agradável
  },
  materiais: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
    color: '#4CAF50',
  },
  expli: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  atencao: {
    textAlign: 'center',
    color: '#ff0000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  componentContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 5,
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
