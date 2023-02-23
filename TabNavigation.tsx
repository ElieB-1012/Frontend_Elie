import { View,Text, TextInput, StyleSheet, Image, TouchableOpacity, Button  } from 'react-native'
import React, { useState, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen: FC<{route: any, navigation: any}> = ({route,navigation}) => {
    const [message, setMessage] = useState('non')
    useEffect(() => {
      console.log('UseEffect' + route.params?.newPostId)
      if(route.params?.newPostId){
        setMessage(JSON.stringify(route.params?.newPostId))
      }
    }, [route.params?.newPostId])
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Home Screen</Text>
     <Text>{message}</Text>
        <Button 
          title = "Go to Details" 
          onPress={() => navigation.navigate('Details', {id: 123, name: "Elie"})}>
        </Button>
     </View>
     );
    }

    const DetailsScreen: FC<{route: any,navigation: any}> = ({route, navigation}) => {
        useEffect(()=> {
          navigation.setOptions({title: 'Details ' + route.params.name})
        })
        const id = JSON.stringify(route.params.id)
        const name = JSON.stringify(route.params.name)
    
      return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Details Screen {id}</Text>
          <Button 
            title = "Home" 
            onPress={() => {
              navigation.navigate('Home', {newPostId: "666"})}}>
          </Button>
       </View>
       );
      }
    

const Tab = createBottomTabNavigator();
const TabNavigation: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'information-circle'
                    : 'information-circle-outline';
                } else if (route.name === 'Details') {
                iconName = focused ? 'list-circle' : 'list-circle-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Details" component={DetailsScreen} initialParams = {{id: "666"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation