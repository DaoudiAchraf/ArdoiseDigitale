import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SignUpContext from '../contexts/SignUp.context';
import Input from './Input';

const Step2 = ({toNextStep}) => {

    const {formState,setFormState} = useContext(SignUpContext);

    const [code, setCode] = useState('');

    const submit = () =>{
        setFormState({
            ...formState,
            code
        });
        console.log('2->',formState);
        toNextStep();
    }

    return (
    
             <View style={styles.step_container} >
                 <Text style={{textAlign:"justify",marginBottom:40}}>
                    Nous avons besoin de verifier votre numero
                    de telephone vous allez recevoir un code de verification par SMS
                    sur le numero 123 456 789 .Veuillez entrer ce code dans le champs
                    ci-dessous.
                    Pour renvoyer le code, cliquez ici
                 </Text>
                

                <View>
                    <Text style={{marginBottom:5}}>Code de verification *</Text>
            
                    <Input
                      value = {code}
                      handleChange = {setCode}
                    />
                    <TouchableOpacity onPress={submit} style={styles.nextBtn}>
                        <Text style={{color:"white"}}>Suivant</Text>
                    </TouchableOpacity>
                    
                </View>
               
            
             </View>

    )
}

export default Step2

const styles = StyleSheet.create({
    step_container: {
         width:"100%",
    },
    nextBtn: {
        alignItems: "center",
        backgroundColor: "#324B3E",
        padding: 10,
        marginBottom: "5%",
        marginTop:"4%"
    }
    

})
