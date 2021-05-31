import * as React from 'react';
import { List } from 'react-native-paper';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { h, w } from '../../utils/Size';
const Item1 = (props) => (
  <List.Item
    style={{
      backgroundColor: '#485c54',
      width: w(92),
      borderRadius: 3,
      alignSelf: 'center',
      marginBottom: '3%',
    }}
    titleStyle={{
      color: 'white',
      fontSize: RFValue(17),
      marginBottom: '1%',
      fontWeight: 'bold',
    }}
    descriptionStyle={{ color: 'white', fontSize: RFValue(11) }}
    title={props.title}
    description={props.description}
    right={() => (
      <Image source={props.img} style={{ width: '17%', height: '100%' }} />
    )}
    onPress={() => props.navigation()}
  />
);

export default Item1;
