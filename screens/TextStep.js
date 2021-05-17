import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import indicatorStyle from "../styles/StepIndicator";
import logo from "../assets/images/logo-dark.png";
import {w,h,totalSize} from '../utils/Size';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { InfoText } from '../constants/Colors';

const TextStep = (props) => {

  return (
    <View style={styles.step_container}>
      <View >
        <Image style={styles.logoStyle} source={logo} />
      </View>
        
      <View >
      <StepIndicator
              customStyles={indicatorStyle}
              currentPosition={0}
            />
     <Text style={styles.text}>{props.children}</Text>
     

      <TouchableOpacity style={styles.nextBtn}>
        <Text numberOfLines={2} style={{ color: "white" }}>Envoyer</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default TextStep;

const styles = StyleSheet.create({
  step_container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 36,
    paddingBottom: 20,
    paddingTop: 20
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: "#324B3E",
    padding: totalSize(1.5),
  },
  logoStyle: {
    width: totalSize(30),
    height: totalSize(30),
    alignSelf: 'center'
  },
  text:{
    fontSize: RFPercentage(2.8),
    paddingTop: h(5),
    paddingBottom : h(5),
    color: '#808080',
    textAlign: 'center'
  }
});
