import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView ,BackHandler, Alert, TouchableOpacity } from "react-native";
import StepIndicator from "react-native-step-indicator";
import indicatorStyle from "../styles/StepIndicator";
import Step1 from "../components/SignUp_Trader/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/SignUp_Trader/Step4";
import Step5 from "../components/SignUp_Trader/Step5";
import FinalStep from "../components/FinalStep";

import logo from "../assets/images/logo-dark.png";
import SignUpContext from "../contexts/SignUp.context";
import { RFValue } from 'react-native-responsive-fontsize';

const App = ({navigation}) => {
  
  const [currentPosition, setcurrentPosition] = useState(0);

  const toNextStep = () => {

    if(currentPosition === 5)
      navigation.navigate("SignIn");

    else
    {
      const pos = currentPosition +1;
      setcurrentPosition(pos);
    }
    
  };

  const toPreviousStep = () => {
    if (currentPosition > 0 )
      setcurrentPosition(currentPosition-1)
    else
      navigation.navigate('SignUp');
  };

  const backAction = () => {
   
    Alert.alert("Attention !", "Voulez vous confirmer le retour à l'étape précédente", [
      {
        text: "Non",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Oui", onPress: () => toPreviousStep() }
    ]);
    
    return true;
  };

  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [currentPosition]);


  const renderSteps = () => {
    switch (currentPosition) {
      case 0:
        return <Step1  toNextStep={toNextStep} />;
      case 1:
        return <Step2  toNextStep={toNextStep} />;
      case 2:
        return <Step3 toNextStep={toNextStep} />;
      case 3:
        return <Step4 toNextStep={toNextStep} />;
      case 4:
        return <Step5 toNextStep={toNextStep} />;
      case 5:
        return <FinalStep toNextStep={toNextStep} />;
      default:
        break;
    }
  };

  return (
    <SignUpContext>
      <View style={styles.container}>
        <View style={{ flex: 4 }}>
          <Image resizeMode="contain" style={styles.logoStyle} source={logo} />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          style={{ marginTop: 10 }}
        >
          <View style={styles.stepsContainer}>
            <Text style={styles.headerTxt}>Créer un compte</Text>
            <StepIndicator
              stepCount={6}
              customStyles={indicatorStyle}
              currentPosition={currentPosition}
            />

            <View style={{ marginTop: 20 }}>{renderSteps()}</View>

              <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} >
                 <Text style={styles.footerTxt}>J'ai déja un compte</Text>
              </TouchableOpacity>
           
          </View>
        </ScrollView>
      </View>
      </SignUpContext>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 36,
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
  },
  logoStyle: {
    alignSelf: "center",
    height: "100%",
    width: "80%",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  stepsContainer: {
    justifyContent: "flex-end",
  },
  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 20,
    marginBottom: 12,
  },

  formContainer: {
    marginTop: 25,
  },
  footerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: RFValue(16),
    marginTop:10
  },
});
