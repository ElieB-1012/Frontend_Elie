import { useNavigation } from '@react-navigation/native';
import { create } from 'apisauce';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import ListItem from './PostItem';
import baseURL from '../api/baseURL';

const HomeScreen = () => {
  
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
    })
    const allPosts : any = await apiClient.get('/post');
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
      ({item}) => (
        <ListItem name={item.senderName} message={item.message} image={item.photo} id={item.senderId}/>
      )
    } /> 
  );
};

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

export default HomeScreen;