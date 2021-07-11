import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Divider from "react-native-divider";
import { Provider } from "react-native-paper";

import { RFValue } from "react-native-responsive-fontsize";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h } from "../utils/Size";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import Item1 from "../components/componentsClient/Item1";
import OrderItem from "../components/componentsClient/OrderItem";
import { Context as SoukiContext } from '../contexts/Auth.context';
import { GlobalContext as OrderContext} from '../contexts/ProductsCatalog.context';

export default function ProfilMarchand({ navigation,route}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const navToListemarchands = () => navigation.navigate("Listemarchands");

  //const {globalState} = useContext(SoukiContext);

  const { products,editproduct,removeproduct } = useContext(OrderContext)

  console.log("ddd",products);



  const sendOrder = ()=>{
    console.log('send order')
  }

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
              action={()=>console.log(products)}
            />

            {
              products.filter(item=> item.owner === route.params.merchantID).map((item)=>
                <OrderItem
                  key={item._id}
                  product={item}
                  editProduct={editproduct}
                  removeProduct={removeproduct}
                />
              )
            }

        
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(15) }}>
                Options de la commande
              </Text>
            </Divider>
            <Item1 title="Mode de payement" description="Crédit total" myItem />
            <Item1 title="Livraison" description="Oui" myItem />
            <GreenBtn 
              myGreenBtn 
              title="Envoyer la commande"
              style={{marginTop:10}}
              action={()=>sendOrder()}
            />
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
});
