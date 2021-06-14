import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { Primary, Secondary } from '../constants/Colors';
import PropTypes from "prop-types";
import {RFValue } from 'react-native-responsive-fontsize';

const NextButton = ({ title, onPress, style }) => {

  return (
      <TouchableOpacity onPress={onPress} style={{...styles.btnStyle,...style}}>
        <Text style={{ color: "white",fontSize: RFValue(17) }}>{title}</Text>
      </TouchableOpacity>
  );
};

NextButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    style: PropTypes.any
  };

NextButton.defaultProps = {
    title: "Suivant",
    onPress: null,
    style: null
  };

export default NextButton;

const styles = StyleSheet.create({
  btnStyle: {
    width:'100%',
    alignItems: "center",
    backgroundColor: Primary,
    padding: '3%',

  },
});
