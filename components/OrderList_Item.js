import { object } from "prop-types";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { color } from "../constants/Colors";
import {URL  } from "../services/Client";
import { w, h } from "../utils/Size";

const Item2 = (props) => {

 const { merchant } = props.infos.ardoise;

 console.log('____________________');
 console.log(props.infos.ardoise);
//  console.log(merchant);

  //console.log(props.infos);

  
  
  const order = props.infos;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation && props.navigation()}
    >
      <View style={{ flexDirection: "row", marginTop: "-5%" }}>


        <View style={{ width: w(87), margin: "4%", marginLeft: "2%" }}>
          <View style={styles.orderState}>
          <Text
            style={{...styles.title,color:color.INFO_TEXT,fontSize:RFValue(12)}}
          >
            {"Le 02/03/2021"}
  
          </Text>

          <Text
            style={styles.title}
          >
            Commande acceptée
          {/* {
              typeof(merchant) === object ?
              
              order.currentState === 'pending' ? 
              'Commande en attente' 
            :(   
            order.currentState === 'response' ?
              (order.status.res ? 'Commande Accepté': 'Commande refusé') 
            :(order.currentState === 'ready' ? 'Commande prete ':null)
            
           )
              :

              order.currentState === 'pending' ? 
              'Nouvelle commande' 
            :(   
            order.currentState === 'response' ?
              (order.status.res ? 'Commande Accepté': 'Commande refusé') 
            :(order.currentState === 'ready' ? 'Commande prete ':
            
            order.currentState === 'offre' ? 'Offre envoyé':null)
            
           )
          } */}
            
          </Text>
          </View>

                    <View style={styles.orderState}>
  

          </View>


          <View style={{flexDirection: 'row',alignItems: 'center'}}> 
            <View style={styles.imgContainer}>
                <Image
                   source={ 
                     merchant.merchantImage ?{uri:URL+'/images/'+merchant.merchantImage}
                     :require("../assets/UserOrange.png") } 
                  style={styles.image}
                />
                
            </View>

            <View>
               <Text
                    style={styles.small, props.grayed ? styles.grayed : styles.normal}
               >
                  Samer Ltifi 
                {/* { typeof(merchant) === object ?
                    `${merchant.firstName} ${merchant.lastName} `
                  : props.infos.ardoise.client ? 
                  `${props.infos.ardoise.client.firstName} ${props.infos.ardoise.client.lastName} ` : 'Mohamed Ghorbel'
                } */}
               </Text>

               <Text style={styles.smaller}>
                    Appuyez pour voir les détails.
                </Text>
            </View>

            
          </View>


        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    borderRadius: 3,
    marginTop: "5%",
    height: h(10.3),
    width: w(92),
    alignSelf: "center",
    borderRadius:8
  },
  grayed: {
    color: "#B0AEAE",
  },
  normal: {
    color: "#485c54",

  },
  title: {
    textAlign: "left",
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "#485c54",
  },
  small: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),fontWeight:'bold'
  },
  smaller: {
    color: "#B0AEAE",
    textAlign: "left",
    fontSize: RFValue(11),
  },
  imgContainer:{
    width: w(8),
    height: w(8),
    marginRight:'2%',
    marginTop:'0.5%',
    marginBottom: '0.5%',
  },
  image: {
    height: "100%",
    width: "100%",
  },
  orderState:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:'3%',
    marginBottom:'1%',
    alignItems: 'center'
  }
});

export default Item2;
