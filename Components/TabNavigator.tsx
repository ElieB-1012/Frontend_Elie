 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatScreen from '../screens/ChatScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import PostAdd from './PostAdd'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


 const Tab = createBottomTabNavigator()
 
 const TabNavigator = ({route, navigation}) => {
  const {userInfo, logout} = useContext(AuthContext)
  const addNewPost = () => {
    navigation.navigate('PostAdd')
  }
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Feed') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              } else if (route.name === 'Chat') {
                iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } 
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name='Feed' component={HomeScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={addNewPost}>
            <Ionicons name={'add-outline'}
              size={40} color={'gray'} />
          </TouchableOpacity>
        ),
      }
      }/>
            <Tab.Screen name='Chat' component={ChatScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen} options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={logout}>
            <Ionicons name={'log-out-outline'}
              size={40} color={'gray'} />
          </TouchableOpacity>
        ),
      }}/>
        </Tab.Navigator>
    )   
 }

 export default TabNavigator