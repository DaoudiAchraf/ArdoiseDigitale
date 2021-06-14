import React, { useContext, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../components/Input";
import ButtonNext from '../components/ButtonNext';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import { h, totalSize } from "../utils/Size";
import {isValidWithoutAlert, setAlert} from '../components/Alert';
import {TEXT_ERROR} from '../constants/Strings';
import authService from '../services/Auth';

import { Context } from '../contexts/Auth.context';

const SignIn = ({ navigation }) => {

  //----------------------------
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [errors,setErrors] = useState({
    username: false,
    password: false,
    
  });
  //-----------------------
  const {signIn}= useContext(Context);


  const submit = async() => {
    const values = {username,password};
    console.log("->", username, password);
    
    if(isValidWithoutAlert(values,errors,setErrors))
    {
      const v = {userName: "AA529",password:"uwNro2kONP"};
      signIn(v);

    }
    else if (errors.username && errors.password)
       setAlert(TEXT_ERROR.empty_inputs_signIn);
    else if (errors.username)
       setAlert(TEXT_ERROR.empty_input_username);
    else
       setAlert(TEXT_ERROR.empty_input_password);
 
 


  };

  return (  
  <ImageBackground source={require('../assets/images/BG.png')} style={styles.image} >
    <View style={styles.signIn_container}>
     
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "70%" }}
          source={require("../assets/images/logo-light.png")}
        />
      </View>

      <View style={styles.signIn__Box}>


        <Input
          mode='box'
          styleBox={{...styles.InputStyle,marginBottom:h(2)}}
          value={username}
          handleChange={setUsername}
          placeholder="Nom d'utilisateur"
          error={errors.username}
          onFocus={()=>setErrors({...errors,username:false})}
        />

        <Input
          mode='box'
          styleBox={styles.InputStyle}
          value={password}
          handleChange={setPassword}
          placeholder="••••••••••••••"
          secureTextEntry
          error={errors.password}
          onFocus={()=>setErrors({...errors,password:false})}
        />

    <ButtonNext
      title="Se connecter" 
      onPress={() => submit()}
      style={styles.btnStyle}
    />
     
      </View>

      <TouchableOpacity  onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.account_Txt}>
          Créer un compte
        </Text>
      </TouchableOpacity>

  
   
    </View>  
     </ImageBackground>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  signIn_container: {
    padding: totalSize(5),
    paddingTop: h(5),
    justifyContent: "flex-end",

    flex: 1,
  },
  signIn__Box: {
    padding: totalSize(1.5),
    backgroundColor: "white",
    marginBottom: h(4),
    borderRadius:5
  },
  InputStyle:{
    height: h(8)
  },
  account_Txt: {
    textAlign: "center",
    color: "white",
    fontSize: RFValue(17),
  },
  btnStyle:{
    marginBottom: 0,
    marginTop: h(2)
  }, 
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
