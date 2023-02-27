import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
    const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Logout" color="red" onPress={logout} />
    </View>
  )
}

export default SettingsScreen