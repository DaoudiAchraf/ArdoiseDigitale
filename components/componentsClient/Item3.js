import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import FondBtnCommandes from '../../assets/svg-icones-client/client-fond-btn-commandes.jsx';
import { w, h } from '../../utils/Size';

const Item2 = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.indisponible && styles.indisponible]}
      onPress={() => console.log('Pressed')}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: w(87), marginLeft: '2%' }}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.small}>
            <Text style={styles.smaller}>{props.smaller}</Text>
            {props.small}
          </Text>
        </View>
        <FondBtnCommandes
          style={{ position: 'absolute', left: '83%', top: '-20%' }}
        />
        {props.badged && (
          <Badge size={25} style={styles.badge}>
            x 3
          </Badge>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  indisponible: {
    backgroundColor: 'lightgrey',
  },
  button: {
    backgroundColor: 'white',

    padding: '3%',
    marginBottom: '3%',
    borderRadius: 3,
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
    color: '#333333',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(11),
    fontWeight: 'bold',
  },
  smaller: {
    color: '#C1272D',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(11),
    fontWeight: 'bold',
  },
  badge: {
    position: 'absolute',
    left: '90%',
    top: '-10%',
    color: '#324B3E',
    backgroundColor: 'transparent',
    fontWeight: '700',
    fontSize: RFValue(15),
  },
});

export default Item2;
