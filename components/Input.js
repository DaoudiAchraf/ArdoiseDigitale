import * as React from 'react';
import { StyleSheet,Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

const Input = (props) => {
  
  const {value,handleChange} = props;

  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={(txt)=>handleChange(txt) }
      theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
      style={styles.inputStyle}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func
};

Input.defaultProps = {
  placeholder : '',
  secureTextEntry: false,
  value: ''
};

export default Input;

const styles = StyleSheet.create({
    inputStyle:{ 
      
        height: 38,
        justifyContent:"center",
        marginBottom: "4%",
        marginTop: 5
    }

});