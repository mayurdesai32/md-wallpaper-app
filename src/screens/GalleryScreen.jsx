import { View, Text ,StyleSheet,Pressable, ScrollView,TextInput} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { theme } from '../asserts/constants/theme';
import { hp, wp } from '../asserts/common';
import Categories from '../components/Categories';
import { apiCall } from '../api';
import ImageGrid from '../components/ImageGrid';
const GalleryScreen = () => {

    const [search,setSearch]=useState("")
    const [images,setImages]=useState([])
    const [activeCategory,setActiveCategory]=useState(null)
    const searchRef=useRef(null)
    const {top}= useSafeAreaInsets();
    const paddingTop= top>0? top+10:30;


useEffect(()=>{
fetchImages()
},[])

const fetchImages=async (params={page:1},append=false)=>{
let res=await apiCall(params);

if(res.success && res?.data?.hits){
    if(append){
        setImages([...images,...res.data.hits])
    }else{
         setImages([...res.data.hits])
    }
}

console.log("res",res.data)
}



    const handleChangeCategory=(value)=>{
        setActiveCategory(value)
    }
  return (
    <View style={[styles.container,{paddingTop}]}>
     <View style={styles.header}>
<Pressable>
    <Text style={styles.title}>Pixel</Text>
</Pressable>
<Pressable>
   <FontAwesome6 name="bars-staggered" size={22} color={theme.colors.neutral(0.7)} />
</Pressable>
     </View>

<ScrollView contentContainerStyle={{gap:15,}}>


    <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
            <Feather name='search' size={24} color={theme.colors.neutral(0.4)}/>

        </View>

        <TextInput placeholder='Search for photo...' 
        style={styles.searchInput} 
        value={search}
        ref={searchRef}
        onChangeText={(e)=>setSearch(e)}
        />
  {  search&&   ( <Pressable style={styles.closeIcon} onPress={()=>{setSearch("")}}>

<Ionicons name="close" size={22} color={theme.colors.neutral(0.5)}/>
        </Pressable>)}
    </View>

    
    <View style={styles.categories}>
        <Categories 
        handleChangeCategory={handleChangeCategory} 
        activeCategory={activeCategory}/>
    </View>



    <View>
        {
            images.length>0 &&<ImageGrid images={images}/>
        }
    </View>
</ScrollView>



    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  gap:15,
  },
  categories:{},

  title:{

    fontSize:hp(4),
    fontWeight:theme.fontWeights.semibold,
    color:theme.colors.neutral(0.9)
  },
  header:{
     marginHorizontal:wp(4),
    flexDirection:"row",
 alignItems:"center",
  justifyContent:"space-between"
},
searchBar:{
    marginHorizontal:wp(4),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth:1,
    borderColor:theme.colors.grayBG,
    backgroundColor:theme.colors.white,
    padding:6,
    paddingLeft:10,
    borderRadius:theme.radius.lg},
    searchIcon:{
        padding:8
    },
    searchInput:{
        flex:1,
        borderRadius:theme.radius.sm,
        paddingVertical:10,
        fontSize:hp(1.8)
    },
    closeIcon:{
        backgroundColor:theme.colors.neutral(0.1),
        padding:8,
        borderRadius:theme.radius.sm
    }

});



export default GalleryScreen