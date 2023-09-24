import { View, Text ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import { Feather } from '@expo/vector-icons'; 
import { useEffect,useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Product from '../Components/Product';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation=useNavigation();
  const TABS_URL = process.env.TABS_URL;
  console.log(TABS_URL);
  const [tabs,setTabs]=useState([]);
  const [selectedTab , setSelectedTab]=useState('electronics');
  const [products,setProducts]=useState([]);

  // use effect for products , dependent on tabs 
  useEffect(() => {
    const getProducts =async ()=>{
      const response = await fetch(`https://fakestoreapi.com/products/category/${selectedTab}`);
      const data = await response.json();
      if (response.ok){
        setProducts(data);
      }
    };

    getProducts();
  }, [selectedTab]);

  
  // tabs 
  useEffect(() => {
    const fetchTabs =async ()=>{
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      if (response.ok){
        // console.log(data);
        setTabs(data);
      }
    };

    fetchTabs();
  }, []);
  
  function toCamelCase(inputString) {
    return inputString
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/ (.)/g, function(match, group1) {
      return group1.toUpperCase();
    })
    .replace(/^[a-z]/, function(match) {
      return match.toUpperCase();
    });
  }
  

  // console.log(products);
  return (
    <SafeAreaView style={Tw`h-100% bg-[#E7e8e8]`}>
      
      {/* nav */}
      <View style={Tw`flex-row p-2`}>
        <Feather style={Tw`flex-1`} name="menu" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <Feather onPress={()=>navigation.navigate('Cart')} name="shopping-bag" size={24} color="black" />
      </View>

      {/* title */}
      <View style={Tw`left-16px`}>
        <Text style={[Tw`text-40px `, {fontWeight:"300"}]}>Find Your Style</Text>
      </View>

      {/* slider for tabs */}
      <View style={Tw`h-60px`}>
      <ScrollView
        style={[Tw``]}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
            paddingTop: 10 , 
            paddingHorizontal: 15,
        }}
      >
        {tabs.map(item=>{
          return  (
            <TouchableOpacity key={item} onPress={()=>setSelectedTab(item)} style={[Tw`relative h-35px mx-1 items-center justify-center rounded-10px`,selectedTab === item ? {backgroundColor:"black"}:{backgroundColor:"#FFFFFF"} ]}>
              <Text style={[Tw`mx-2`,selectedTab === item ? {color:"#FFFFFF"}:{backgroundColor:"#FFFFFF"}]}>{toCamelCase(item) } </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      </View>

      {/* View for products */}
      <ScrollView >
        <View style={Tw`flex-row flex-wrap`}>
        {products.map(item=>{
          return <Product key={item.id} item={item} ></Product>
        })}
        </View>
      </ScrollView>



    </SafeAreaView> 
  )
}

export default HomeScreen