import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const NextButton = ({ title, action, myRedBtn }) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[myRedBtn ? styles.myRedBtn : styles.btnStyle]}
    >
      <Text style={{ color: "white", fontSize: RFValue(10) }}>{title}</Text>
    </TouchableOpacity>
  );
};

NextButton.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string,
};

NextButton.defaultProps = {
  title: "Suivant",
  action: null,
};

export default NextButton;

const styles = StyleSheet.create({
  myRedBtn: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#c43c44",
    padding: 12,
    borderRadius: 3,
    marginTop: "10%",
    marginBottom: "5%",
    flexShrink: 1,
    elevation: 4,
  },
  btnStyle: {
    alignItems: "center",
    backgroundColor: "#c43c44",
    padding: 12,
    borderRadius: 3,
    margin: "5%",
  },
});
