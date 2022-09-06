import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function Laskin() {

  const [n1, setn1] = useState('')
  const [n2, setn2] = useState('')

  const buttonPressed = () => {
    Alert.alert(n2 + n1)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, width: 200}}
        onChangeText={n1 => setn1(n1)}
        value={n1}
        keyboardType="numeric"
      />
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, width: 200}}
        onChangeText={n2 => setn2(n2)}
        value={n2}
        keyboardType="numeric"
      />

      <Button onPress={buttonPressed} title='Press me' />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
