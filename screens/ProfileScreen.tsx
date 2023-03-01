import { useNavigation } from '@react-navigation/native';
import { create } from 'apisauce';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import ListItem from './PostItem';
import baseURL from '../api/baseURL';
import axios from 'axios';
const ProfileScreen = () => {
  const navigation = useNavigation()
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const [posts, setPosts] = useState()
  const onClick = (id: any, message: any, name: any, image: any) => {
    navigation.navigate('EditPost', {id: id, message: message, name: name, image: image})//HEREEEEE
    console.log('Elie' + image);
    
  }
  const getPosts = async () => {
    const apiClient = create({
      baseURL: `${baseURL}`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `JWT ${userInfo.accessToken}`
      },
      params: {sender: userInfo._id}
    })
    const allPosts: any = await apiClient.get(`/post/`);
    //console.log('all posts: ' + JSON.stringify(allPosts.data));
    
    setPosts(allPosts.data)
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await getPosts();
    })
    return unsubscribe
  })
  
  return (
    
    <FlatList
      data={posts}
      keyExtractor={post => post._id.toString()}
      renderItem={
        ({ item }) => (
          <TouchableOpacity onPress={() => onClick(item._id, item.message, item.name, item.photo)}>
            <ListItem name={item.senderName} message={item.message} image={item.photo} id = {item.senderId} />
          </TouchableOpacity>
        )
      } />
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ProfileScreen