
import React, { useState } from "react";
import { View,Text,StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import indicatorStyle from '../styles/StepIndicator';
import logo from '../assets/images/logo-dark.png';
import CategorySelector from '../components/CategorySelector';

const ProductsCategory = () => {

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
  
  <View style={{flex:1}}>
            {<Image
               resizeMode = 'contain' 
               style={styles.logoStyle}
               source={logo} 
            />}
        </View>
        
        <View style={styles.stepsContainer}>
            <Text style={styles.headerTxt} >
                Catégories de produits
            </Text>
           
            <View style={{marginBottom:12}} >

            <StepIndicator
              stepCount = {6}
              customStyles={indicatorStyle}
              currentPosition={1}
            />
            </View>
    
            <CategorySelector/>

            <Text style={styles.footerTxt}>
              Sélectionner les Catégories de produits que votre 
              commerce offre.
            </Text>

            <TouchableOpacity style={styles.nextBtn}>
                <Text style={{color:"white"}}>Suivant</Text>
            </TouchableOpacity>
          
        </View>
    </View>
 
  );
};
 
export default ProductsCategory;

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
        height: '100%',
        width: '100%'
    },
    stepsContainer:{
        flex: 4,
        paddingTop: 7,
        paddingBottom: 10,
        justifyContent: 'flex-end'
    },
    headerTxt:{
        textAlign:'center',
        color:"#324B3E",
        fontSize:20,
        marginBottom: 12
    },
    footerTxt: {
        marginTop: 10,
        textAlign: 'justify',
        color: '#808080',
        fontSize: 15
    },
    nextBtn: {
        alignItems: "center",
        backgroundColor: "#324B3E",
        padding: 10,
        marginBottom: "5%",
        marginTop:"4%"
    }
});


