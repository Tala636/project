import React from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions  } from "react-native";
import BackHeader from "../Components/BackHeader"

 const Wid=Dimensions.get('screen').width;

const plant=[ {name:'Pant1',
prcie:1500,
img: require('../assets/photo/1_birds-nest-plant-beige-pot_53876-134284.png')},
{name:'Pant2',
prcie:1500,
img: require('../assets/photo/2_cereus-cactus-pot_53876-134292.png')},

{name:'Pant3',
prcie:1500,
img: require('../assets/photo/3_isometric-plant-3d-rendering_28315-3608.png')},

{name:'Pant4',
prcie:1500,
img: require('../assets/photo/4_monstera-deliciosa-plant-pot_53876-133119.png')},
{name:'Pant5',
prcie:1500,
img: require('../assets/photo/5_monstera-plant-black-pot_53876-134313.png')},
{name:'Pant6',
prcie:1500,
img: require('../assets/photo/6_peace-lily-plant-terracotta-pot-home-decor-object_53876-146302.png')},
{name:'Pant7',
prcie:1500,
img: require('../assets/photo/7_plant-pot-3d-rendering_252032-38.png')},
{name:'Pant8',
prcie:1500,
img: require('../assets/photo/8_ruffled-leaf-palm-plant-rattan-basket_53876-133122.png')},

]

const ShowItems=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
          <BackHeader navigation={navigation}/>
           <FlatList 
           style={{}}
            data={plant}
            numColumns={2}
            renderItem={({item,index})=>{
                return(
                   
                       <View>
                         <TouchableOpacity key={index} style={{}}>
                          <Image source={item.img}/>
                          <View style={{flexDirection:'row'}}>
                            <Text>{item.name}</Text>
                            <Text>{item.prcie}</Text>
                          </View>
                        </TouchableOpacity>
                       </View>
                  
                )
            }}
            keyExtractor={(item,index)=>index.toLocaleString()}
            showsVerticalScrollIndicator={false}

           />
         
        </SafeAreaView>
    )
}

export default ShowItems;