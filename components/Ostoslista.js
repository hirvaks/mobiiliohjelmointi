import { Text, View, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Ostoslista() {

  const [product, setproduct] = useState('')

  const [shopingList, setShopingList] = useState([])

  const clear = () => {
    setShopingList([])
  }

  const add = () => {
    setShopingList([...shopingList, {product_name: product} ])
    setproduct('')
  }

  return (
    <View style={styles.container}>

      <Text>Add items to your shopping list</Text>

      <View>
        <TextInput
          placeholder=' Insert item name'
          style={styles.input}
          onChangeText={product => setproduct(product)}
          value={product}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        width: 200
      }}>
        <Button onPress={() => add()} title='Add' />
        <Button onPress={() => clear()} title='Clear' />
      </View>

      <Text style={styles.text} >Shopping list</Text>
      <FlatList
        data={shopingList}
        renderItem={({ item }) => <Text>{item.product_name}</Text>}
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
  },
  text: {
    fontWeight:'bold'
  }
})