import React from "react";
import {} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Login from "./screen/Login";
import Signup from "./screen/SignUp";
import Home from "./screen/Home";
import Category from "./screen/Categories";
import Cart from "./screen/Cart";
import Proflie from "./screen/Profile";
import ShowItems from "./screen/Items";

const stack=createNativeStackNavigator();

const App=()=>{
    return(
     <NavigationContainer>
     <stack.Navigator screenOptions={{headerShown:false}}>
       <stack.Screen name="login" component={Login}/>
       <stack.Screen name="signup" component={Signup}/>
       <stack.Screen name="home" component={Home}/>
       <stack.Screen name="category" component={Category}/>
       <stack.Screen name="cart" component={Cart}/>
       <stack.Screen name="profile" component={Proflie}/>
       <stack.Screen name="showItem" component={ShowItems}/>
       
     </stack.Navigator>
        
     </NavigationContainer>
    )
}

export default App;