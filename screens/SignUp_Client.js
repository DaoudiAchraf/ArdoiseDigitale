
import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet, Image, ScrollView} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import indicatorStyle from '../styles/StepIndicator';
import Step1 from '../components/SignUp_Client/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/SignUp_Client/Step4';
import FinalStep from '../components/FinalStep';
import SignUpContext from '../contexts/SignUp.context';
import logo from '../assets/logo-dark.png'

const App = () => {

    //---- States ---------------
    const [currentPosition, setcurrentPosition] = useState(0);

    const [formState, setFormState] = useState({
        firstName: null,
        lastName: null,
        phoneNumber: null,
        maritalStatus: null,
        photo: null,
        code: null,
        CinRef: null,
        expDate: null,
        address:null
    });
    

    //---------------------------

    const toNextStep = ()=>{
        setcurrentPosition(currentPosition+1);
    }

    
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
            case 4:
                return (<FinalStep toNextStep={toNextStep}/>)  
            default:
                break;
        }
    }

  return (
      <SignUpContext.Provider value={{formState,setFormState}}>
           <View style={styles.container}>
        <View style={{flex:4}}>
            {<Image
               resizeMode = 'contain' 
               style={styles.logoStyle}
               source={logo} 
            />}
        </View>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          style={{marginTop:10}}
        >
            <View style={styles.stepsContainer}>
                <Text style={styles.headerTxt} >Créer un compte</Text>
                <StepIndicator
                    customStyles={indicatorStyle}
                    currentPosition={currentPosition}
                />

            <View style={{marginTop:20}}>
                {renderSteps()}
            </View>
                
            
                <Text style={styles.footerTxt}>J'ai déja un compte</Text>
        
        </View>
       </ScrollView>
      </View>
 
      </SignUpContext.Provider>
  );
};
 
export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 36,
        paddingBottom: 20,
        paddingTop:20,
        flex:1,
    },
    logoStyle:{
        alignSelf:"center",
        height:"100%",
        width:"80%"
    },
    scrollContent:
    {
     flexGrow: 1,
     justifyContent: 'flex-end' 
    },
    stepsContainer:{
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

