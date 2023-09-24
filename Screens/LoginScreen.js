import {Alert,Pressable,TextInput,KeyboardAvoidingView, View, Text } from 'react-native'
import React,{useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';
import { setUserId } from '../Redux/LoginSlice';


const LoginScreen = () => {
  const [email,setEmail]=useState('');
  const [password , setPassword] = useState('');
  const navigation = useNavigation();
  const users = useSelector(state => state.user.users);
  console.log("These are the users " , users);
  const Dispatch=useDispatch();


  const Login=()=>{
    users.map((item)=>{
      if(email===item.email){
        if(password===item.password){
          console.log(item.id);
          Dispatch(setUserId(item.id));
          navigation.navigate('Home');
        }else{
          Alert.alert("Invalid Credentials","Invalid User Email");
        }
      }
      else{
        Alert.alert("Invalid Credentials","Invalid User Email");
      }
    });

  }

  const handleEmailChange = (text) => {
    // Remove leading and trailing spaces using trim()
    const cleanedEmail = text.trim();
    setEmail(cleanedEmail);
  };

  return (
    <View style={{flex:1, backgroundColor:"white", padding:10, alignItems:"center"}}>
      <KeyboardAvoidingView>
        
        <View style={{ marginTop:100 , justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#4A55A2",fontSize:17,fontWeight:"600"}}> Sign In</Text>
          <Text style={{fontSize:17,fontWeight:"600", marginTop:15}} > Sign In To Your Account </Text>
        </View>

        <View style={{ marginTop:50 , }}>
          <View>
            <Text style={{fontWeight:"600" , fontSize:18 , color:"black" }}> Email </Text>
            <TextInput placeholder='  enter your email'  placeholderTextColor={"gray"} 
              style={{borderBottomColor:"gray" , borderBottomWidth:1 , fontSize: email ? 18 : 18 , marginVertical:10 , width:300}}
              value={email}
              onChangeText={(text)=> handleEmailChange(text)}
              
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

          <Pressable onPress={Login} style={{width:200,borderRadius:6, backgroundColor:"#4A55A2" , padding:15, marginTop:50, marginLeft:"auto", marginRight:"auto"}}>
            <Text style={{color:"white", fontSize:16, fontWeight:"bold", textAlign:"center"}}> Login </Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('Register')} style={{marginTop:15}}>
            <Text style={{textAlign:"center" , color:"gray", fontSize:16}}> Dont have an Account ? Sign Up </Text>
          </Pressable>
        </View>

      </KeyboardAvoidingView>
      
    </View>
  )
}

export default LoginScreen