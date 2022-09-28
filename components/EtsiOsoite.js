import { useState } from 'react'
import { StyleSheet, Alert, View, Dimensions, TextInput, Button } from 'react-native'
import MapView, { Marker } from "react-native-maps"

export default function EtsiOsoite() {

    const [region, setRegion] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    })

    const [address, setAddress] = useState('')

    const mapquestapiKey = 'kXhZZ0WcxRPf9LOj6GGHjB6AMkt6d8ar'

    const fetchCordinates = () => {
        fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${mapquestapiKey}&location=${address}`)
          .then(response => response.json())
          .then(dat => setRegion({
            latitude: dat.results[0].locations[0].latLng.lat, 
            longitude: dat.results[0].locations[0].latLng.lng,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,}))
          .catch(err => Alert.alert('Error', "Did not find address or something went wrong"))
    }

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 5}}>
                <MapView style={styles.map} region={region}>
                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                </MapView>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder=' Type address'
                    style={styles.input}
                    onChangeText={address => setAddress(address)}
                    value={address}
                />
                <Button onPress={() => fetchCordinates()} title='Find' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    inputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
      borderColor: 'gray',
      backgroundColor: '#fff',
      borderWidth: 1,
      width: 250,
      marginRight: 2
    }
})
