import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const SettingsScreen = () => {
  const {userInfo, logout} = useContext(AuthContext)
  return (
    <View style = {styles.container}>
      <Text>SettingsScreen</Text>
      <TouchableOpacity onPress={logout} style = {styles.button}>
          <Text style ={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'grey'
  },
  wrapper:{
    width:'80%'
  },
  input:{
    marginBottom:12,
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius: 5,
    paddingHorizontal:14,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
})

export default SettingsScreen