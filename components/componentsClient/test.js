import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const NextButton = ({ title, action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.btnStyle}>
      <Text style={{ elevation: 2, color: 'white', fontSize: RFValue(10) }}>
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
  title: 'Suivant',
  action: null,
};

export default NextButton;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    backgroundColor: '#485c54',
    padding: 12,
    borderRadius: 3,
    marginHorizontal: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    elevation: 2,
  },
});
