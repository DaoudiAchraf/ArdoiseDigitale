import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {URL  } from "../services/Client";
import { w, h } from "../utils/Size";

const Item2 = (props) => {

 const { merchant } = props.infos;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation && props.navigation()}
    >
      <View style={{ flexDirection: "row", marginTop: "-5%" }}>


        <View style={{ width: w(87), margin: "4%", marginLeft: "2%" }}>
          <Text
            style={styles.title}
          >
            {"Commande Accepté"}
          </Text>

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
                {`${merchant.firstName} ${merchant.lastName} `}
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
  badge: {
    position: "absolute",
    right: "101.7%",
    top: "1.7%",
    backgroundColor: "#DC2C23",
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    borderRadius: 3,
    marginTop: "5%",
    height: h(9.5),
    width: w(92),
    alignSelf: "center",
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
    fontSize: RFValue(11),
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
});

export default Item2;
