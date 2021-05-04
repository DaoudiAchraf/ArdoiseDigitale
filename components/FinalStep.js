import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SignUpContext from '../contexts/SignUp.context';
import Input from './Input';

const FinalStep = ({toNextStep}) => {

    const {formState,setFormState} = useContext(SignUpContext);


    const submit = () =>{
        toNextStep();
    }

    return (
    
             <View style={styles.step_container} >
                 <Text style={{textAlign:"justify",marginBottom:40,fontSize:15}}>
                    Nous avons toutes les informations nécessaires
                    pour la création de votre compte.
                    En appuyant sur le bouton "Envoyer", vos informations seront
                    envoyées pour la vérification.
                    Une fois la vérification passée, vous recevrez un SMS
                    contenant les information de connexion.
                
                 </Text>
                
                 <TouchableOpacity onPress={submit} style={styles.nextBtn}>
                    <Text style={{color:"white"}}>Envoyer</Text>
                </TouchableOpacity>
             </View>

    )
}

export default FinalStep

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
