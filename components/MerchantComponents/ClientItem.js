import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo } from '@expo/vector-icons'; 
import { h, w } from "../../utils/Size";
import { color } from "../../constants/Colors";
import {Linking} from 'react-native'

const ClientReviewItem = ({ name, address, img, text, commande ,call,phone}) => {
  return (

    <TouchableOpacity style={styles.item} onPress={()=>Linking.openURL(`tel:${phone}`)}>
      <View style={{ marginBottom: "3%", flexDirection: "row" }}>
        <Image style={styles.img} source={img || commande.client.img} />
        <View style={{ marginLeft: "3%" ,flex:1}}>
          <Text style={styles.name}>{name || commande.client.name}</Text>
          <Text style={styles.date}>{address || commande.client.address}</Text>
        </View>

        {call &&
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="phone" size={RFValue(25)} color={color.lightPrimary} />
                <Text style={{fontSize:RFValue(10)}} >contacter</Text>
              </View>
        }

        
      </View>

      {commande && (
        <View>
          {/* <View style={{ marginBottom: "3%" }}>
            <Text style={styles.date}>{commande.client.history}</Text>
          </View> */}
          <View style={{borderWidth:1,marginTop:'2%'}}/>
          {commande.dateOfCreation && (
            <Text style={styles.date}>
              <Text style={{ fontWeight: "bold" }}>
                {commande.dateOfCreation}
              </Text>
              {" : Commande crée "}
              {/* <Text key="9" style={{ fontWeight: "bold" }}>
                {commande.client.name}
              </Text> */}
            </Text>
          )}
          {!commande.offer.onHold && [
            commande.offer.sent ? (
              <Text key="1" style={styles.date}>
                <Text key="2" style={{ fontWeight: "bold" }}>
                  {commande.offer.date}
                </Text>
                {" : Offre de prix envoyée"}
              </Text>
            ) : (
              <Text key="3" style={styles.date}>
                <Text key="4" style={{ fontWeight: "bold" }}>
                  {commande.offer.date}
                </Text>
                {" : Offre de prix n'est pas envoyée"}
              </Text>
            ),
          ]}
          {commande.response.sent && [
            commande.response.res ? (
              <Text key="5" style={styles.date}>
                <Text key="6" style={{ fontWeight: "bold" }}>
                  {commande.response.date}
                </Text>
                {" : Offre de prix acceptée par "}
                <Text key="10" style={{ fontWeight: "bold" }}>
                  {commande.client.name}
                </Text>
              </Text>
            ) : (
              <Text key="7" style={styles.date}>
                <Text key="8" style={{ fontWeight: "bold" }}>
                  {commande.response.date}
                </Text>
                {" : Offre de prix refusée par "}
                <Text key="11" style={{ fontWeight: "bold" }}>
                  {commande.client.name}
                </Text>
              </Text>
            ),
          ]}
          {commande.ready.ready && (
            <Text style={styles.date}>
              <Text style={{ fontWeight: "bold" }}>{commande.ready.date}</Text>
              {" : Commande préparée "}
            </Text>
          )}
          {commande.payment.payed && (
            <Text style={styles.date}>
              <Text style={{ fontWeight: "bold" }}>
                {commande.payment.date}
              </Text>
              {" : Commande payée/terminée par "}
              <Text key="12" style={{ fontWeight: "bold" }}>
                {commande.client.name}
              </Text>
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ClientReviewItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: "3%",
    borderRadius: 3,
    marginTop: "5%",
    elevation: 4,
  },
  name: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(17),
    fontWeight: "bold",
  },
  date: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
  },
  text: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(10),
  },
  img: {
    alignSelf: "center",
    width: w(9),
    height: h(5),
  },
});
