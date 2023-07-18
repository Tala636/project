import React from "react";
import {} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Login from "./screen/Login";
import Signup from "./screen/SignUp";
import Home from "./screen/Home";


const stack=createNativeStackNavigator();

const App=()=>{
    return(
     <NavigationContainer>
     <stack.Navigator screenOptions={{headerShown:false}}>
       <stack.Screen name="login" component={Login}/>
       <stack.Screen name="signup" component={Signup}/>
       <stack.Screen name="home" component={Home}/>
     </stack.Navigator>
        
     </NavigationContainer>
    )
}

export default App;