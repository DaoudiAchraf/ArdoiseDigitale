import React from 'react';
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native';
import Input from './Input';


const Step4 = ({toNextStep}) => {
    
    const submit = () =>{
 
        toNextStep();
    }

    return (
        <View style={styles.stepTwo_container} >
            <View>
                <Text style={{marginBottom:5}}>Domaine d'activité *</Text>
                <Input/>
                <Text style={{marginBottom:5}}>Adresse de commerce *</Text>
                <Input/> 
                <TouchableOpacity onPress={submit} style={styles.nextBtn}>
                    <Text style={{color:"white"}}>Suivant</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Step4

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
