import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import PostList from './PostList';
import Profile from './PostAdd';



const PostDetails = ({ route, navigation }) => {
    // useEffect(()=> {
    //   navigation.setOptions({title: 'Details ' + route.params.name})
    // })
    const PostId = JSON.stringify(route.params.PostId)
    const name = JSON.stringify(route.params.name)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{PostId}</Text>
        </View>
    );
}

export default PostDetails