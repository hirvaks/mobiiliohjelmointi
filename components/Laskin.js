import { StatusBar } from 'expo-status-bar';
import { Text, View, Button,  TextInput } from 'react-native';
import { useState } from 'react';

export default function Laskin() {

  const [n1, setn1] = useState('')
  const [n2, setn2] = useState('')

  const [result, setResult] = useState('')

  const minus = () => {
    setResult(parseInt(n1) - parseInt(n2))
  }

  const plus = () => {
    setResult(parseInt(n1) + parseInt(n2))
  }

  return (
    <View>

      <Text>Result: {result}</Text>

      <View>
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
      </View>
      
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <Button onPress={() => plus()} title='+' />
        <Button onPress={() => minus()} title='-' />
      </View>
      
    </View>
  );
}