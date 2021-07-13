import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Divider from "react-native-divider";

import { RFValue } from "react-native-responsive-fontsize";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h } from "../utils/Size";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import Item1 from "../components/componentsClient/Item1";
import OrderItem from "../components/componentsClient/OrderItem";
import clientService from '../services/Clientt';
import { GlobalContext as OrderContext} from '../contexts/ProductsCatalog.context';
import { color } from "../constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ProfilMarchand({ navigation,route}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const navToListemarchands = () => navigation.navigate("Listemarchands");

  //const {globalState} = useContext(SoukiContext);

  const { products,editproduct,removeproduct } = useContext(OrderContext)

  const { currentMerchant,ardoiseId } = route.params;

 

  const sendOrder = async()=>{

    //navigation.pop();
    //navigation.pop();
    
    navigation.replace('Notification');

    console.log('send order')

    // const result = await clientService.sendOrder({products,ardoise: ardoiseId});
    // if(result.ok)
    //   console.log(result.data);
 
    //   console.log(result)
   // console.log(products);
  }

  let total=0;

  const myOrder = products.filter(item=> {

    if(item.owner === currentMerchant.user)
    {
      total+=+item.price*item.quantity;
      return true;
    }
  });
   
    

  // useEffect(()=>{
  //    console.log("mosaique, myOrder.length ",myOrder)
  // }
   
  //   ,[myOrder.length])

  return (
    <View style={{ backgroundColor: "#324B3E" ,flex:1}}>
      
        <MyAppbar title="Nouvelle commande" navigation={navigation} />
        <FondPageMarchand style={styles.svg} />
        <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <View style={styles.contentView}>
          <CardClient
            myCard
            title="Target Express"
            small="751 Green Hill Dr. Webster,"
            smaller="NY 14580"
            merchant="Kristin"
            text1="Livraison disponible."
            text2="Accepte le paiement comptant et par crédit total."
            source={require("../assets/assets/targetexpress.jpg")}
            commandecree="12/12/2020 à 10h30"
          />
         

          <View
            style={{
              width: "100%",
              alignSelf: "center",
              marginTop : '3%'
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(15) }}>Liste des produits</Text>
            </Divider>
            <GreenBtn 
              myGreenBtn 
              title="Ajouter des produits"
              action={()=>navigation.pop()}
            />

          {myOrder.length === 0 &&
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons name="cart-remove" size={100} color={color.INFO_TEXT} />
              <Text style={styles.emptycart}>Votre panier de commmande est vide </Text>
            </View>
          }   
            
            {
             myOrder.map((item)=>
                <OrderItem
                  key={item._id}
                  product={item}
                  editProduct={editproduct}
                  removeProduct={removeproduct}
                />
              )
            }

              <View style={styles.divider}/>
            {/* <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(15) }}>
                Options de la commande
              </Text>
            </Divider> */}
            {/* <Item1 title="Mode de payement" description="Crédit total" myItem />
            <Item1 title="Livraison" description="Oui" myItem /> */}
            {myOrder.length !== 0 &&
            <View style={styles.orderSettings}>
              <View style={styles.orderPrice}>
                <Text style={{...styles.totalpriceTxt,fontSize:RFValue(19)}}>
                  Totale   :
                </Text>
                <Text style={styles.totalpriceTxt}>{total} DT</Text>
              </View>
              <GreenBtn 
              myGreenBtn 
              title="Envoyer la commande"
              style={{marginTop:'5%'}}
              action={()=>sendOrder()}
              grayed={myOrder.length === 0}

            />
            </View>
            }

      
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    alignSelf: "center",
    width: w(80),
    marginTop: h(7),paddingBottom: 50
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  orderPrice:{
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',opacity:0.7

  },
  orderSettings:{
    backgroundColor: color.WHITE,
    padding: '5%',
    paddingBottom: '1%'
  },
  totalpriceTxt:{
    fontSize: RFValue(17),
    fontWeight: 'bold',
    color: color.Primary
  },
  emptycart:{
    color: color.INFO_TEXT,
    fontSize: RFValue(15)
  },
  divider:{
    borderWidth:0.5,
    width:'100%',
    borderColor:color.WHITE,
    marginTop: '5%',
    marginBottom: '5%',
  }
});
