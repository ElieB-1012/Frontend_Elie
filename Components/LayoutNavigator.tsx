import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostAdd from './PostAdd'
import TabNavigator from './TabNavigator'
import EditPost from '../screens/EditPost'

const Stack = createNativeStackNavigator()

const LayoutNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Tab Bar' component={TabNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name='PostAdd' component={PostAdd} options={{ headerShown: false }}/>
            <Stack.Screen name='EditPost' component={EditPost} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default LayoutNavigator