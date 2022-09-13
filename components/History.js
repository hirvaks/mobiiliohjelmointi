import { View, Text, FlatList, StyleSheet } from "react-native";

export default function History(route) {

    console.log(route.route.params.history)

    return (
        <View style={styles.container}>
            <Text style={styles.text} >History</Text>
            <FlatList
                data={route.route.params.history}
                renderItem={({ item }) => <Text>{item.cal}</Text>}
                keyExtractor={(item, index) => index.toString()}
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
    text: {
        fontWeight: 'bold'
    }
})