
import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet, Image, ScrollView, TouchableOpacity, Keyboard} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
import SignUpContext from "../contexts/SignUp.context";

const App = () => {

    //---- States ---------------
    const [currentPosition, setcurrentPosition] = useState(0);

    const [formState, setFormState] = useState({
        firstName: null,
        lastName: null,
        phoneNumber: null,
        code: null,
        CinRef: null,
        expDate: null,
        activityDomain: null,
        numPatente: null,
        statutJuridique: null,
    });
    
    const [keybordActive, setKeyboardActive] = useState(false);

    //---------------------------

    const toNextStep = ()=>{
        setcurrentPosition(currentPosition+1);
    }

    
    // useEffect(() => {
      
    //     Keyboard.addListener('keyboardDidShow', ()=>setKeyboardActive(true));
    //     Keyboard.addListener('keyboardDidHide', ()=>setKeyboardActive(false));
          
    // }, [])

    const renderSteps = ()=>{
        switch (currentPosition) {
            case 0:
                return (<Step1 toNextStep={toNextStep}/>) 
            case 1:
                return (<Step2 toNextStep={toNextStep}/>) 
            case 2:
                return (<Step3 toNextStep={toNextStep}/>) 
            case 3:
                return (<Step4 toNextStep={toNextStep}/>) 
            default:
                break;
        }
    }

  return (
      <SignUpContext.Provider value={{formState,setFormState}}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                {<Image
                    resizeMode = 'contain' 
                    style={{alignSelf:"center",height:"100%",width:"100%"}} 
                    source={require('../assets/logo-dark.png')}  />}
            </View>
        
            <View style={styles.stepsContainer}>
                <Text style={styles.headerTxt} >Créer un compte</Text>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                />

            <View style={{marginTop:20}}>
                {renderSteps()}
            </View>
                    
                
            <Text style={styles.footerTxt}>J'ai déja un compte</Text>
        
        </View>
        </View>
      </SignUpContext.Provider>
  );
};
 
export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 40,
        paddingBottom: 20,
        paddingTop:20,
        flex:1,
    },
    stepsContainer:{
        flex:3,
        justifyContent:"flex-end"
    },
    headerTxt:{
        textAlign:'center',
        color:"#324B3E",
        fontSize:20,
        marginBottom: 12
    },

    formContainer:{
        marginTop: 25,
    },
    footerTxt: {
        textAlign:"center",
        color: "#324B3E",
        fontSize:15
    },

});


const customStyles = {

    stepIndicatorSize: 30,
    currentStepIndicatorSize:40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorStrokeUnfinishedWidth: 0,
    separatorStrokeFinishedWidth: 0,
    stepStrokeCurrentColor: '#324B3E',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#324B3E',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#324B3E',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#324B3E',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#324B3E',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#324B3E',
    

}