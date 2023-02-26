import { FC } from "react";
import { View, Text } from "react-native";

const InfoScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
    // const itemId = JSON.stringify(route.params.itemId)
    // const name = JSON.stringify(route.params.name)
    // useEffect(() => {
    //   console.log('useeffects')
    //   navigation.setOptions({
    //     title: "my new title",
    //   })
    // })
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
      {/* <Text>id: {itemId}</Text>
      <Text>{name}</Text> */}
  
      {/* <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home', {newPostId:'6666'})}/> */}
    </View>
    ); 
  }

  export default InfoScreen