import { StyleSheet, Text, View ,Image, Pressable, TouchableHighlight, TouchableOpacity} from "react-native";
import React from 'react'
import homeImg from '../asserts/images/home.png'
import { LinearGradient } from "expo-linear-gradient";
import Animated,{ FadeInDown } from "react-native-reanimated";
import { hp, wp } from "../asserts/common";
import { theme } from "../asserts/constants/theme";

const HomeScreen = ({navigation }) => {
  return (
    <View  style={styles.container}>
       
    <Image source={homeImg} resize='cover' style={styles.bgImg}/>
    <Animated.View entering={FadeInDown.duration(700)} style={{flex:1}}>
        <LinearGradient
         colors={["rgba(255,255,255,0)",'rgba(255,255,255,0.5)','white','white']}
            //   colors={["red",'green','pink','white']}
         style={styles.gradient}
         start={{ x: 0.5, y: 0 }}
         end={{ x: 0.5, y: 0.8 }}
        >
         <Animated.View style={styles.contentContainer} >
            <Animated.Text entering={FadeInDown.delay(400).springify()}  
                            style={styles.title}>MD images </Animated.Text>
             <Animated.Text entering={FadeInDown.delay(500).springify()} 
                    style={styles.punchLine}>Every Image Tell a Story</Animated.Text>
             <Animated.View entering={FadeInDown.delay(600).springify()}> 
                  <TouchableHighlight activeOpacity={0.9} style={styles.startButon} 
                  
                   onPress={()=>{
                    navigation.navigate('gallery')}}
                  >
            <Text style={styles.starterText}> Start Explore</Text>

         </TouchableHighlight>
      </Animated.View> 
         </Animated.View>
         </LinearGradient>
    </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
  bgImg:{
    width:wp(100),
    height:hp(100)
  },
  gradient:{
      width:wp(100),
    height:hp(65),
    bottom:0,
    position:"absolute"
  },
  contentContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-end",
    gap:14
  },
  title:{
    fontSize:hp(7),
    color:theme.colors.neutral(0.9),
    fontWeight:theme.fontWeights.bold
  },
  punchLine:{
    fontSize:hp(2),
    letterSpacing:1,
    marginBottom:10,
    fontWeight:theme.fontWeights.medium
  },
  startButon:{
marginBottom:50,
// marginHorizontal:hp(3),
width:wp(90),
backgroundColor:theme.colors.black,
padding:15,
paddingHorizontal:90,
borderRadius:theme.radius.xl,
borderCurve:"continuous"
  },
  starterText:{
    color:theme.colors.white,
    fontSize:hp(3),
    fontWeight:theme.fontWeights.medium,
    letterSpacing:1
  }
});


export default HomeScreen