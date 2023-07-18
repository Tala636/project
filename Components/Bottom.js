import React from "react";
import { View,Text,Dimensions,TouchableOpacity,Image } from "react-native";

const Wid =Dimensions.get('screen').width;

const BottomTabComponent =()=>{
    return(
        <View style={{flexDirection:'row',height:60,width:Wid,shadowColor:'black',backgroundColor:'white',elevation:5,position:'absolute',bottom:0}}>
        <TouchableOpacity style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-home-40.png')} style={{width:25,height:25}} />
            <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-categorize-64.png')} style={{width:25,height:25}} />
            <Text>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-shopping-cart-48.png')} style={{width:25,height:25}} />
            <Text>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-user-default-64.png')} style={{width:25,height:25}} />
            <Text>Account</Text>
        </TouchableOpacity>



        



        </View>
    )
}

export default BottomTabComponent;