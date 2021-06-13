import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { h } from "../utils/Size";
import Input from "./Input";
import { phoneId } from "../contexts/SignUp.context";
import authService from '../services/Auth';
import { txt } from '../constants/Strings';
import ButtonNext from './ButtonNext';


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
    
      <Text style={{ textAlign: "justify", marginBottom: h(6)}}>
          {txt.SMS_VERIFICATION_CODE}
      </Text>

      <View>

        <Input label="Code de verification" value={code} handleChange={setCode} />
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
