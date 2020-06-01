import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, {MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Lista Flex" component={ListaFlex} />
        <Drawer.Screen name="Comunicação indireta" component={() => <TextoSincronizado />} />
        <Drawer.Screen name="Comunicação direta" component={() => <Avo nome="João" sobrenome="Silva"/>} />
        <Drawer.Screen name="Evento" component={() => <Evento />} />
        <Drawer.Screen name="ValidarProps" component={() => <ValidarProps ano={18} />} />
        <Drawer.Screen name="Plataforma" component={() => <Plataforma />} />
        <Drawer.Screen name="Contador" component={() => <Contador numeroInicial={50} />} />
        <Drawer.Screen name="MegaSena" component={() => <MegaSena numeros={8} />} />
        <Drawer.Screen name="Inverter" component={() => <Inverter texto='React Nativo!' />} />
        <Drawer.Screen name="Par & Impar" component={() => <ParImpar numero={30} />} />
        <Drawer.Screen name="Simples" component={() => <Simples texto='Flexível!!!' />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}