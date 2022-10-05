import { initializeApp } from "firebase/app"
import { getDatabase, push, ref, onValue, remove } from 'firebase/database'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native'

const firebaseConfig = {
    apiKey: "AIzaSyA6xlzK1hRQrcP4yStzoh7232iwQPl3hns",
    authDomain: "ostoslista-88a18.firebaseapp.com",
    databaseURL: "https://ostoslista-88a18-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ostoslista-88a18",
    storageBucket: "ostoslista-88a18.appspot.com",
    messagingSenderId: "878565760306",
    appId: "1:878565760306:web:f6be255387cbf4f1da8b2b"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default function OstoslistaFirebase() {

    const [product, setProduct] = useState('')
    const [amount, setAmount] = useState('')
    const [produtListValues, setProdutListValues] = useState([])
    const [produtListKeys, setProdutListKeys] = useState([])

    useEffect(() => {
        const itemsRef = ref(database, 'produtList/')
        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val()
            console.log(data)

            if (data == null) {
                setProdutListValues([{ 'product': 'Empty', 'amount': 'add new items' }])
            } else { 
                setProdutListValues(Object.values(data))
                setProdutListKeys(Object.keys(data))
            }
        })
    }, [])

    const saveItem = () => {
        push(
            ref(database, 'produtList/'),
            { 'product': product, 'amount': amount }
        )
        setProduct('')
        setAmount('')
    }

    const deleteItem = (index) => {
        remove(
            ref(database, 'produtList/' + produtListKeys[index])
        )
    }

    const listSeparator = () => {
        return (<View style={styles.separator} />)
    }

    const check = (item) => {
        if (item.product == 'Empty') {
            return ('')
        } else {
            return ('bought')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder=' Product'
                style={styles.input}
                onChangeText={product => setProduct(product)}
                value={product}
            />
            <TextInput
                placeholder=' Amount'
                style={styles.input}
                onChangeText={amount => setAmount(amount)}
                value={amount}
            />
            <Button onPress={saveItem} title="Add to list" />
            <Text style={{marginTop: 30, fontSize: 20, fontWeight:'bold'}}>Shopping list</Text>
            <FlatList
                style={styles.list}
                data={produtListValues}
                //keyExtractor={item => item.key}
                ItemSeparatorComponent={listSeparator}
                renderItem={({ item, index }) =>
                    <View style={styles.product}>
                        <Text style={{ fontSize: 18 }}>{item.product}, {item.amount}</Text>
                        <Text style={{ fontSize: 18, color: '#0000ff' }} onPress={() => deleteItem(index)}> {`${check(item)}`}</Text>
                    </View>
                }
            />
        </View>
    )
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
    list: {
        marginTop: 10,
        marginLeft: "5%"
    },
    product: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    separator: {
        height: 5,
        width: "80%",
        backgroundColor: "#fff",
        marginLeft: "10%"
    }
})