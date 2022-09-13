import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Calculator({ navigation }) {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)

    const [result, setResult] = useState('')

    const [history, setHistory] = useState([])

    const minus = () => {
        setHistory([...history, { cal: n1 + ' - ' + n2 + ' = ' + (Number(n1) - Number(n2)) }])
        setResult(Number(n1) - Number(n2))
    }

    const plus = () => {
        setHistory([...history, { cal: n1 + ' + ' + n2 + ' = ' + (Number(n1) + Number(n2)) }])
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

            <View style={styles.home_buttons}><Button
                title="History"
                onPress={() => navigation.navigate('Tehtävä 5 (Laskin navigoinnilla) - Historia', { history })}
            /></View>

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
    home_buttons: {
        margin: 10
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        margin: 5
    }
})