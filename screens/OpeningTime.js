
import React, { useState } from "react";
import { View,Text,StyleSheet, Image, ScrollView} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import indicatorStyle from '../styles/StepIndicator';
import logo from '../assets/logo-dark.png';
import DayTimeSelector from '../components/DayTimeSelector';

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
        legalStatus: null,
        address: null
    });
    //---------------------------

    const toNextStep = ()=>{
        setcurrentPosition(currentPosition+1);
    }

    
  return (
    <View style={styles.container}>
  
        <Image
           style={styles.logoStyle}
           source={logo} 
        />
        
        <View style={styles.stepsContainer}>
            <Text style={styles.headerTxt} >
                Créer un compte
            </Text>

            <StepIndicator
              stepCount = {6}
              customStyles={indicatorStyle}
              currentPosition={currentPosition}
            />
         
            <DayTimeSelector/>

          
        </View>
    </View>
 
  );
};
 
export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 40,
        paddingBottom: 20,
        paddingTop:10,
        flex:1,
  
    },
    logoStyle:{
        alignSelf:"center",
        height:200,
        width:200
    },
 
    stepsContainer:{
        paddingTop:7,
        paddingBottom: 10,
        borderWidth: 3,
        justifyContent:"flex-end",
        flex:1
    },

    headerTxt:{
        textAlign:'center',
        color:"#324B3E",
        fontSize:20,
        marginBottom: 12
    },

    footerTxt: {
        textAlign:"center",
        color: "#324B3E",
        fontSize:15
    },

});


