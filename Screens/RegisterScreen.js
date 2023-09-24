import {Alert,TextInput, View, Text ,Pressable,KeyboardAvoidingView} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';
import {addUser} from '../Redux/UserSlice';

const RegisterScreen = () => {
  const navigation=useNavigation(); 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [Repassword,setRepassword]=useState('');
  const Dispatch = useDispatch();
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  const handleRegister=()=>{
    if(password===Repassword){
      const idNum = getRandomNumber();
      Dispatch(addUser({ id: idNum , email: email, password: password }));
      navigation.navigate('Login');
    }else{
      Alert.alert("Invalid Credentials","Renter your password to confirm");
    }

  }
  return (
    <View style={{flex:1, backgroundColor:"white", padding:10, alignItems:"center"}}>
      
      <KeyboardAvoidingView>
        
        <View style={{ marginTop:100 , justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#4A55A2",fontSize:17,fontWeight:"600"}}> Register</Text>
          <Text style={{fontSize:17,fontWeight:"600", marginTop:15}} > Regsiter To Your Account </Text>
        </View>

        <View style={{ marginTop:50 , }}>
          
          
          <View>
            <Text style={{fontWeight:"600" , fontSize:18 , color:"black" }}> Email </Text>
            <TextInput placeholder='  enter your email'  placeholderTextColor={"gray"} 
              style={{borderBottomColor:"gray" , borderBottomWidth:1 , fontSize: email ? 18 : 18 , marginVertical:10 , width:300}}
              value={email}
              onChangeText={(text)=> setEmail(text)}
              
            ></TextInput>         
          </View>
          
          <View style={{marginTop:15}}>
            <Text style={{fontWeight:"600" , fontSize:18 , color:"black" }}> Password </Text>
            <TextInput placeholder='  password'  placeholderTextColor={"gray"} 
              style={{borderBottomColor:"gray" , borderBottomWidth:1 , fontSize: password ? 18 : 18 , marginVertical:10 , width:300}}
              value={password}
              onChangeText={(text)=> setPassword(text)}
              secureTextEntry={true}
            ></TextInput>         
          </View>

          <View>
            <Text style={{fontWeight:"600" , fontSize:18 , color:"black" }}> Confirm Password </Text>
            <TextInput placeholder='  enter your password again'  placeholderTextColor={"gray"} 
              style={{borderBottomColor:"gray" , borderBottomWidth:1 , fontSize: email ? 18 : 18 , marginVertical:10 , width:300}}
              value={Repassword}
              onChangeText={(text)=> setRepassword(text)}
              secureTextEntry={true}
            ></TextInput>         
          </View>

          <Pressable onPress={handleRegister} style={{width:200,borderRadius:6, backgroundColor:"#4A55A2" , padding:15, marginTop:50, marginLeft:"auto", marginRight:"auto"}}>
            <Text style={{color:"white", fontSize:16, fontWeight:"bold", textAlign:"center"}}> Register </Text>
          </Pressable>
          <Pressable onPress={()=> navigation.goBack()} style={{marginTop:15}}>
            <Text style={{textAlign:"center" , color:"gray", fontSize:16}}> Already have an Account ? Sign In </Text>
          </Pressable>
        </View>

      </KeyboardAvoidingView>
      
    </View>
  )
}

export default RegisterScreen