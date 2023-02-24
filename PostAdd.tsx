import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const PostAdd = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const onPresscallback = () => {
    console.log("button")
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('./assets/avatar.jpg')} style={styles.avatar}></Image>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder={'Student ID'}
        />
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder={'Student Name'}
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder={'Student Address'}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onPresscallback} style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPresscallback} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

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

export default PostAdd