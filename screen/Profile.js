import React from "react";
import { SafeAreaView,View,TouchableOpacity,Text,Image, } from "react-native";
import BottomTabComponent from "../Components/Bottom";
const Proflie=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <View>
            <Text>profile Screen</Text>
          </View>
          <BottomTabComponent navigation={navigation} ScreenName="ProfileScreen"/>
        </SafeAreaView>
    )
}

export default Proflie;