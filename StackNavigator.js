import React from 'react'
import { Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import {Store} from './Store';
import Tw from 'twrnc';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { Ionicons } from '@expo/vector-icons'; 

const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator>
            
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}></Stack.Screen>  
            <Stack.Screen name='Home' component={HomeScreen} 
            options={{
                headerTitle: () => (
                    <View style={Tw`ml-20`}>
                        <Text style={Tw`text-16px font-bold `}>Product</Text>
                    </View>
                ),
            }}
            ></Stack.Screen>
            <Stack.Screen name='ProductDetails' component={ProductScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Cart' component={CartScreen}
              options={{
                headerTitle: () => (
                    <View style={Tw`ml-20 flex-row items-center `}>
                        <Text style={Tw`text-[#FFFFFF]  text-16px font-semibold `}> Cart</Text>
                        <Ionicons style={Tw`ml-30`} name="refresh" size={24} color="white" />
                    </View>
                ),
                headerStyle: {
                  backgroundColor: '#741c73', 
                },
                headerTintColor:"#FFFFFF"
            }}
            ></Stack.Screen>
        </Stack.Navigator>
      </Provider>  
    </NavigationContainer>
  )
}

export default StackNavigator;