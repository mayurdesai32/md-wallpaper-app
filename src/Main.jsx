import { View, Text ,StatusBar} from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from './screens/GalleryScreen';
const Main = () => {
    
const Stack = createNativeStackNavigator();
  return (

 <NavigationContainer>
       <StatusBar style="auto" /> 
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
             <Stack.Group>  
                  <Stack.Screen name="Home" component={HomeScreen}  />
                        <Stack.Screen name="gallery" component={GalleryScreen}  />
                  
             </Stack.Group>
    
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Main