// screen for product details 

import {Image, View, Text ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import { useEffect,useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux';
import { addCartItem } from '../Redux/CartSlice';
import { SelectUserId } from '../Redux/LoginSlice';

const ProductScreen = () => {
  const route = useRoute();
  const { productItem } = route.params;
  const [product,setProduct]=useState([]);
  const Dispatch = useDispatch();
  const userId=useSelector(SelectUserId);

  useEffect(() => {
    const getProdDetails= async ()=>{
      const resp = await fetch(`https://fakestoreapi.com/products/${productItem.id}`);
      const data = await resp.json();
      if(resp.ok){
        setProduct(data);
      }
    };

    getProdDetails();
  }, []);

  const addToCart=()=>{
    Dispatch(addCartItem({ userId: userId  , productId: product.id , title: product.title , image : product.image ,price: product.price }))
    navigation.navigate('Cart');
  };


  
  console.log(productItem);
  const navigation=useNavigation();
  return (
    <SafeAreaView style={Tw`h-100% bg-[#E7e8e8]`}>

      <View style={Tw`h-75% mt-20 bg-[#FFFFFF] items-center justify-center`}>
        <View style={Tw`h-30px w-30px z-50 absolute left-20px top-20px `}>
          <AntDesign onPress={()=>navigation.goBack()} style={Tw`shadow-lg `} name="arrowleft" size={24} color="black" />
        </View>
        <View style={Tw`h-30px w-30px z-50 absolute right-20px top-20px `}>
          <Fontisto onPress={()=>navigation.navigate('Cart')} name="shopping-bag-1" size={24} color="black" />
        </View>
        <Image style={[Tw`h-60% w-60%`,{resizeMode:"contain"}]} source={{uri:product.image}}></Image>
        
        <View style={Tw`mr-10 mt-5`}>
          <Text style={{maxWidth:300, textAlign:"left"}}>{product.title}</Text>
          <Text style={Tw`text-20px font-bold`}>${product.price}</Text>
        </View>

        
          <View style={[Tw`h-30px w-30px z-50 absolute right-10px bottom-50px rounded-50px border items-center justify-center `,{borderColor:"gray"}]}>
            <Ionicons name="share-social-outline" size={24} color="black" />
          </View>
          <View style={[Tw`h-30px w-30px z-50 absolute right-10px bottom-10px rounded-50px border items-center justify-center `,{borderColor:"gray"}]}>
            <Ionicons name="heart-sharp" size={24} color="black" />
          </View>
          
        
        
      </View>

      <View style={Tw`h-5% justify-center items-center flex-row`}>
        <Text style={[Tw`right-2px absolute text-[#54b254]`,{}]}>In Stock </Text>
      </View>

      <View style={Tw`bg-[#FFFFFF] h-20% flex-row p-5`}>
        <TouchableOpacity onPress={addToCart} style={Tw`bg-[#932509] h-40px  w-150px mx-2  items-center justify-center `}>
          <Text style={Tw`text-[#FFFFFF]`}>ADD TO CART</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Tw`h-40px bg-black w-150px mx-2 items-center justify-center  `}> 
          <Text style={Tw`text-[#FFFFFF]`}>BUY NOW</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default ProductScreen