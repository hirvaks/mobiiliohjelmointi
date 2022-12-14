import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Laskin() {

  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)

  const [result, setResult] = useState('')

  const minus = () => {
    setResult(Number(n1) - Number(n2))
  }

  const plus = () => {
    setResult(Number(n1) + Number(n2))
  }

  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>

      <View>
        <TextInput
          placeholder=' Insert 1st number'
          style={styles.input}
          onChangeText={n1 => setn1(n1)}
          value={n1}
          keyboardType="numeric"
        />
        <TextInput
          placeholder=' Insert 2nd number'
          style={styles.input}
          onChangeText={n2 => setn2(n2)}
          value={n2}
          keyboardType="numeric"
        />
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        width: 200
      }}>
        <Button onPress={() => plus()} title='  +  ' />
        <Button onPress={() => minus()} title='  -  ' />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    margin: 5
  }
})