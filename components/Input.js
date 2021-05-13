import * as React from 'react';
import { StyleSheet,Keyboard} from 'react-native';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

const Input = (props) => {
  
  const {value,handleChange,mode} = props;

  return (

    <TextInput
      label={props.label}
      placeholder={props.placeholder}
      value={value}
      onChangeText={(txt)=>handleChange(txt) }
      theme={{ colors: { primary: 'green',underlineColor:'white'}}}
      style={styles.inputStyle}
      secureTextEntry={props.secureTextEntry}
      mode={props.mode}

    />

  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  mode : PropTypes.string
};

Input.defaultProps = {
  placeholder : '',
  secureTextEntry: false,
  value: '',
  label: null,
  mode: 'flat'
};

export default Input;

const styles = StyleSheet.create({
    inputStyle:{ 

        height: 38,
        justifyContent:"center",
        marginBottom: 8,
        marginTop: 5
    }

});