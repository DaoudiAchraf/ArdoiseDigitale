import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const NextButton = ({
  props,
  title,
  navigation,
  action,
  grayed,
  myGreenBtn,
  myGreenBtn2,
}) => {
  return (
    <TouchableOpacity
      onPress={(navigation, action)}
      disabled={grayed}
      style={[
        myGreenBtn
          ? [styles.myGreenBtn, grayed && styles.grayed]
          : [
              myGreenBtn2
                ? [styles.myGreenBtn2, grayed && styles.grayed]
                : styles.btnStyle,
            ],
      ]}
    >
      <Text
        style={[
          grayed
            ? { color: "#808080", fontSize: RFValue(10) }
            : { color: "white", fontSize: RFValue(10) },
        ]}
      >
        {title}
      </Text>
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
  myGreenBtn: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#485c54",
    padding: 12,
    borderRadius: 3,
    marginTop: "10%",
    marginBottom: "5%",
    flexShrink: 1,
    elevation: 4,
  },
  myGreenBtn2: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#485c54",
    padding: 12,
    borderRadius: 3,
    marginTop: "3%",
  },
  btnStyle: {
    alignItems: "center",
    backgroundColor: "#485c54",
    padding: 12,
    borderRadius: 3,
    margin: "5%",
  },
  grayed: {
    backgroundColor: "#D1D1D1",
  },
});
