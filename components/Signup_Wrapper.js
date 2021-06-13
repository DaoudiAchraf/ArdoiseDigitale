import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import StepIndicator from "react-native-step-indicator";
import indicatorStyle from "../styles/StepIndicator";
import Step1 from "./SignUp_Trader/Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./SignUp_Trader/Step4";
import Step5 from "./SignUp_Trader/Step5";
import FinalStep from "./FinalStep";
import SignUpContext from "../contexts/SignUp.context";
import logo from "../assets/images/logo-dark.png";

const App = (props) => {
  // ---- States ---------------
  const [currentPosition, setcurrentPosition] = useState(0);


  const toNextStep = () => {
    setcurrentPosition(currentPosition + 1);
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

            <View style={{ marginTop: 20 }}>
                {props.children}    
            </View>

            <Text style={styles.footerTxt}>J'ai déja un compte</Text>
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
    fontSize: 15,
  },
});
