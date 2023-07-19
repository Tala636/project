import React from "react"
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import { colors } from "../Constant/theme"
import icon from "../Constant/icon"

const MainHeader = ({navigation,}) => {
    return(
        <View style={styles.container}>
            {/* <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
            <Image source={icon.back_arrow} resizeMode="contain" style={styles.icon}/>
            </TouchableOpacity>
             */}
        </View>
    )
}
export default MainHeader

const styles = StyleSheet.create({
    container:{paddingHorizontal:16,paddingBottom:25,paddingTop:25,
        backgroundColor:colors.primary,height:70},
        icon:{width:25,height:25}
})