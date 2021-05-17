import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";

const NextButton = ({ title, action }) => {

  return (
      <TouchableOpacity onPress={action} style={styles.btnStyle}>
        <Text style={{ color: "white" }}>{title}</Text>
      </TouchableOpacity>
  );
};

NextButton.propTypes = {
    action: PropTypes.func,
    title: PropTypes.string
  };

NextButton.defaultProps = {
    title: "Suivant",
    action: null
  };

export default NextButton;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
});
