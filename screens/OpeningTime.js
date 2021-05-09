
import React, { useState } from "react";
import { View,Text,StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import indicatorStyle from '../styles/StepIndicator';
import logo from '../assets/logo-dark.png';
import DayTimeSelector from '../components/Calender';

const App = () => {

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

    
  return (
    <View style={styles.container}>
  
        <Image
           style={styles.logoStyle}
           source={logo} 
        />
        
        <View style={styles.stepsContainer}>
            <Text style={styles.headerTxt} >
                Horaires d'ouverture
            </Text>

            <StepIndicator
              stepCount = {6}
              customStyles={indicatorStyle}
              currentPosition={1}
            />
        
            <DayTimeSelector/>

            <TouchableOpacity style={styles.nextBtn}>
                <Text style={{color:"white"}}>Suivant</Text>
            </TouchableOpacity>

        </View>
    </View>
 
  );
};
 
export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 36,
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
        flex:1,
        paddingTop:7,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        
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

    nextBtn: {
        alignItems: "center",
        backgroundColor: "#324B3E",
        padding: 10,
        marginBottom: "5%",
        marginTop:"4%"
    }

});


