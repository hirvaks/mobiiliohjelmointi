import Home from './components/Home';
import Laskin from './components/Laskin';
import Arvaus from './components/Arvaus';
import LaskinHistorialla from './components/LaskinHistorialla';
import Ostoslista from './components/Ostoslista';
import Calculator from './components/Calculator';
import History from './components/History';
import ReseptienHaku from './components/ReseptienHaku';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Oma navigointi importit
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import { useState } from 'react';*/

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tehtävä 1 (Laskin)" component={Laskin} />
        <Stack.Screen name="Tehtävä 2 (Numeron arvaus)" component={Arvaus} />
        <Stack.Screen name="Tehtävä 3 (Laskin historialla)" component={LaskinHistorialla} />
        <Stack.Screen name="Tehtävä 4 (Ostoslista)" component={Ostoslista} />
        <Stack.Screen name="Tehtävä 5 (Laskin navigoinnilla) - Laskin" component={Calculator} />
        <Stack.Screen name="Tehtävä 5 (Laskin navigoinnilla) - Historia" component={History} />
        <Stack.Screen name="Tehtävä 6 (Reseptien haku)" component={ReseptienHaku} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/* Oma navigointi
const [t, setT] = useState('')

  if (t === 1) {
    return (
      <View style={styles.container}>
        <Laskin></Laskin>
        <Button onPress={() => setT(0)} title='Back' />
        <StatusBar style="auto" />
      </View>
    )
  } else if (t === 2) {
    return (
      <View style={styles.container}>
        <Arvaus></Arvaus>
        <Button onPress={() => setT(0)} title='Back' />
        <StatusBar style="auto" />
      </View>
    )
  } else if (t === 3) {
    return (
      <View style={styles.container}>
        <LaskinHistorialla></LaskinHistorialla>
        <Button onPress={() => setT(0)} title='Back' />
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Valitse ohjelma</Text>
        <Button onPress={() => setT(1)} title='Tehtävä 1 (Laskin)' />
        <Button onPress={() => setT(2)} title='Tehtävä 2 (Numeron arvaus)' />
        <Button onPress={() => setT(3)} title='Tehtävä 3 (Laskin historialla)' />
        <StatusBar style="auto" />
      </View>
    )
  }
} //App()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  }
});
*/