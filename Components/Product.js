import { View, Text,Image } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Product = ({item}) => {
  const navigation=useNavigation();  
  const addToCart=()=>{
    navigation.navigate('ProductDetails',{productItem: item});
  };

  console.log("dsds  ds ",item.id);

  return (
    <View style={Tw`w-50% h-350px items-center p-5`}>
        <Image style={[Tw`h-60%  bg-[#FFFFFF] w-80%`,{resizeMode:"contain"}]} source={{uri:item.image}}></Image>
        <Text style={Tw`mt-1 text-15px`}>${item.price}</Text>
        <Text style={[Tw`w-100%`,{maxHeight:100,flex:1}]}>{item.title}</Text>
        <TouchableOpacity onPress={()=>addToCart()}  style={Tw`mt-2 bg-black w-100% h-25px items-center jusitfy-center rounded-6px `}>
            <Text style={Tw`text-16px text-[#FFFFFF]`}>Add To Cart</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Product;