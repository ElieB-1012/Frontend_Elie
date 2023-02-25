import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import PostList from './PostList';
import PostDetails from './PostDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostAdd from './PostAdd';

const InfoScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>InfoScreen</Text>
    </View>
  );
}

const PostStack = createNativeStackNavigator();
const PostStackComponent = ({route, navigation}) => {
  const addNewPost = () => {
    navigation.navigate('PostAdd')
  }
  return (
    <PostStack.Navigator >
      <PostStack.Screen name="PostList" component={PostList} options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={addNewPost}>
            <Ionicons name={'add-outline'}
              size={40} color={'gray'} />
          </TouchableOpacity>
        ),
      }
      } />
      <PostStack.Screen name="PostDetails" component={PostDetails} />
      <PostStack.Screen name="PostAdd" component={PostAdd} />
    </PostStack.Navigator >
  );
}

const Tab = createBottomTabNavigator();
const TabNavigation = ({ route, navigation }) => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'InfoScreen') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'PostStackComponent') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="PostStackComponent" component={PostStackComponent} options={{ headerShown: false }} />
        <Tab.Screen name="InfoScreen" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation