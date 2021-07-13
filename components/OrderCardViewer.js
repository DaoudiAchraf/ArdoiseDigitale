
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CartSVG from "../assets/svgr/Cart";
import { totalSize } from '../utils/Size';

const MyComponent = () => {
    return (
        <TouchableOpacity style={styles.container}>
              <View style={{justifyContent:'space-between',marginBottom:'1%'}}>

                <View style={{flexDirection: 'row'}}> 
                <Text style={{fontSize:RFValue(15)}}>Crée le </Text>
                <Text style={{fontSize:RFValue(15),fontWeight:'bold'}}>01/02/2021 </Text>
                <Text style={{fontSize:RFValue(15)}}>à </Text>
                <Text style={{fontSize:RFValue(15)}}>8:00</Text>
                </View>
                
               
            
                <View style={{flexDirection: 'row'}}>
                  <Text>Statut : </Text>
                  <Text style={{fontSize:RFValue(14),color: '#ED1C24',fontWeight:'bold'}}>
                  En attente</Text>
                </View>
           
              </View>
              <CartSVG 
                opacity={0.5} 
                width={totalSize(5)}
                height={totalSize(5)}
              />
          
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
        marginBottom: '1%'
    },
});

export default MyComponent;
