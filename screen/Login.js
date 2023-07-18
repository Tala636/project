import React from "react";
import { SafeAreaView,Text,TextInput,TouchableOpacity,View } from "react-native";


const Login=(Props)=>{
    return(
        <SafeAreaView style={{flex:1,padding:20,justifyContent:'center',backgroundColor:'#90EE90'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Welcome</Text>
                <Text>Sign in to continue!</Text>
            </View>

            <View style={{marginTop:100}}>
                <Text>Email ID</Text>
                <TextInput 
                placeholder="Enter your email"
                style={{borderWidth:1,height:45,borderRadius:10,padding:5}}/>
            </View>

            <View style={{marginTop:20}}>
                <Text>Password</Text>
                <TextInput 
                secureTextEntry={true}
                placeholder="Enter your password"
                style={{borderWidth:1,height:45,borderRadius:10,padding:5}}/>
            </View>

            <TouchableOpacity 
              onPress={()=>Props.navigation.navigate('home')}
            style={{backgroundColor:'blue',alignItems:'center',marginTop:20,height:45,justifyContent:'center',borderRadius:10}}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Text style={{marginRight:5}}>I am a new user.</Text>
                <TouchableOpacity 
                onPress={()=>Props.navigation.navigate('signup')}
                >
                    <Text style={{fontWeight:'bold',color:'blue'}}>Sign up</Text>
                    <View style={{backgroundColor:'blue',height:1,}}/>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Login