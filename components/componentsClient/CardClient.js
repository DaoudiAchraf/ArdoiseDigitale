import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, Divider, Surface } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { w, h, totalSize } from '../../utils/Size';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const CardClient = (props) => {
  return (
    <Card style={[props.myCard ? styles.myCard : styles.card]}>
      
      <Card.Cover

        style={{ height: h(15) }}
        source={require('../../assets/assets/targetexpress.jpg')}
      />
      
      <TouchableOpacity onPress={props.action} style={styles.exitContainer}>
        <Feather name="x" size={totalSize(3)} color="black"/>
      </TouchableOpacity>
      
      <Card.Content style={styles.cardContent}>
        
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.small}>{props.small}</Text>
          <Text style={styles.smaller}>{props.smaller}</Text>
        </View>

        
        <TouchableOpacity onPress={props.action}>
        <AntDesign name="calendar" size={24} color="black" />
      </TouchableOpacity>
 
    
      </Card.Content>
      <Divider />
      <View style={{ flexDirection: 'row', margin: '3%' }}>

      <View style={styles.merchantCard}>
          <Image
           source={require('../../assets/assets/targetexpress.jpg')}
           style= {{width:30,height:30}}
          />
      </View>
        {/* <View style={{ alignSelf: 'center', width: w(15) }}>
          <Image source={props.source} style={styles.image}></Image>
        </View> */}

        {/* <View style={{ width: w(60), marginLeft: '2%' }}>
          <Text style={styles.title}>{props.merchant}</Text>
          <Text style={styles.small}>{props.text1}</Text>
          <Text style={styles.smaller} numberOfLines={2}>
            {props.text2}
          </Text>
        </View> */}

        <View>

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
  exitContainer:{
    position:'absolute',
    top:0,
    backgroundColor: 'white',
    padding: totalSize(0.5),
    alignContent: 'center',
    alignItems: 'center'
  },
  cardContent:{
    padding: '3%',
    paddingLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  merchantCard:{
    flexDirection: 'row'
  }
});
export default CardClient;


//props: commandecree et offreDePrix faute 
//soluion : il faut les placer dans un autre component 
