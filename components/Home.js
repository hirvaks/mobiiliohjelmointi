import { Button, Text, View, StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.home_buttons}>Valitse ohjelma</Text>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 1 (Laskin)"
                onPress={() => navigation.navigate('Tehtävä 1 (Laskin)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 2 (Numeron arvaus)"
                onPress={() => navigation.navigate('Tehtävä 2 (Numeron arvaus)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 3 (Laskin historialla)"
                onPress={() => navigation.navigate('Tehtävä 3 (Laskin historialla)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 4 (Ostoslista)"
                onPress={() => navigation.navigate('Tehtävä 4 (Ostoslista)')}
            /></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    home_buttons: {
        margin: 10
    }
})