import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ComponentesScreen() {
  const navigation = useNavigation();


  return (
    <ScrollView contentContainerStyle={styles.outerContainer}> 
      <Image source={require('../assets/images/como otto (1).png')} style={styles.imageTitulo} /><TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.materiais}>Materiais necessários:</Text>
      <Text style={styles.expli}>*Esses componentes você pode imprimir na impressora 3D. As dimensões se encontram no site: www.ottodiy.com </Text>
      <View style={styles.componentContainer}>
        <Image source={require('../assets/images/Cabeça (1).png')} style={styles.image} />
        <Image source={require('../assets/images/Duas Pernas (1).png')} style={styles.image} />
        <Image source={require('../assets/images/Sensor ultrassônico HC-SR.png')} style={styles.image} />
        <Image source={require('../assets/images/x4 Servos com hélice modelo.png')} style={styles.image} />
        <Image source={require('../assets/images/Arduino nano.png')} style={styles.image} />
        <Image source={require('../assets/images/Mini cabo USB.png')} style={styles.image} />
        <Text style={styles.instrucao}>Instruções:</Text>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 1</Text>
        <Image source={require('../assets/images/Servo.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Vamos começar com a montagem dos servos no corpo. Perceba que o servo possui ao redor do seu eixo, uma estrutura conforme a figura acima. Você deve colocar o servo de forma que essa estrutura encaixe no buraco presente no corpo. Repita esse passo para encaixar o outro servo.</Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 2</Text>
        <Image source={require('../assets/images/Design sem nome.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Agora você tem que parafusar os servos para que ele fique bem firme. Cada servo vai precisar de dois parafusos pontudos. Com o auxilio de uma chave de fenda parafuse os servos.</Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 3</Text>
        <Image source={require('../assets/images/passo .png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Pegue a helice e encaixe no local indicado dentro da perna. Depois encaixe a perna junto com a hélice no eixo do servo que você parafusou. Lembre-se de fixar as hélices com dois parafusos pequenos. </Text>
        <Text style={styles.atencao}> Atenção! </Text>
        <Text style={styles.expli}>{'\t'}Você deve ajustar o eixo do servo de tal modo que quando você encaixar a perna ela possa fazer um movimento de 90° para direita e 90° para esquerda. </Text>
        <Image source={require('../assets/images/passo3atencao.png')} style={styles.image} /></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 4</Text>
        <Image source={require('../assets/images/passoquatro.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe o servo na perna do robô. Tenha atenção para que os cabos do servo fiquem bem esticados. </Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 5</Text>
        <Image source={require('../assets/images/passo5.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe o pé no robô. Perceba que na lateral do pé há um orifício que irá encaixar no eixo do servo. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 6</Text>
        <Image source={require('../assets/images/passoseis.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Agora, encaixe as hélices nos servos que você acabou de colocar. Fixe elas com parafusos pequenos. </Text>
        <Text style={styles.atencao}> Atenção! </Text>
        <Text style={styles.expli}>{'\t'}Tenha cuidado em centralizar os servos. É extremamente importante que eles estejam centralizados! </Text>
        <Image source={require('../assets/images/passoseisatençao.png')} style={styles.image} /></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 7</Text>
        <Image source={require('../assets/images/passosete.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Confira se o pé consegue fazer os movimentos mostrados na figura. Caso ele não consiga, você deve desmontar e recolocar os servos centralizados. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 8</Text>
        <Image source={require('../assets/images/passooito.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}O corpo ja está pronto. Agora vamos montar os componentes da cabeça. </Text>
        <Text style={styles.expli}>{'\t'}Encaixe o arduino nano na placa de extenção conforme a figura. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 9</Text>
        <Image source={require('../assets/images/passonove.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe o sensor ultrassônico (HC-SR04) na cabeça do robô de modo que os terminais fiquem para cima. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 10</Text>
        <Image source={require('../assets/images/passodez.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Agora você deve fazer a conexão dos servos com o arduino, através da placa de extensão. Os servos tem três cabos, tenha atenção na sequência deles. </Text>
        <Image source={require('../assets/images/passodezotto.png')} style={styles.image} /></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 11</Text>
        <Image source={require('../assets/images/passoonze.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Coloque o arduino junto com a placa de entensão dentro da cabeça. Tenha cuidado para que a entrada USB do arduino coincida com o buraco USB da cabeça. Aproveite e coloque a chave no local indicado. Dependendo do modelo da chave que você utilizar, pode ser necessário porcas e arruelas. </Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 12</Text>
        <Image source={require('../assets/images/passodoze.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Conecte o sensor ultrassônico conforme a figura. A cor dos cabos não tem diferença. </Text>
        <Text style={styles.expli}>{'\t'}O polo negativo do conjunto de pilhas deve ser conectado ao GND da placa de extenção. Já o polo positivo deve ser conectado ao pino central da chave. Em seguida você deve colocar um jumper em um dos pinos restantes da chave conectado ao Vin da placa de extensão.</Text></View>


        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 13</Text>
        <Image source={require('../assets/images/passotreze.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Coloque o conjunto de pilhas no centro do corpo do robô. </Text></View>
        
        
        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Passo 14</Text>
        <Image source={require('../assets/images/passo14.png')} style={styles.image} />
        <Text style={styles.expli}>{'\t'}Encaixe a cabeça no corpo, pressionando os encaixes com a mão. </Text></View>

        <View style={styles.stepContainer}>
        <Text style={styles.passo}>Seu OTTO está pronto!</Text>
        <Image source={require('../assets/images/ottopronto.png')} style={styles.image} />
        <Text style={styles.expli}>Agora você pode conectar o USB ao computador e passar o código para ele. Você encontra diversos códigos que têm funções diferentes no site: www.ottodiy.com</Text>
        <Text style={styles.expli}>as imagens das intruções foram retiradas do site www.ottodiy.com e pintadas para tornarem-se mais didáticas</Text></View>

        
      <View style={styles.componentContainer}></View>
        
      </View>
      
    </ScrollView>
    <Image source={require('../assets/images/Comoconstruiroseuottobaixo.png')} style={styles.imageBaixo} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer:{
    flex:0,
    paddingTop:0,
    marginTop: 0,
    marginHorizontal: 0,
    backgroundColor: '#FFE4B5'
  },
  container: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: '#FFE4B5',
  },
  containerImagem: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFE4B5',
  },
  stepContainer: {
    marginBottom: 90,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    //fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  instrucao: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
    color: '#FF8C00',
  },
  passo: {
    fontSize: 26,
    //fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    backgroundColor: '#FF8C00',
    padding: 10,
    paddingHorizontal: 280, 
    borderRadius: 5, 
  },
  materiais: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:-0,
    color: '#FF8C00',
  },
  expli: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  atencao: {
    textAlign: 'center',
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  componentContainer: {
    marginBottom: 0,
    alignItems: 'center',
  },
  imageTitulo:{
    top:-60,
    right:31,
    width: '112%',
    height: 288,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal:0,
  },
  image: {
    width: 370,
    height: 370,
    marginBottom: 5,
  },
  imageBaixo: {
    bottom: -60,
    right:27,
    width: '107%',
    height: 280,
    paddingTop: 0,
    paddingHorizontal:0,
  },
  backButton: {
    position: 'absolute',
    top: 15, 
    left: 10,
    zIndex: 1,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
