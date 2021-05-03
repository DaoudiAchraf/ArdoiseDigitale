import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from './Input';
import ImagePicker from './ImagePicker';

const Step3 = ({toNextStep}) => {

    const submit = () =>{
        toNextStep();
    }

    return (
        <View style={styles.stepTwo_container} >
            <View>
                <Text style={{marginBottom:5}}>Code de verification *</Text>
                <Input/>
                <Text style={{marginBottom:5}}>Code de verification *</Text>
                <Input/>
                <Text style={{marginBottom:5}}>Photo de la CIN *</Text>
                <ImagePicker/>
                <TouchableOpacity onPress={submit} style={styles.nextBtn}>
                    <Text style={{color:"white"}}>Suivant</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Step3

const styles = StyleSheet.create({
    stepTwo_container: {
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
