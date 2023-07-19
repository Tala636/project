import React,{useState} from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Image, FlatList, StyleSheet } from "react-native";
import BottomTabComponent from "../Components/Bottom";
import MainHeader from "../Components/MainHeader";
import { colors } from "../Constant/theme";
import icon from "../Constant/icon";

const Cart = ({ navigation, route }) => {

  const [quantity,setQuantity] = useState(1)

  const data = [
    {
      name: 'Pant1',
      prcie: 1500,
      img: require('../assets/photo/1_birds-nest-plant-beige-pot_53876-134284.png'),
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"
    },
    {
      name: 'Pant2',
      prcie: 1200,
      img: require('../assets/photo/2_cereus-cactus-pot_53876-134292.png'),
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"

    },

    {
      name: 'Pant3',
      prcie: 1300,
      img: require('../assets/photo/3_isometric-plant-3d-rendering_28315-3608.png'),
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"

    },

    {
      name: 'Pant4',
      prcie: 1600,
      img: require('../assets/photo/4_monstera-deliciosa-plant-pot_53876-133119.png'),
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"

    },
    {
      name: 'Pant5',
      prcie: 1500,
      img: require('../assets/photo/4_monstera-deliciosa-plant-pot_53876-133119.png'),
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"

    },
  ]


  const handlePlus = ({item}) => {
    
  }


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <MainHeader navigation={navigation} />

      <FlatList
        data={data}
        contentContainerStyle={{ padding: 20, paddingBottom: 80 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.container}
            >
              <View style={styles.content}>
                <Image source={item.img} style={styles.img} />
              </View>
              <View style={styles.content1}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.prcie}</Text>
                </View>
                <View style={styles.bodyContent1}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Cart Detail',{
                      data:item
                    })}
                    style={styles.btnConatiner}
                  >
                    <Text style={[styles.price,{color:colors.primary}]}>Add To Cart</Text>
                  </TouchableOpacity>
                  
                </View>
              </View>

            </TouchableOpacity>
          )
        }}
      />
      <BottomTabComponent navigation={navigation} ScreenName="CartScreen" />
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: { borderRadius: 15, backgroundColor: colors.primary, marginTop: 10, height: 200 },
  content: { borderTopRightRadius: 15, borderTopLeftRadius: 15, width: '100%', height: '70%' },
  img: {
    width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  content1: {
    justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 18,
    paddingVertical: 8,alignItems:'center'
  },
  name: { fontSize: 18, fontWeight: '700', color: colors.white },
  price: { fontSize: 14, fontWeight: '400', color: colors.white },
  btnConatiner: {
    borderRadius: 15, backgroundColor: colors.white, width: 100,
    marginHorizontal: 5, height: 35, justifyContent: 'center', alignItems: 'center'
  },
  icon: { width: 20, height: 20, tintColor: colors.primary },
  bodyContent1: { flexDirection: 'row' }
})