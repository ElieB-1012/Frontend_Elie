import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './Components/TabNavigation'
import PostList from './Components/PostList'
import Navigation from './Components/Navigation'
import PostDetails from './Components/PostDetails'

const HomeScreen = ({ route, navigation }) => {
  const [message, setMessage] = useState('non')
  useEffect(() => {
    console.log('UseEffect' + route.params?.newPostId)
    if (route.params?.newPostId) {
      setMessage(JSON.stringify(route.params?.newPostId))
    }
  }, [route.params?.newPostId])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{message}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { id: 123, name: "Elie" })}>
      </Button>
    </View>
  );
}


const DetailsScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Details ' + route.params.name })
  })
  const id = JSON.stringify(route.params.id)
  const name = JSON.stringify(route.params.name)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {id}</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home', { newPostId: "666" })
        }}>
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const HeaderTitle = () => {
  return (
    <View>
      <Image source={require('./assets/avatar.jpg')} style={{ height: 50, width: 50 }} />
    </View>
  )
}


const App = () => {
  return (
    <TabNavigation></TabNavigation>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    margin: 30,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 12,
    padding: 12,
    borderRadius: 10,

  },
  buttonText: {
    textAlign: 'center',
    color: "white",
  }
})
export default App