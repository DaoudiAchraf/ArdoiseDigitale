
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CartSVG from "../assets/svgr/Cart";
import { h, totalSize } from '../utils/Size';
import { Foundation } from '@expo/vector-icons'; 
import moment from "moment";
import { color } from '../constants/Colors';

const MyComponent = ({navigation,order,merchant,newOrder}) => {

  const navTo_OrderDetails = ()=>{
    //console.log(order.products);
    if(order.currentState === 'offre')
    navigation.navigate('OffrePrixCommande');
    //console.log(merchant)
    else if (order.currentState === 'response')
     navigation.navigate('OrderDetails',{products: order.products,ardoise:{merchant}});
    else
     navigation.navigate('OrderDetails',{products: order.products,ardoise:{merchant}});
  }

  
    return (
        <TouchableOpacity
           style={{...styles.container,backgroundColor: newOrder ? '#FEEDBA' : '#FFFFFF' }}
           onPress={navTo_OrderDetails}
           >
              <View style={{justifyContent:'space-between',marginBottom:'1%'}}>

                <View style={{flexDirection: 'row'}}> 
                <Text style={{fontSize:RFValue(15)}}>Crée le </Text>
                <Text style={{fontSize:RFValue(15),fontWeight:'bold'}}>
                  {moment(order.date).format('DD/MM/YYYY')} 
                </Text>
                <Text style={{fontSize:RFValue(15)}}> à </Text>
                <Text style={{fontSize:RFValue(15)}}>
                  {moment(order.date).format('hh:mm')} 
                </Text>
                </View>
                
               
            
                <View style={{flexDirection: 'row'}}>
                  <Text>Statut : </Text>
                  <Text style={{fontSize:RFValue(14),color: '#ED1C24',fontWeight:'bold'}}>
                   {order.currentState === 'pending' ? 
                            'en Attente' 
                          :(   
                          order.currentState === 'response' ?
                            (order.status.response.res ? 'Accepté': ' Refusé') 
                          :(order.currentState === 'ready' ? 'Prete '
                          : order.currentState === 'offre' ? 'Offre'  :'nouvelle Commande')
                          
                        )

                    }
                  </Text>
                </View>
         


              </View>
                 { newOrder ?
                  <Foundation name="burst-new" size={totalSize(6)} color="red" style={{marginBottom:-h(1)}}  />
                :
                <CartSVG 
                opacity={0.5} 
                width={totalSize(5)}
                height={totalSize(5)}
              /> }
          </TouchableOpacity>

          
    );
};


const styles = StyleSheet.create({
    container: {
        padding: '4%',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderRadius:4,
        flexDirection: 'row',
        marginBottom: '3.5%',
      
    },
    statusPending:{
      fontSize:RFValue(14),
      color: '#FD6531',
      fontWeight:'bold'
    },
    statusAccepted:{
      fontSize:RFValue(14),
      color: '#4FA031',
      fontWeight:'bold'
    },
    statusRefused:{
      fontSize:RFValue(14),
      color: '#ED1C24',
      fontWeight:'bold'
    },
    statusPrete:{
      fontSize:RFValue(14),
      color: color.Secondary,
      fontWeight:'bold'
    },
    statusReçu:{
      fontSize:RFValue(14),
      color: '#ED1C24',
      fontWeight:'bold'
    },
    
});

export default MyComponent;
