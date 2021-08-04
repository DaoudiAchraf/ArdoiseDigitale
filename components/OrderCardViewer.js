
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CartSVG from "../assets/svgr/Cart";
import { h, totalSize } from '../utils/Size';
import { Foundation } from '@expo/vector-icons'; 
import moment from "moment";

const MyComponent = ({navigation,order,merchant,newOrder}) => {

  const navTo_OrderDetails = ()=>{
    navigation.navigate('OrderDetails',{products: order.products,merchant:merchant});
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
                    En attente
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
});

export default MyComponent;
