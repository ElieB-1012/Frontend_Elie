import { View,Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, FlatList, TouchableHighlight  } from 'react-native'
import React, { useState, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import PostModel, {Post} from '../model/PostModel';


const ListItem= ({ name, id, image, onRowSelected}) => {
    const onClick = () => {
        console.log('click' + id)
        onRowSelected(id)
    }
    console.log('listitem' + name)
    return (
        
        <TouchableHighlight onPress={onClick} underlayColor = {'gainsboro'}>
            <View style={styles.listRow}>
                <Image style={styles.listRowImage}
                    source={require("../assets/avatar.jpg")}/>
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
        //setPosts(PostModel.getAllPosts())
    }
    const [posts, setPosts] = useState<Array<Post>>() 
    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', async ()=> {
            console.log('focus')
            let posts: Post[] = []
            try {
                posts = await PostModel.getAllPosts()
                setPosts(posts)
                console.log("fetching students complete")
            } catch (err) {
                console.log("fail fetching students " + err)
                setPosts(Array<Post>())
            }
            console.log("fetching finish")
        })
        return unsubscribe
    })

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