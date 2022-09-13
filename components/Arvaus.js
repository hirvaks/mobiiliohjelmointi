import { Text, View, Button, Alert, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Arvaus() {

  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1)
  console.log(random)

  const [text, setText] = useState('Guess a number between 1-00')

  const [arvaus, setArvaus] = useState('')

  const [count, setCount] = useState(1)

  const guess = () => {
    if (Number(random) === Number(arvaus)) {
      Alert.alert('You guessed the number in ' + count + ' guesses')
    } else if (Number(random) > Number(arvaus)) {
      setText('Your guess ' + arvaus + ' is too low')
    } else if (Number(random) < Number(arvaus)) {
      setText('Your guess ' + arvaus + ' is too high')
    }
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>

      <Text>{text}</Text>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={arvaus => setArvaus(arvaus)}
          value={arvaus}
          keyboardType="numeric"
        />
      </View>

      <Button onPress={() => guess()} title='Guess' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    margin: 10
  }
})