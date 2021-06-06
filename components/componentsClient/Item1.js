import * as React from 'react';
import { List, Badge } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { h, w } from '../../utils/Size';

const Item1 = (props) => (
  <View>
    <List.Item
      style={[
        props.myItem
          ? [
              {
                paddingRight: '0%',
                backgroundColor: 'white',
                width: w(82),
                borderRadius: 3,
                alignSelf: 'center',
                marginBottom: '3%',
              },
              [props.indisponible && styles.indisponible],
            ]
          : {
              backgroundColor: '#485c54',
              width: w(92),
              borderRadius: 3,
              alignSelf: 'center',
              marginBottom: '3%',
            },
      ]}
      titleStyle={[
        props.myItem
          ? {
              color: '#485c54',
              fontSize: RFValue(17),
              marginBottom: '1%',
              fontWeight: 'bold',
            }
          : {
              color: 'white',
              fontSize: RFValue(17),
              marginBottom: '1%',
              fontWeight: 'bold',
            },
      ]}
      descriptionStyle={[
        props.myItem
          ? { color: '#485c54', fontSize: RFValue(11), fontWeight: 'bold' }
          : { color: 'white', fontSize: RFValue(11) },
      ]}
      title={props.title}
      description={props.description}
      right={() => (
        <Image source={props.img} style={{ width: '15%', height: '100%' }} />
      )}
      onPress={() => props.navigation()}
    />
    {props.badged && (
      <Badge size={25} style={styles.badge}>
        x 3
      </Badge>
    )}
  </View>
);

export default Item1;

const styles = StyleSheet.create({
  indisponible: {
    backgroundColor: 'lightgrey',
  },
  badge: {
    position: 'absolute',
    left: '90%',
    top: '9%',
    color: '#324B3E',
    backgroundColor: 'transparent',
  },
});
