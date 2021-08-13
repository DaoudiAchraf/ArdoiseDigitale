import React, { useState,useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDown from "../DropDown";
import { traderAcitvity } from "../../constants/Arrays";
import Geo_autocomplete from '../Geo_autocomplete';
import ButtonNext from '../ButtonNext';
import { Context } from '../../contexts/SignUp.context';
import { isValid } from '../Alert';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Step4 = ({ toNextStep ,navigation}) => {

  const {initialState,addInfos} = useContext(Context);
 // console.log("55",initialState);
  //-------------------States-----------------------------
  const [activityDomain, setActivityDomain] = useState(initialState['activityDomain']);
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
      addInfos({activityDomain,address:JSON.stringify(address)});
      toNextStep();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>  
        <DropDown
          items={traderAcitvity}
          selectedItem={activityDomain}
          handleChange={setActivityDomain}
        />

    <View style={{flexDirection: 'row',alignItems:'center'}}>
      <View style={{flex:1}}>
      <Geo_autocomplete 
         setAddress={setAddress}
         error={errors.address}
         setErrors={setErrors}
       />
      </View>

        <TouchableOpacity onPress={()=>navigation.navigate('MapMarker')}>
          <MaterialCommunityIcons name="map-marker-plus-outline" size={24} color="black" />
        </TouchableOpacity>
       
    </View>

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
