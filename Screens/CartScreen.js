import {Image, View, Text ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import { useEffect,useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';
import { SelectUserId } from '../Redux/LoginSlice';
import { selectCartItems } from '../Redux/CartSlice';
import { selectTotalPriceForUser } from '../Redux/CartSlice';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  
  const userId=useSelector(SelectUserId);
  const cartItems=useSelector(selectCartItems);
  const [cartItemsToDisplay,setCartItemsToDisplay]=useState([]);
  const total =useSelector(selectTotalPriceForUser(userId));
  const [heartClicked,setHeartClicked]=useState(false);

  console.log(userId);

  
  useEffect(()=>{
    const getCartItems=()=>{
    cartItems.map((item)=>{
      const filteredCartItems = cartItems.filter((item) => item.userId === userId);
      setCartItemsToDisplay(filteredCartItems);
    });
    }

    getCartItems();
  },[]);

  

  console.log(cartItemsToDisplay);
  return (
    <SafeAreaView style={Tw`h-100% bg-[#E7e8e8]`}>
      <View style={Tw`h-50px w-100%  p-2 flex-row`}>
        <Text style={Tw`flex-1`}></Text>
        <Text style={Tw`mr-2`}>Total Price : ${total}</Text>
      </View>

      <ScrollView style={Tw` `}>
        {cartItemsToDisplay.map((item)=>{
          return(
          <View key={item.id} style={Tw` flex-row my-2 shadow-lg  h-200px w-100% bg-[#FFFFFF]`}>
            <Image style={[Tw`h-200px  items-center justify-center w-40%`,{resizeMode:'contain'}]} source={{uri:item.image}}></Image>
            
            <View style={Tw`p-3` }>
              <Text style={[Tw`text-16px font-bold`,{maxWidth:200,maxHeight:20}]}>{item.title}</Text>
              <Text>${item.price}</Text>
              
              <View style={Tw`flex-row absolute bottom-20px `}>
                <TouchableOpacity><EvilIcons name="minus" size={24} color="black" /></TouchableOpacity>
                <Text> 1 </Text>
                <TouchableOpacity><EvilIcons name="plus" size={24} color="black" /></TouchableOpacity>
              </View>

            </View>

            <FontAwesome style={Tw`top-10px absolute right-10px`} onClick={()=>setHeartClicked(!heartClicked)} name={heartClicked ? "heart": "heart-o"} size={24} color="red" />
            <AntDesign  style={Tw`bottom-10px absolute right-10px`}  name="delete" size={24} color="black" />
          </View>
          )
        })}

        

      </ScrollView>

        <View style={Tw`items-center justify-center`}>
        <TouchableOpacity style={Tw ` shadow-lg w-95% bg-black h-60px absolute z-50 bottom-1px items-center justify-center`}>
          <Text style={Tw`text-18px font-bold text-[#FFFFFF]`}>PROCEED TO CHECKOUT</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default CartScreen