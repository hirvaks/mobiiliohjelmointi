import { Text, View, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function LaskinHistorialla() {

  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)

  const [result, setResult] = useState('')

  const [hitory, setHistory] = useState([])

  const minus = () => {
    setHistory([...hitory, { cal: n1 + ' - ' + n2 + ' = ' + (Number(n1) - Number(n2)) }])
    setResult(Number(n1) - Number(n2))
  }

  const plus = () => {
    setHistory([...hitory, { cal: n1 + ' + ' + n2 + ' = ' + (Number(n1) + Number(n2)) }])
    setResult(Number(n1) + Number(n2))
  }

  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>

      <View>
        <TextInput
          placeholder=' Insert 1st number'
          style={styles.input}
          onChangeText={n1 => setN1(n1)}
          value={n1}
          keyboardType="numeric"
        />
        <TextInput
          placeholder=' Insert 2nd number'
          style={styles.input}
          onChangeText={n2 => setN2(n2)}
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

      <Text>History</Text>
      <FlatList
        data={hitory}
        renderItem={({ item }) => <Text>{item.cal}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />

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