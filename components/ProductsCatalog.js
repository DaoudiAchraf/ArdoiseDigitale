import React, { useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {w,h,totalSize} from '../utils/Size';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableRipple } from "react-native-paper";


const Catalog = () => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    

  return (
    <View>
      <TouchableRipple style={styles.rippleStyle} onPress={handlePress}>
        <View style={styles.cardContainer}>
        <Image
          style={styles.icon}
          source={require('../assets/icon.png')}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txt1}>cat name</Text>
        </View>
        
        <View style={styles.iconContainer} >
           <AntDesign onPress={handlePress} name={expanded ? "minus" : "plus"} size={24} color="black" />
        </View>
        </View>
      </TouchableRipple>

      {expanded && <>
        <View style={{flexDirection:'row'}}>
          <View style={styles.LineContainer}>
            <View style={styles.treeLine}/>
          </View>
          <View style={styles.itemContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/icon.png')}
            />
            <View style={styles.txtContainer}>
              <Text style={styles.txt2}>cat name</Text>
            </View>
            
            <View style={styles.iconContainer} >
              <AntDesign onPress={handlePress} name={expanded ? "minus" : "plus"} size={24} color="black" />
            </View>
          </View>

        </View>

      </>
      }
    </View>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  rippleStyle: {
    borderWidth: 0.3,
    borderBottomWidth: 0,
    elevation: 1
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
    fontSize: RFPercentage(3)
  },
  txt2: {
    fontSize: RFPercentage(2.7)
  },
  itemContainer: {
    marginTop: h(2),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
  },
  treeLayout: {
    paddingLeft: w(12) + 0.3
  },
  treeLine: {
    width: (w(12) / 2) -5,
    height: (w(12)/2) + h(2)- 5 ,
    borderLeftWidth:1,
    borderBottomWidth:1
  },
  LineContainer: {
    flexDirection: 'row-reverse',
    width: w(12),
    height: w(12),
    borderWidth: 0,
    marginTop: 5,
    paddingLeft : 5,
    
  }
});


