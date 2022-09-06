import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function Arvaus() {

  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1)
  console.log(random)

  const [text, setText] = useState('Guess a number between 1-00')

  const [arvaus, setArvaus] = useState('')

  const [count, setCount] = useState(1)

  const guess = () => {
    setCount(count + 1) 
    if (parseInt(random) === parseInt(arvaus)) {
        Alert.alert('You guessed the number in ' + count + ' guesses')
    } else if (parseInt(random) > parseInt(arvaus)) {
        setText('Your guess ' + arvaus + ' is too low')
    } else if (parseInt(random) < parseInt(arvaus)) {
        setText('Your guess ' + arvaus + ' is too high')
    }
  }

  return (
    <View>

      <Text>{text}</Text>

      <View>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={arvaus => setArvaus(arvaus)}
          value={arvaus}
          keyboardType="numeric"
        />
      </View>
      
      <Button onPress={() => guess()} title='Guess' />
    </View>
  );
}