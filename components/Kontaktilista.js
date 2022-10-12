import { Button, View, Text, FlatList, StyleSheet } from "react-native"
import * as Contacts from 'expo-contacts'
import { useState } from "react"

export default function Kontaktilista() {

    const [contactedList, setContacts] = useState()

    const [showContact, setShow] = useState(false)

    const getContacts = async () => {
        // Ask permission to access contacts in your device
        const { status } = await Contacts.requestPermissionsAsync()

        if (status === 'granted') {
            // Get contacts from your device -> returns an array of contact objects
            const { data } = await Contacts.getContactsAsync()
            if (data.length > 0) {
                const newArr = data.map(contactor)
                setContacts(newArr.sort())
                setShow(true)
            }
        }
    }

    const contactor = (item) => {
        return (`${item.name}: ${checkNumber(item)}`)
    }

    const checkNumber = (item) => {
        if (item.phoneNumbers === undefined) {
            console.log(item.name)
            return ('No number')
        } else {
            return (item.phoneNumbers[0].number)
        }
    }

    const listSeparator = () => {
        return (<View style={styles.separator} />)
    }

    // Conditional rendering with inline if/else
    // {if true ? (render this) else : (render this)}
    return (
        <View style={styles.container}>
            {showContact ? (
                <View style={styles.container}>
                    <FlatList
                        style={styles.list}
                        keyExtractor={(item, index) => index.toString()}
                        data={contactedList}
                        ItemSeparatorComponent={listSeparator}
                        renderItem={({ item }) =>
                            <View style={styles.contact}>
                                <Text style={{ fontSize: 18 }}>{item}</Text>
                            </View>
                        }
                    />
                </View>
            ) : (
                <View style={styles.container}>
                    <Button title="Get contacts" onPress={getContacts} />
                </View>
            )}
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
    list: {
        marginTop: 10,
        marginLeft: "5%"
    },
    contact: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    separator: {
        height: 5,
        width: "80%",
        backgroundColor: "#fff",
        marginLeft: "10%"
    }
})