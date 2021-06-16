import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: '25%',
    marginRight: '25%',
  },
});
