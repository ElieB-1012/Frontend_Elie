import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import LayoutNavigator from './LayoutNavigator'

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo, splashLoading} = useContext(AuthContext)
    console.log("navigation", userInfo._id)

  return (
    <NavigationContainer>
        <Stack.Navigator >
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo.refreshToken ? (
                <Stack.Screen name="Layout" component={LayoutNavigator} options={{headerShown:false}}/>
            ) 
            : (
                <>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
                </>

            )}

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation