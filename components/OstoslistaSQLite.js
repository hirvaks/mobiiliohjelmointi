import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native'
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('shopinglist.db')

export default function OstoslistaSQLite() {

    const [product, setProduct] = useState('')
    const [amount, setAmount] = useState('')
    const [produtList, setProdutList] = useState([])

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists productable (id integer primary key not null, product text, amount text);')
        }, null, updateList)
    }, [])

    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from productable;', [], (_, { rows }) =>
                setProdutList(rows._array)
            );
        });
    }

    const saveItem = () => {
        db.transaction(tx => {
            tx.executeSql('insert into productable (product, amount) values (?, ?);', [product, amount])
        }, null, updateList)
        setProduct('')
        setAmount('')
    }

    const deleteItem = (id) => {
        db.transaction(
            tx => {
                tx.executeSql(`delete from productable where id = ?;`, [id])
            }, null, updateList
        )
    }

    const listSeparator = () => {
        return (
          <View
            style={{
              height: 5,
              width: "80%",
              backgroundColor: "#fff",
              marginLeft: "10%"
            }}
          />
        )
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
            <Button onPress={saveItem} title="Save" />
            <FlatList
                style={styles.list}
                data={produtList}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={listSeparator}
                renderItem={({ item }) =>
                    <View style={styles.product}>
                        <Text style={{ fontSize: 18 }}>{item.product}, {item.amount}</Text>
                        <Text style={{ fontSize: 18, color: '#0000ff' }} onPress={() => deleteItem(item.id)}> bought</Text>
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
        marginLeft: "5%"
    },
    product: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})