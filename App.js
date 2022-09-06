import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import { useState } from 'react';
import Laskin from './components/Laskin';
import Arvaus from './components/Arvaus';

export default function App() {

  const [text, setText] = useState('')

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
  } else {
    return (
      <View style={styles.container}>
        <Text>Valitse ohjelma</Text>
        <Button onPress={() => setT(1)} title='Tehtävä 1 (Laskin)' />
        <Button onPress={() => setT(2)} title='Tehtävä 2 (Numeron arvaus)' />
        <StatusBar style="auto" />
      </View>
    )
  }

  /* return (
    <View style={styles.container}>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, width: 200}}
        onChangeText={text => setText(text)}
        value={text}
        keyboardType="numeric"
      />

      <Text>Hello!</Text>

      <Button onPress={buttonPressed} title='Press me' />

      <Image
        style={{ width: 250, height: 100 }}
        source={{ uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d-w_960_h_960.jpg' }} 
      />

      <Laskin></Laskin>

      <StatusBar style="auto" />
    </View>
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100
  },
});
