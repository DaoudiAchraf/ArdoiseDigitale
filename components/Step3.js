import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "./Input";
import ImagePicker from "./ImagePicker";
import SignUpContext from "../contexts/SignUp.context";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { color } from '../constants/Colors';
import ButtonNext from './ButtonNext';
import { Formik } from 'formik';
import { Context } from '../contexts/SignUp.context';
import { isValid } from './Alert';

const Step3 = ({ toNextStep }) => {

  const {initialState,addInfos} = useContext(Context);

  const initialValues = {
    refCIN: initialState["refCIN"],
    expirationDate: initialState["expirationDate"],
    
  }

  const [cinImage , setCinImage] = useState(initialState['photo']);

  const [errors,setErrors] = useState({
    refCIN: false,
    expirationDate: false,
    photo: false
  });

  



  const onSubmit = (values) => {

    values['photo'] = cinImage;

   // console.log(values);

    if(isValid(values,errors,setErrors))
    {
     // console.log("--->",{...values,photo:cinImage});
   
    addInfos({...values,photo:cinImage});
    toNextStep()
    }
  
    ;
  };

  return (
    <Formik
    initialValues={ initialValues }
    onSubmit={values => onSubmit(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View style={styles.stepTwo_container}>
      <View>

        <Input 
          label="Réference de CIN"
          value={values.refCIN}
          handleChange={handleChange('refCIN')}
          error={errors.refCIN}
          onFocus={()=>setErrors({...errors,refCIN:false})}
        />
 
        <Input 
          label="Date d'expiration de CIN "
          value={values.expirationDate}
          handleChange={handleChange('expirationDate')}  
          error={errors.expirationDate}
          onFocus={()=>setErrors({...errors,expirationDate:false})}
        />
        
        

        <ImagePicker 
        image={cinImage}
        error={errors.photo}
        handleChange={setCinImage}
        onFocus={()=>setErrors({...errors,photo:false})}
        />

      
        <ButtonNext onPress={handleSubmit}/>
      </View>
    </View>

)}
</Formik>
  );
};

export default Step3;

const styles = StyleSheet.create({
  stepTwo_container: {
    width: "100%",
  },
  txt:{
    fontSize: RFPercentage(2.9),
    color: 'black',
    padding: 10
  }
});
