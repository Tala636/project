import React,{useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Image, ScrollView, TouchableOpacity } from "react-native";
import BackHeader from "../Components/BackHeader"
import { colors } from "../Constant/theme";
import icon from "../Constant/icon";

const CartDetail = ({ route, navigation }) => {
    const { data } = route.params

    const [quantity,setQuantity] = useState(1)

    let price = data.prcie * quantity

    console.log("price",price)

    return (
        <SafeAreaView style={styles.container}>
            <BackHeader navigation={navigation} />
            <ScrollView>
                <Image source={data.img} style={styles.img} />
                <View style={styles.content}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.body}>{data.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.content1}>
                <View>
                    <View style={styles.bodyContent1}>
                        <Text style={styles.text1}>Quantity :</Text>
                        <Text style={styles.text2}>{quantity}</Text>
                    </View>
                    <View style={styles.bodyContent1}>
                        <Text style={styles.text1}>price</Text>
                        <Text style={styles.text2}>{price}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity 
                    onPress={() =>{setQuantity(quantity+1)}}
                    style={styles.btnContainer}>
                        <Image source={icon.plus} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                                        disabled={quantity ==1}

                    onPress={() =>{setQuantity(quantity-1)}}

                    style={styles.btnContainer}>
                        <Image source={icon.minus} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default CartDetail

const styles = StyleSheet.create({
    container: { flex: 1 },
    img: { width: '100%', height: 300 },
    content: { padding: 20 },
    content1: {
        borderTopLeftRadius: 30, padding: 10, paddingVertical: 20,
        borderTopRightRadius: 30, elevation: 5, shadowColor: colors.primary, shadowOffset: 5,
        flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'
    },
    bodyContent1: { flexDirection: 'row' },
    text1: { fontSize: 14, fontWeight: '400',color:colors.primary},
    text2: { fontSize: 17, fontWeight: '800',color:'black',marginLeft:10 },
    btnContainer: {
        width: 35, height: 35, borderRadius: 50, backgroundColor: colors.primary,
        justifyContent: 'center', alignItems: 'center', marginHorizontal: 5
    },
    icon: { width: 20, height: 20, tintColor:colors.white},
    title:{fontSize:18,fontWeight:'600',color:colors.primary},
    body:{fontSize:14,fontWeight:'400',color:'black',textAlign:'justify',marginTop:10}
})