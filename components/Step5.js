import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Input from './Input';


const Step5 = ({toNextStep}) => {

    const [selectedLanguage, setSelectedLanguage] = useState();
    
    const [numPatente, setNumPatente] = useState();
    
    const submit = () =>{
        toNextStep();
    }

    return (
        <View style={styles.stepTwo_container} >
            <View>
                <Text style={{marginBottom:5}}>Numéro de patente *</Text>
                <Input
                   value={numPatente}
                   handleChange={setNumPatente}
                /> 

                <Text style={{marginBottom:5}}>Statut juridique *</Text>
                
                <View style={{borderBottomWidth:0.3,marginBottom:5,backgroundColor:"#E7E7E7"}}>
                    <Picker 
                        style={{height:38}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="    En Nom Propre" value={0} />
                        <Picker.Item label="    Entreprise Individuelle" value={1}/>
                        <Picker.Item label="    S A R L" value={2} />
                        <Picker.Item label="    S A" value={3} />
                    </Picker>
                </View>
                
                <TouchableOpacity onPress={submit} style={styles.nextBtn}>
                    <Text style={{color:"white"}}>Suivant</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Step5

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


