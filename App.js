import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentesScreen from './screens/ComponentesScreen';
import CodigosScreen from './screens/CodigosScreen';
import ComoConstruirScreen from './screens/ComoConstruirScreen';
import SobreScreen from './screens/SobreScreen';
import ConectarScreen from './screens/ConectarScreen';
import ModoManualScreen from './screens/ModoManual';
import ModoDesviaObstaculosScreen from './screens/ModoDesvia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Componentes" component={ComponentesScreen} />
        <Stack.Screen name="Códigos" component={CodigosScreen} />
        <Stack.Screen name="Como Construir" component={ComoConstruirScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="Conectar" component={ConectarScreen} />
        <Stack.Screen name="ModoManual" component={ModoManualScreen} />
        <Stack.Screen name="ModoDesvia" component={ModoDesviaObstaculosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
