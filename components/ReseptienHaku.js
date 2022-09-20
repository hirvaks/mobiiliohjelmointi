import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, FlatList, Image } from 'react-native';

export default function ReseptienHaku () {

    const [keyword, setKeyword] = useState('')
    const [data, setData] = useState([])
  
    const fetchRecipies = () => {
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + keyword)
        .then(response => response.json())
        .then(data => setData(data.meals))
        .then(console.log(data[0]))
        .catch(err => Alert.alert('Error', "Did not find recipies or something went wrong"))
    }
  
    const listSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "80%",
            backgroundColor: "#CED0CE",
            marginLeft: "10%"
          }}
        />
      );
    };

    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <TextInput
            style={{ fontSize: 18, width: 200 }}
            placeholder='Keyword'
            onChangeText={text => setKeyword(text)}
          />
          <Button title='Search' onPress={fetchRecipies} />
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={listSeparator}
            renderItem={({ item }) =>
              <View style={{ margin: 10 }}>
                <Text style={styles.textName}>{item.strMeal}</Text>
                <Image
                  style={{width: 70, height: 70}}
                  source={{uri: item.strMealThumb}}
                />
              </View>
              }
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textName: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      textDescription: {
        fontSize: 16
      }
    });