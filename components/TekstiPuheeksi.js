import * as Speech from 'expo-speech'
import { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function TekstiPuheeksi() {

    const [text, setText] = useState('')

    const sayIt = () => {
        Speech.speak(text)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder=' Write what you want to hear'
                style={styles.input}
                onChangeText={text => setText(text)}
                value={text}
            />
            <Button title='Listen' onPress={sayIt} />
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
    }
})