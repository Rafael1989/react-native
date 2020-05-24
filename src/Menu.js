import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, {MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Contador" component={() => <Contador numeroInicial={50} />} />
        <Drawer.Screen name="MegaSena" component={() => <MegaSena numeros={8} />} />
        <Drawer.Screen name="Inverter" component={() => <Inverter texto='React Nativo!' />} />
        <Drawer.Screen name="Par & Impar" component={() => <ParImpar numero={30} />} />
        <Drawer.Screen name="Simples" component={() => <Simples texto='Flexível!!!' />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}