import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, FlatList, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import PostModel, { Post } from '../model/PostModel';
import Feather from 'react-native-vector-icons/Feather'



const ListItem = ({ name, id, image }) => {
    const onClick = () => {
        console.log('click ' + id)
    }
    return (

        <View style={{
            paddingBottom: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.1,
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {image == "" && <Image style={{ width: 40, height: 40, borderRadius: 100 }} source={require('../assets/avatar.jpg')} />}
                    {image != "" && <Image style={{ width: 40, height: 40, borderRadius: 100 }} source={{ uri: image.toString() }} />}
                    <View style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                            {name}
                        </Text>
                    </View>
                </View>
                <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                    {image == "" && <Image style={{ width: '100%', height: 400 }} source={require('../assets/avatar.jpg')} />}
                    {image != "" && <Image style={{ width: '100%', height: 400 }} source={{ uri: image.toString() }} />}
            </View>
            <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                  margin:20 
                }}>
                {id}
              </Text>
           

        </View>

    )
}

/*
        <TouchableHighlight onPress={onClick} underlayColor={'gainsboro'}>
            <View style={styles.listRow}>
                {image == "" && <Image style={styles.listRowImage} source={require('../assets/avatar.jpg')} />}
                {image != "" && <Image style={styles.listRowImage} source={{ uri: image.toString() }} />}
                <View style={styles.listRowTextContainer}>
                    <Text style={styles.listRowName}>{name}</Text>
                    <Text style={styles.listRowId}>{id}</Text>
                </View>
            </View>
        </TouchableHighlight> */
const styles = StyleSheet.create({
    listRow: {
        margin: 4,
        flexDirection: "row",
        height: 150,
        elevation: 1,
        borderRadius: 2,
    },
    flatlist: {
        flex: 1,

    },
    listRowImage: {
        margin: 10,
        resizeMode: "contain",
        height: 130,
        width: 130,
    },
    listRowTextContainer: {
        flex: 1,
        margin: 10,
        justifyContent: "space-around"
    },
    listRowName: {
        fontSize: 30
    },
    listRowId: {
        fontSize: 25
    }
})

export default ListItem