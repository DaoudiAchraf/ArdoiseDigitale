import * as React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import PropTypes from "prop-types";

const Input = (props) => {
  const { value, handleChange, mode, label, placeholder, secureTextEntry } =
    props;

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={(txt) => handleChange(txt)}
      theme={{ colors: { primary: "green", underlineColor: "white" } }}
      style={styles.inputStyle}
      secureTextEntry={secureTextEntry}
      mode={mode}
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
};

Input.defaultProps = {
  placeholder: "",
  secureTextEntry: false,
  value: "",
  label: null,
  mode: "flat",
};

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    height: 38,
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 5,
  },
});
