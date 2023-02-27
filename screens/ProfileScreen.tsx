import { useNavigation } from '@react-navigation/native';
import { create } from 'apisauce';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import ListItem from './PostItem';
import baseURL from '../api/baseURL';
import axios from 'axios';
const ProfileScreen = () => {
  const navigation = useNavigation()
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const [posts, setPosts] = useState()
  const getPosts = async () => {
    const apiClient = create({
      baseURL: `${baseURL}`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `JWT ${userInfo.accessToken}`
      },
      //params: {sender: userInfo._id}
    })
    const allPosts: any = await apiClient.get(`/post/${userInfo._id}`);
    setPosts(allPosts.data)
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await getPosts();
    })
    return unsubscribe
  })
  console.log(userInfo._id);
  
  return (
    <FlatList
      data={posts}
      keyExtractor={post => post._id.toString()}
      renderItem={
        ({ item }) => (
          <ListItem name={item.senderName} id={item.message} image={item.photo} />
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