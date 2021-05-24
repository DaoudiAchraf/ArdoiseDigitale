import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { w, h } from '../../utils/Size';

const Item2 = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Pressed')}
    >
      <View style={{ flexDirection: 'row', marginTop: '-5%' }}>
        <View style={{ width: w(87), margin: '4%', marginLeft: '2%' }}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.small}>{props.small}</Text>
          <Text style={styles.smaller}>{props.smaller}</Text>
        </View>
        <View style={{ width: w(20), marginLeft: '-23%' }}>
          <Image source={props.source} style={styles.image}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    padding: '3%',
    borderRadius: 3,
    marginTop: '5%',
    height: h(9.5),
    width: w(92),
    alignSelf: 'center',
  },
  title: {
    color: '#B0AEAE',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(17),
    fontWeight: 'bold',
  },
  small: {
    color: '#B0AEAE',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(11),
  },
  smaller: {
    color: '#B0AEAE',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(9),
  },
  image: {
    height: '90%',
    width: '85%',
  },
});

export default Item2;
