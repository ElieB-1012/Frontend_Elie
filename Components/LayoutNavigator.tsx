import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

const LayoutNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Tab Bar' component={TabNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default LayoutNavigator