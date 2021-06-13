import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignUpContext from "../../contexts/SignUp.context";
import DropDown from "../DropDown";
import Input from "../Input";
import { Formik } from 'formik';
import ImagePicker from "./ImagePicker";

const Step1 = ({ toNextStep }) => {
  const { formState, setFormState } = useContext(SignUpContext);
  const {addInfos,initialState} = useContext(Context);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [selectedItem, setSelectedItem] = useState(0);



  const onSubmit = (values) => {

    values['image'] = clientImage;
    // console.log(values);

    if(isValid(values,errors,setErrors))
    {
     // console.log("--->",{...values,photo:cinImage});
   
    addInfos({...values,image:clientImage});
    toNextStep()
    }
  
    ;
  };



 /* const submit = () => {
    setFormState({
      ...formState,
      lastName,
      firstName,
      phoneNumber,
    });
    console.log(formState);
    toNextStep(formState);
  };*/

  return (
    <Formik
     initialValues={ initialValues }
     onSubmit={values => onSubmit(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View >

                  <View
            style={{
              flexDirection: "row",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <View
              style={{
                width: "45%",
                alignSelf: "center",
              }}
            >
                 <Input 
        label='Nom'
        value={values.firstName}
        handleChange={handleChange('firstName')}
        error={errors.firstName}
        onFocus={()=>setErrors({...errors,firstName:false})}
      />

            </View>

            <View style={{ width: "45%", alignSelf: "center" }}>
 <Input 
        label='Prénom'
        value={values.lastName}
        handleChange={handleChange('lastName')}
        error={errors.lastName}
        onFocus={()=>setErrors({...errors,lastName:false})}
      />            </View>
          </View>

     

      <Input
        keyboardType= 'numeric'
        label='Numero de télephone'
        value={values.phoneNumber}
        error={errors.phoneNumber}
        handleChange={handleChange('phoneNumber')}
        onFocus={()=>setErrors({...errors,phoneNumber:false})}
      />
      <ImagePicker 
        image={clientImage}
        error={errors.image}
        handleChange={setClientImage}
        onFocus={()=>setErrors({...errors,image:false})}
        />
      <ButtonNext onPress={handleSubmit}/>
     </View>
           )}
   </Formik>
  );
};

export default Step1;

const styles = StyleSheet.create({
  nextBtn: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
});
