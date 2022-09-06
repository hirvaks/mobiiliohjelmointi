import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState('')

  const buttonPressed = () => {
    Alert.alert('You typed: ' + text)
  }

  return (
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
