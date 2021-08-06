import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { h, totalSize } from '../../utils/Size';
import TouchableIcon from '../TouchableIcon';
import { AntDesign } from '@expo/vector-icons';
import Input from '../Input';
import DropDown from '../DropDown';
import { RFPercentage } from 'react-native-responsive-fontsize';

const ProductAttributes = ({attributes,setAttributes})=>{


    const [quantity,setQuantity] = useState();
    const [qualifier,setQualifier] = useState('Kg');
  
    const addItem = ()=>{
      setAttributes([
          ...attributes,
          {quantity,qualifier}
      ]);
    }
  
    const deleteItem = (index)=>{
      attributes.splice(index, 1);
      setAttributes([...attributes]);
    }
    
    //console.log(attributes.length ===0);
    return (
        <>
      <View style={styles.rowContainer}>
        <View style={{flex:1}} >

            <Input
              mode="outlined"
              value={quantity}
              handleChange={setQuantity}
            />
        </View>

        <View style={{flex:1,justifyContent:'flex-end',marginRight:'1.5%',marginLeft:'1.5%'}}>
              <DropDown
                mode='boxed'
                selectedItem={qualifier}
                items={['Kg','Litre','Inch']}
                handleChange={setQualifier}
              />
          </View>

          <TouchableIcon onPress={addItem} 
            style={{borderWidth:0.5,width:totalSize(6),height:totalSize(6.5)}}>
            <AntDesign name="plus" size={totalSize(3)} color="black" />
          </TouchableIcon>

          </View>

            {
                attributes.length > 0 && 
                    <View style={styles.container}>
                    {attributes.map((item,index)=>
                    <View key={index} style={styles.card}>
                    <View style={styles.cardLeft}>
                        <Text>{item.quantity}</Text>
                        <Text>{item.qualifier}</Text>
                    </View>

                    <TouchableIcon onPress={()=>deleteItem(index)} style={{width:totalSize(5),height: totalSize(5)}}>
                        <AntDesign name="delete" size={totalSize(2.3)} color="black" />
                    </TouchableIcon>
                    </View>
                    )}

            </View>
            }

        </>
    )
}

export default ProductAttributes;

const styles = StyleSheet.create({

    rowContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: h(1)
      },

    container:
    {
        flex: 1,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        borderWidth: 0.5,
        padding: '3%'
    },

    card:{
        flexDirection:'row',
        marginBottom: '3%',
        borderRadius: 2,
        borderWidth: 0.5
    },
    cardLeft:{
        flex:1,
        flexDirection: 'row',
        paddingLeft: totalSize(1),
        paddingRight: totalSize(1),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRightWidth: 0.5,
        backgroundColor: 'white'
    },

})
