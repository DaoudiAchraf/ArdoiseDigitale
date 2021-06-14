import React, { useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonNext from './ButtonNext';
import {txt} from '../constants/Strings';
import { RFValue } from 'react-native-responsive-fontsize';

import { Context } from "../contexts/SignUp.context";
import TextStep from './TextStep';

const FinalStep = ({toNextStep}) => {

const {signUp} = useContext(Context);

  const submit = ()=>{

     signUp();
     toNextStep();
  }



  return (
    <View >
      <TextStep>
        {txt.SIGNUP_FINAL_STEP}
      </TextStep>

      <ButtonNext title="Envoyer" onPress={submit}/>

    </View>
  );
};

export default FinalStep;

const styles = StyleSheet.create({
  textStyle:{
    textAlign: 'justify',
    marginTop: '7%',
    fontSize: RFValue(18)
  }
});
