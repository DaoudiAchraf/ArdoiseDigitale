import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, Divider, Surface,Provider,Portal,Modal } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { w, h, totalSize } from '../../utils/Size';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import CalenderViewer from '../CalenderViewer'; 
import { days } from '../../constants/Arrays';
import { URL } from '../../services/Client';
import { Rating } from 'react-native-ratings';

const CardClient = (props) => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20}

  console.log(props.calender)

  console.log(props.merchantImage);
  return (
 

    <Card style={[props.myCard ? styles.myCard : styles.card]}>

      {! props.callout &&
            <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Horaire d'ouverture</Text>
          <CalenderViewer calender={props.calender} setCalender={()=>console.log('noo')}/>
        </Modal>
      </Portal>
      }
      <Card.Cover

        style={{ height: h(15) }}
        source={
          !props.storeImage ?
          {uri:URL+'/images/'+props.storeImage}:
          require('../../assets/assets/targetexpress.jpg')
        }
      />
      
      {props.callout &&
      <TouchableOpacity onPress={props.action} style={styles.exitContainer}>
        <Feather name="x" size={totalSize(3)} color="black"/>
      </TouchableOpacity>}

      
      <Card.Content style={styles.cardContent}>
        
        <View>
          <Text style={styles.title}>{props.title}</Text>

          <Text style={styles.smallTxt}>{props.small}</Text>
          {/* <Text style={styles.smallTxt}>{props.smaller}</Text> */}
        </View>

      {! props.callout &&
        <TouchableOpacity onPress={showModal}>
          <AntDesign name="calendar" size={24} color="black" />
        </TouchableOpacity>
      }
    
      </Card.Content>
      <Divider />
      <View style={{ flexDirection: 'row', margin: '3%' }}>

      <View style={styles.merchantCard}>


        {/* <View style={{ alignSelf: 'center', width: w(15) }}>
          <Image source={props.source} style={styles.image}></Image>
        </View> */}

   
        <Image
           source={
            props.merchantImage ?
            {uri:URL+'/images/'+'1629086825192.jpg'}:
            require('../../assets/assets/targetexpress.jpg')

           }
           style= {{width:RFValue(60),height:RFValue(60)}}
          />

        <View style={{ width: w(60), marginLeft: '2%' }}>
          <View>
            <Rating 
             startingValue={props.rate}
             style={{marginLeft:'-55%'}}
             onFinishRating={(rate)=>console.log(rate)}
            ratingCount={5} imageSize={20} />
          </View>
        
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.attributes} numberOfLines={2}>
           Livraison Disponible 
          </Text>
          <Text style={styles.attributes} numberOfLines={2}>
           accepete le payment au comptant
          </Text>
        </View>


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
    fontSize: RFValue(16.5),
    fontWeight: 'bold',
    paddingBottom: '1%',
  },
  smallTxt: {
    color: 'grey',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: RFValue(14),
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
    flexDirection: 'row',
    alignItems:'center'
  },
  attributes:{
    color: "grey",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
  }
});
export default CardClient;


//props: commandecree et offreDePrix faute 
//soluion : il faut les placer dans un autre component 
