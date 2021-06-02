import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import FondBtnCommandes from '../../assets/svg-icones-client/client-fond-btn-commandes.jsx';
import { w, h } from '../../utils/Size';

const ItemPrix = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Pressed')}
    >
      <View style={{ flexDirection: 'column', width: w(87), marginLeft: '2%' }}>
        <Text style={styles.small}>{props.small}</Text>

        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: '3%',
    marginTop: '3%',
    marginBottom: '3%',
    borderRadius: 5,
    height: h(9),
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    color: '#333333',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(17),
    fontWeight: 'bold',
  },
  small: {
    color: 'darkgrey',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(11),
    fontWeight: 'bold',
  },
});

export default ItemPrix;
