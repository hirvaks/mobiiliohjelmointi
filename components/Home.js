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

            <View style={styles.home_buttons}><Button
                title="Tehtävä 5 (Laskin navigoinnilla)"
                onPress={() => navigation.navigate('Tehtävä 5 (Laskin navigoinnilla) - Laskin')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 6 (Reseptien haku)"
                onPress={() => navigation.navigate('Tehtävä 6 (Reseptien haku)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 8 (Etsi osoite)"
                onPress={() => navigation.navigate('Tehtävä 8 (Etsi osoite)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 11 (Ostoslista & SQLite)"
                onPress={() => navigation.navigate('Tehtävä 11 (Ostoslista & SQLite)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 12 (Ostoslista & Firebase)"
                onPress={() => navigation.navigate('Tehtävä 12 (Ostoslista & Firebase)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 13 (Kontakti)"
                onPress={() => navigation.navigate('Tehtävä 13 (Kontakti)')}
            /></View>

            <View style={styles.home_buttons}><Button
                title="Tehtävä 14 (Teksti puheeksi)"
                onPress={() => navigation.navigate('Tehtävä 14 (Teksti puheeksi)')}
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