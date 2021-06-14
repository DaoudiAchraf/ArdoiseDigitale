import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { h } from "../utils/Size";
import Input from "./Input";
import { phoneId } from "../contexts/SignUp.context";
import authService from '../services/Auth';
import { txt } from '../constants/Strings';
import ButtonNext from './ButtonNext';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from "../constants/Colors";
import TextStep from './TextStep';

const Step2 = ({ toNextStep }) => {

  const [code, setCode] = useState("");


  const onSubmit = async() => {

   // console.log('enterrr')
    //console.log('id: ',phoneId, 'verif: ',code);

    // const res =  await authService.sendVerficationCode(phoneId,code);
    // const {isValid} = res.data;

   // console.log('result',isValid);

    toNextStep();
  };

  return (

    <View style={styles.container}>

     <TextStep>
     {txt.SMS_VERIFICATION_CODE}
     </TextStep>
     
      <View>

    <View style={{marginBottom:'10%'}}>

     <Text style={{fontSize:RFValue(15),color:color.INFO_TEXT}}>
          Code de Vérification :
      </Text>

       <Input keyboardType='numeric'value={code} handleChange={setCode} />
    </View>
     

      {/* <View style={{flexDirection:'row',width:"100%",justifyContent:"space-between"}}>
        <Input keyboardType='numeric' maxLength={1} value={code} handleChange={setCode} />
        <Input keyboardType='numeric' maxLength={1} value={code} handleChange={setCode} />
        <Input keyboardType='numeric' maxLength={1} value={code} handleChange={setCode} />
        <Input keyboardType='numeric' maxLength={1} value={code} handleChange={setCode} />
        <Input keyboardType='numeric' maxLength={1} value={code} handleChange={setCode} />
        <Input keyboardType='numeric' maxLength={1} value={code} handleChange={setCode} />
      </View> */}
        
        
        <ButtonNext onPress={onSubmit}/>
      </View>
    </View>

  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  }
});
