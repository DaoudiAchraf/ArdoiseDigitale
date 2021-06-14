import React from "react";
import {StyleSheet, Text} from "react-native";
import {h} from '../utils/Size';
import { RFValue } from 'react-native-responsive-fontsize';
import { InfoText } from '../constants/Colors';
import PropTypes from "prop-types";

const TextStep = ({children}) => {

  return (
      <Text style={styles.text}>{children}</Text>
  );
};

TextStep.propTypes = {
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
};

TextStep.defaultProps = {
  currentStep: 0,
  nextStep: null
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

  text:{
    fontSize: RFValue(16),
    paddingTop: h(2),
    paddingBottom : h(5),
    color: InfoText,
    textAlign: 'justify'
  }
});
