import { View,Text, TextInput, StyleSheet, Image, TouchableOpacity  } from 'react-native'
import { useState} from 'react'

const App = () =>{

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const onPresscallback = () => {
    console.log("button")
  }
  return (
    
    <View style = {styles.container}>
      <Image source={require('./assets/avatar.jpg')} style = {styles.avatar}></Image>
      <TextInput
        style={styles.input}
        onChangeText={setId}
        value={id}
        placeholder = {'Student ID'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder = {'Student Name'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder = {'Student Address'}
      />
    <View style = {styles.buttonsContainer}>
      <TouchableOpacity>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    avatar:{
      margin:30,
      height: 200,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttonsContainer: {
      flex: 1,
      flexDirection: "row",
    }
})
export default App