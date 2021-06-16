import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDown from "../DropDown";
import Input from "../Input";
import { legalStatus } from '../../constants/Arrays';
import { Context } from '../../contexts/SignUp.context';
import { isValid } from '../Alert';
import ButtonNext from '../ButtonNext';

const Step5 = ({ toNextStep }) => {
  //------------- signUp context----------------------
  const {initialState,addInfos} = useContext(Context);
  //--------------------------------------------------

  const [juridicState, setjuridicState] = useState(initialState["juridicState"]);
  const [numPatent, setnumPatent] = useState(initialState["numPatent"]);

  const [errors,setErrors] = useState({

    numPatent: false
  }
);

  

  const submit = () => {
    if(isValid({numPatent},errors,setErrors))
    {
        addInfos({juridicState,numPatent});
        toNextStep();
    }
 
  };

  return (
    <View>
      <View style={styles.inputsContainer} >

        <DropDown
          items={legalStatus}
          selectedItem={juridicState}
          handleChange={setjuridicState}
        />
    
        <Input 
          label='Numéro de patente'
          value={numPatent}
          handleChange={setnumPatent}
          error={errors.numPatent}
          onFocus={()=>setErrors({...errors,numPatent:false})}
          keyboardType= 'numeric'
        />       
      </View>

      <ButtonNext onPress={submit}/>
    </View>
  );
};

export default Step5;

const styles = StyleSheet.create({
  inputsContainer: {
    marginBottom: '10%'
  },

});
