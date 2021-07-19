import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {w,h,totalSize} from '../utils/Size';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableRipple } from "react-native-paper";
import { Primary } from '../constants/Colors';
import { categories, subCategory } from "../constants/Arrays";
import SubCategory from './SubCategory';

const Catalog = ({item,categIndex,subCategIndex}) => {

    //console.log('categ render');

    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);



  return (
    <View  style={{marginBottom: h(1)}}>
      <TouchableRipple style={styles.rippleStyle} onPress={handlePress}>
        <View style={styles.cardContainer}>
        {categories[categIndex].icon(styles.icon)}
        <View style={styles.txtContainer}>
          <Text style={styles.txt1}>{categories[categIndex].name}</Text>
        </View>
        
        <View style={styles.iconContainer} >
          <AntDesign onPress={handlePress}
            name={expanded ? "minus" : "plus"}
            size={totalSize(3.5)}
            color="black"
           />
        </View>
        </View>
      </TouchableRipple>
{/* //selecting the subcategory table and mapping it */}
      { expanded && 

        subCategory[subCategIndex].map((subItem,subCategIndex)=>
            <SubCategory 
             key={subCategIndex}
             name={subItem.name}
             sub={subItem}
             categ={categIndex}
             subCateg={subCategIndex}
            />)
      } 
    </View>
   

  );
};

export default Catalog;

const styles = StyleSheet.create({
  rippleStyle: {
    borderWidth: 0.3,
    borderBottomWidth: 0,
    elevation: 1,
    
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer : {
    width: w(12),
    height: w(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F5',
    borderLeftWidth: 0.3
  },
  icon:{
    width:w(12),
    height:w(12)
  },
  txtContainer:{
    flex:1,
    paddingLeft: 15,
  },
  txt1: {
    fontSize: RFPercentage(2.4)
  },
  treeLayout: {
    paddingLeft: w(12) + 0.3
  },
  treeLine: {
    width: (w(12) / 2) -5,
    height: (w(12)/2) + h(2)- 5 ,
    borderLeftWidth: 2,
    borderBottomWidth:1,
    borderColor: Primary
    
  },
  LineContainer: {
    flexDirection: 'row-reverse',
    width: w(12),
    height: w(12),
    marginTop: 5,
    paddingLeft : 5,

  },
});