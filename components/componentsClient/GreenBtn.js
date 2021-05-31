import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const NextButton = ({ title, navigation, action, myGreenBtn }) => {
  return (
    <TouchableOpacity
      onPress={(navigation, action)}
      style={[myGreenBtn ? styles.myGreenBtn : styles.btnStyle]}
    >
      <Text style={{ color: 'white', fontSize: RFValue(10) }}>{title}</Text>
    </TouchableOpacity>
  );
};

NextButton.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string,
};

NextButton.defaultProps = {
  title: 'Suivant',
  action: null,
};

export default NextButton;

const styles = StyleSheet.create({
  myGreenBtn: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#485c54',
    padding: 12,
    borderRadius: 3,
    marginTop: '10%',
    marginBottom: '5%',
  },
  btnStyle: {
    alignItems: 'center',
    backgroundColor: '#485c54',
    padding: 12,
    borderRadius: 3,
    marginHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
});
