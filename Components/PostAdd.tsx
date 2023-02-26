import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import PostModel, { Post } from '../model/PostModel'
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import FormData from 'form-data';

const PostAdd = ({ route, navigation }) => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [avatarUri, setAvatarUri] = useState("")
  const askPermission = async () => {
    try {
      const res = await ImagePicker.getCameraPermissionsAsync()
      if (!res.granted) {
        alert('camera permission is required')
      }
    } catch (err) {
      console.log("ask permission error" + err)
    }
  }
  useEffect(() => {
    askPermission()
  }, [])

  const openCamera = async () => {
    try {
      const res = await ImagePicker.launchCameraAsync()
      if (!res.canceled && res.assets.length > 0) {
        const uri = res.assets[0].uri
        setAvatarUri(uri)
      }
    } catch (error) {
      console.log('open Camera failed' + error)
    }

  }
  const openGallery = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync()
      if (!res.canceled && res.assets.length > 0) {
        const uri = res.assets[0].uri
        setAvatarUri(uri)
      }
    } catch (error) {
      console.log('open Camera failed' + error)
    }
  }
  const onSavecallback = async () => {
    console.log("button")
    const post: Post = {
      id: id,
      name: name,
      image: '',
    }
    try {
      if (avatarUri != ""){
        console.log("upload Image")
        const url = await PostModel.uploadImage(avatarUri)
        post.image = url
        console.log('got url from upload' + url)
      }
      console.log("saving Post")

      await PostModel.addPost(post)

    }
    catch (err) {
      console.log('failed to add student' + err)
    }
    navigation.goBack()
  }

  const onCancelcallback = () => {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View>
        {avatarUri == "" && <Image source={require('../assets/avatar.jpg')} style={styles.avatar}></Image>}
        {avatarUri != "" && <Image source={{ uri: avatarUri }} style={styles.avatar}></Image>}

        <TouchableOpacity onPress={openCamera}>
          <Ionicons name={'camera'}
            style={styles.cameraButton} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openGallery}>
          <Ionicons name={'image'}
            style={styles.galleryButton} size={50} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
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
          <TouchableOpacity onPress={onCancelcallback} style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSavecallback} style={styles.button}>
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
    alignSelf: 'center',
    width: '100%'
  }, cameraButton: {
    position: 'absolute',
    bottom: -10,
    left: 10,
    width: 50,
    height: 50,
  },
  galleryButton: {
    position: 'absolute',
    bottom: -10,
    right: 10,
    width: 50,
    height: 50,
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