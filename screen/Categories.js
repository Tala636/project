import React from "react";
import { SafeAreaView,View,TouchableOpacity,Text,Image,FlatList } from "react-native";
import BottomTabComponent from "../Components/Bottom";
import MainHeader from "../Components/MainHeader";

const Items=[
  {name:'Category 1',img:require('../assets/photo/1_birds-nest-plant-beige-pot_53876-134284.png')},
  {name:'Category 2',img:require('../assets/photo/2_cereus-cactus-pot_53876-134292.png')},
  {name:'Category 3',img:require('../assets/photo/3_isometric-plant-3d-rendering_28315-3608.png')},
  
]


const Category=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1,}}>
          <MainHeader navigation={navigation}/>
         <View style={{alignItems:'center',justifyContent:'center'}}>
          <FlatList
             data={Items}
             renderItem={({item,index})=>{
              return(
                <View style={{alignItems:'center',justifyContent:'center',padding:10}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('showItem')}
                style={{height:500,width:350,marginHorizontal:5,backgroundColor:'white',elevation:5,borderRadius:20,marginLeft:10}}
                key={index}>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image style={{height:'100%',width:'100%',borderRadius:20}} source={item.img}/>
                    
                  </View>
                </TouchableOpacity>


                <Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                </View>
              )
             }}

             keyExtractor={(item,index)=>index.toString()}
             horizontal
             showsHorizontalScrollIndicator={false}




          />


          
         </View>
          
         
          <BottomTabComponent navigation={navigation} ScreenName="CategoScreen"/>
        </SafeAreaView>
    )
}

export default Category;