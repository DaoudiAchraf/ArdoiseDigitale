import React, { useState } from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { h, totalSize, w } from "../../utils/Size";
import { MaterialIcons } from '@expo/vector-icons';
import { Divider,Badge } from 'react-native-paper';
import { color } from "../../constants/Colors";
import {categories,subCategory as subCategories} from '../../constants/Arrays';
import { setAlert } from "../Alert";

const OrderItem = ({product,editProduct,removeProduct}) => {

  const {productName,quantity,category,subCategory,price,_id} = product;

  const editQuantity =(operator)=>{
    if(operator<0 && product.quantity+operator === 0)
    return;
    product.quantity=product.quantity+operator;
    editProduct(product);
  }

  const withdrawProduct =()=>{
    Alert.alert(
      'Retirer produit',
      `êtes-vous sûr de vouloir supprimer ${productName} de votre commande`,
      [
        {
          text: 'Annuler',
        },
        { text: 'Retirer', onPress: () => removeProduct(_id) }
      ]
    );
  }
  return(
  <View style={styles.container}>
    <View style={styles.header} >
        <View style={{padding:'2%',paddingLeft:'4%'}}>
            <Text style={styles.titleTxt}>{productName}</Text>
            <Text style={styles.CategoryTxt}>
              {categories[category].name} » {subCategories[category][subCategory].name}
            </Text> 
        </View>

        <Text style={{padding:'3%'}}>{price} DT</Text>
       
    </View>
    <Divider  style={{borderWidth:0.3,borderColor: color.INFO_TEXT}} />
    <View style={styles.footer}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <TouchableOpacity 
            style={styles.borderBtn}
            onPress={()=>editQuantity(1)}
          >
              <Badge 
              style={{backgroundColor: color.Secondary}}
              size={totalSize(2.7)}
              >
                  +
              </Badge>
          </TouchableOpacity>
      
          <Text
                  style={{
                    fontSize: RFValue(14),
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  x {quantity}
                </Text>

          <TouchableOpacity 
            style={styles.borderBtn}
            onPress={()=>editQuantity(-1)}
          >
              <Badge
              size={totalSize(2.7)}
              style={{backgroundColor: color.Secondary}}
              >
                  -
              </Badge>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={withdrawProduct}>
            <MaterialIcons 
               name="delete"
               size={totalSize(2.7)}
               color={color.Secondary}
            />
        </TouchableOpacity>
        
    </View>
  </View>
);
}

export default OrderItem;

const styles = StyleSheet.create({
  indisponible: {
    backgroundColor: "lightgrey",
  },
  badge: {
    position: "absolute",
    left: "90%",
    top: "9%",
    color: "#324B3E",
    backgroundColor: "transparent",
  },
  borderBtn: {

  },
  container:{
    flex:1,
    marginBottom:10,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  footer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',padding:'0.8%' ,paddingLeft:'4%'
  },
  titleTxt:{
    color: "#485c54",
    fontSize: RFValue(13),
    marginBottom: "1%",
    fontWeight: "bold",
  },
  CategoryTxt:{
    color: "#485c54",
    fontSize: RFValue(11),
    marginBottom: "1%",
    fontWeight: "bold"
  }
});
