import React, { useState,useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDown from "../DropDown";
import { traderAcitvity } from "../../constants/Arrays";
import Geo_autocomplete from '../Geo_autocomplete';
import ButtonNext from '../ButtonNext';
import { Context } from '../../contexts/SignUp.context';
import { isValid } from '../Alert';

const Step4 = ({ toNextStep }) => {

  const {initialState,addInfos} = useContext(Context);
 // console.log("55",initialState);
  //-------------------States-----------------------------
  const [activitySector, setActivitySector] = useState(initialState['activitySector']);
  const [address ,setAddress] = useState(initialState['address']);
  
  const [errors,setErrors] = useState({
      address: false
    }
  );
  //-----------------------------------------------------



  

  const onSubmit = () => {
    if(isValid({address},errors,setErrors))
    {
      console.log('adrress',{...address});
      console.log('tpee', typeof({...address}));
      console.log("--------------------------");
      const k = JSON.stringify(address);
      console.log("string",k);
      console.log("parsed",JSON.parse(k));
      console.log("--------------------------");
      addInfos({address:JSON.stringify(address)});
      toNextStep();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>  
        <DropDown
          items={traderAcitvity}
          activitySector={activitySector}
          handleChange={setActivitySector}
        />

       <Geo_autocomplete 
         setAddress={setAddress}
         error={errors.address}
         setErrors={setErrors}
       />
      </View>
       <ButtonNext onPress={onSubmit} />
      
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputsContainer:{
    marginBottom: '5%'
  }
});
