import React,{useState} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import COLORS from '../../screens/consts/colors';
import { color } from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { URL } from '../../services/Client';

const DetailsScreen = ({navigation, route}) => {
  const plant = route.params;

  console.log("product ",route.params);

  const { productName,photo,price,unit,description,attributes } = route.params;

  const [quantity,setQuantity] = useState(1);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        {/* <Icon name="arrow-back" size={28}  /> */}
        <Entypo name="shop" size={28} color="black" onPress={() => navigation.goBack()} />
        <Entypo name="shop" size={28} color="black" />
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
          <Text style={{fontSize: RFValue(15), fontWeight: 'bold'}}>
            {description}
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity 
                style={style.borderBtn}
                onPress={()=> quantity>1 && setQuantity(quantity-1)}
              >
                <Text style={style.borderBtnText}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                {quantity}
              </Text>
              <TouchableOpacity style={style.borderBtn}
                onPress={()=>setQuantity(quantity+1)}
              >
                <Text style={style.borderBtnText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
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
    marginTop: 20,
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
    flex: 1,
    backgroundColor: COLORS.light,
    marginHorizontal: '5%',
    marginBottom: "3%",
    borderRadius: 20,
    marginTop: "3%",
    paddingTop: "5%",

  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: color.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: color.Secondary,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
