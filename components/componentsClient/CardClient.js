import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Divider, Surface } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { w, h } from '../../utils/Size';

const CardClient = (props) => {
  return (
    <Card style={[props.myCard ? styles.myCard : styles.card]}>
      <Card.Cover
        style={{ height: h(15) }}
        source={require('../../assets/assets/targetexpress.jpg')}
      />
      <Card.Content style={{ padding: '3%', paddingLeft: '5%' }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.small}>{props.small}</Text>
        <Text style={styles.smaller}>{props.smaller}</Text>
      </Card.Content>
      <Divider />
      <View style={{ flexDirection: 'row', margin: '3%' }}>
        <View style={{ alignSelf: 'center', width: w(15) }}>
          <Image source={props.source} style={styles.image}></Image>
        </View>
        <View style={{ width: w(60), marginLeft: '2%' }}>
          <Text style={styles.title}>{props.merchant}</Text>
          <Text style={styles.small}>{props.text1}</Text>
          <Text style={styles.smaller} numberOfLines={2}>
            {props.text2}
          </Text>
        </View>
      </View>
      <Divider />
      <View style={{ padding: '3%' }}>
        {props.commandecree && (
          <Text
            style={{
              color: '#545353',
              textAlign: 'left',
              fontSize: RFValue(12),
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{props.commandecree}</Text>:
            Commande créée
          </Text>
        )}
        {props.offreDePrix && (
          <Text
            style={{
              color: '#545353',
              textAlign: 'left',
              fontSize: RFValue(12),
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{props.offreDePrix[0]}</Text>:
            Offre de prix envoyée{' '}
            <Text style={{ fontWeight: 'bold' }}>{props.offreDePrix[1]}</Text>
          </Text>
        )}
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  myCard: {
    width: '100%',
    alignSelf: 'center',
  },
  card: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  title: {
    color: '#545353',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(16),
    fontWeight: 'bold',
    paddingBottom: '1%',
  },
  small: {
    color: 'grey',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(12),
  },
  smaller: {
    color: 'grey',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(12),
  },
  image: {
    height: h(8),
    width: w(15),
  },
});
export default CardClient;
