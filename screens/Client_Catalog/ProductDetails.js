import React,{useContext, useState} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import COLORS from '../../screens/consts/colors';
import { color } from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { URL } from '../../services/Client';
import { totalSize } from '../../utils/Size';
import { Context as SoukiContext } from '../../contexts/Auth.context';
import { GlobalContext as OrderContext } from '../../contexts/ProductsCatalog.context';


const DetailsScreen = ({navigation, route}) => {
  const plant = route.params;

  const {_id,productName,photo,price,unit,description,attributes } = route.params;
  
  const { products,addproduct,editproduct,removeproduct } = useContext(OrderContext);

  const product = products.find((item => item._id === _id));

  //console.log("render from details" , order)

  const makeOrder = (operator)=>{
    if(!product)
      addproduct({...route.params,quantity:1});
    else if(product.quantity+operator > 0)
      editproduct({...product,quantity: product.quantity+operator});
    else
      removeproduct(_id);
  }



  return (

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.Primary,
        paddingBottom: "5%",
      }}>
      <View style={style.header}>

        <AntDesign 
          name="arrowleft" 
          size={totalSize(4)}
          color="black"
          onPress={() => navigation.goBack()} />
    
      </View>
      <View style={style.imageContainer}>
        <Image source={{uri:URL+'/images/'+photo}} style={style.imageStyle} />
      </View>


      <View style={style.detailsContainer}>

        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
             
          <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>{productName}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: color.WHITE,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${plant.price}
            </Text>
          </View>
        </View>

      

        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: RFValue(15),color: 'grey'}}>
            {description}
            dfsfsfsdsdf dsdsfdsfdfsd dfdfdffsf sdfsdfdsf sdfsdsfds
            sfddfd sdfdsfs dssddsfsfsdf dsfdssdfsdf sdsdfsdf
            dfsfsfsdsdf dsdsfdsfdfsd dfdfdffsf sdfsdfdsf sdfsdsfds

            
  
          </Text>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {/* Quantité : */}
          </Text>
          <View
            style={{
              marginTop: '1%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flex:1
              }}>

            {product ?
              <View style={{flexDirection: 'row',alignItems:'center'}}>

                <TouchableOpacity 
                  style={style.borderBtn}
                  onPress={()=>makeOrder(-1)}
                >
                  <Text style={style.operatorStyle}>-</Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  x {product.quantity}
                </Text>

                <TouchableOpacity 
                  style={style.borderBtn}
                  onPress={()=>makeOrder(1)}
                >
                  <Text style={style.operatorStyle}>+</Text>
                </TouchableOpacity>

         
              </View>
              :<TouchableHighlight
                 onPress= {makeOrder}
                 underlayColor='none'
               >
  
                  <View style={style.buyBtn}>
                    <Text
                    style={{color: COLORS.white, fontSize: RFValue(15), fontWeight: 'bold'}}
                    >
                    Commander
                  </Text>
                  </View>
               
              </TouchableHighlight>
            }
 
        


            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle:{
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  detailsContainer: {

    backgroundColor: COLORS.light,
    marginHorizontal: '5%',
    marginBottom: "15%",
    borderRadius: 20,
    marginTop: "3%",
    paddingTop: "5%",
    paddingBottom: "5%"
  

  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    width: totalSize(5),
    height: totalSize(5),
    borderRadius: totalSize(10),
    backgroundColor: color.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: totalSize(20),
    height: totalSize(5),
    backgroundColor: color.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: totalSize(3),

  },
  priceTag: {
    backgroundColor: color.Secondary,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  operatorStyle:{
    fontWeight: 'bold',
    color: color.WHITE,
    fontSize: RFValue(18)
  }
});

export default DetailsScreen;
