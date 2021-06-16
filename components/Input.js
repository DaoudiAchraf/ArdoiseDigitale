import * as React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import {h} from '../utils/Size'
import PropTypes from "prop-types";
import { Secondary } from "../constants/Colors";

const Input = (props) => {
  const { value, handleChange, mode, label,
     placeholder, secureTextEntry, keyboardType, textArea, styleBox, error ,onFocus,
     maxLength
    } = props;

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={(txt) => handleChange(txt)}
      theme={{ colors: { primary: Secondary, underlineColor: "white" } }}
      
      style={mode ==='flat' ? styles.inputStyle: mode=== 'box'?{...styleBox}: textArea ?{height:h(15),textAlignVertical: 'top'}:{height: h(7)}}
      secureTextEntry={secureTextEntry}
      mode={mode}
      keyboardType={keyboardType}
      maxLength={ maxLength }
      error={error}
      onFocus={onFocus}
      
   
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  handleChange: PropTypes.func,
  label: PropTypes.string,
  mode: PropTypes.string,
  textArea: PropTypes.bool,
  styleBox: PropTypes.any,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  error: PropTypes.bool,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  placeholder: "",
  secureTextEntry: false,
  value: '',
  label: null,
  mode: "flat",
  textArea: false,
  keyboardType: 'default',
  error: false,
  onFocus: null,
  maxLength: 100
};

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    justifyContent: "center",
    backgroundColor: 'transparent'
  },

 
});
