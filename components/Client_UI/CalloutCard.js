import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Title, Caption } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import ItemInCallout from './ItemInCallout';

const CalloutCard = (props) => {
  const [items, setItems] = useState([
    {
      title: 'Sam Irving',
      caption: 'Appuyer pour afficher les detail de ce marchand',
      img: 'aaa',
    },
    {
      title: 'Libby Whittaker',
      caption: 'Appuyer pour afficher les detail de ce marchand',
      description: 'I am a very good shop',
    },
  ]);

  return (
    <Card>
      <Card.Cover source={props.source} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Caption>{props.small}</Caption>
        <Caption>{props.smaller}</Caption>
      </Card.Content>
      <Divider />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
        }}
      >
        {items.map((item, index) => (
          <ItemInCallout navigation={props.navigation} key={index} {...item} />
        ))}
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    color: '#545353',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(16),
    fontWeight: 'bold',
    paddingBottom: '1%',
  },
  small: {
    color: '#B0AEAE',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(12),
  },
  smaller: {
    color: '#B0AEAE',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(12),
  },
});
export default CalloutCard;
