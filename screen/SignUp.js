import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,TextInput,Dimensions } from "react-native";

const Wid=Dimensions.get('screen').width;

const Signup=(Props)=>{
    return(
        
        <SafeAreaView style={{flex:1,alignItems:'center',marginTop:200}}>
            <View >
                <Text style={{fontSize:28}}>Sign up</Text>
                
            </View>

            <View style={{marginTop:40}}>
            <TextInput 
            placeholder="User name"
            style={{borderWidth:1,width:300,height:45,borderRadius:10,marginBottom:20,padding:10}}/>
            <TextInput 
            placeholder="Email Address"
            style={{borderWidth:1,width:300,height:45,borderRadius:10,marginBottom:20,padding:10}}/>
            <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            style={{borderWidth:1,width:300,height:45,borderRadius:10,marginBottom:20,padding:10}}/>
            <TextInput 
            placeholder="Confirm password"
            secureTextEntry={true}
            style={{borderWidth:1,width:300,height:45,borderRadius:10,padding:10}}/>

            </View>
            <View style={{marginTop:20}}>
                <TouchableOpacity 
                onPress={()=>Props.navigation.navigate('login')}
                style={{backgroundColor:'green',width:Wid/4,height:45,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default Signup;