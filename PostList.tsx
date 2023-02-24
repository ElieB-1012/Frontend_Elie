import { View,Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, FlatList, TouchableHighlight  } from 'react-native'
import React, { useState, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

type Post= {
    id: String,
    name: String,
    image: String,
}

const posts: Array<Post> = [
    {
        id:'1',
        name: 'Elie',
        image: './assets/avatar.jpg'
    },
    {
        id:'2',
        name: 'Yaacov',
        image: './assets/avatar.jpg'
    },
    {
        id:'3',
        name: 'Adane',
        image: './assets/avatar.jpg'
    },
]
const ListItem= ({ name, id, image, onRowSelected}) => {
    const onClick = () => {
        console.log('click' + id)
        onRowSelected(id)
    }
    return (
        
        <TouchableHighlight onPress={onClick} underlayColor = {'gainsboro'}>
            <View style={styles.listRow}>
                <Image style={styles.listRowImage}
                    source={require("./assets/avatar.jpg")}/>
                <View style={styles.listRowTextContainer}>
                    <Text style={styles.listRowName}>{name}</Text>
                    <Text style={styles.listRowId}>{id}</Text>
            </View> 
        </View>
        </TouchableHighlight>

    )
}

const PostList= ({route, navigation}) => {
    const onRowSelected = (id: String) => {
        console.log("row selected: " + id)
        navigation.navigate('PostDetails', {PostId: id})
    }
    return (
        <FlatList style={styles.flatlist}
            data={posts}
            keyExtractor={posts => posts.id.toString()}
            renderItem={({ item }) => (
            <ListItem name={item.name} id={item.id} image={item.image} onRowSelected={onRowSelected} />
            )}
            >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    listRow: {
        margin:4,
        flexDirection: "row",
        height: 150,
        elevation: 1,
        borderRadius: 2,
        },
    flatlist:{
        flex:1,

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
        fontSize:30
        }, 
    listRowId:{
        fontSize:25
        }
})

export default PostList