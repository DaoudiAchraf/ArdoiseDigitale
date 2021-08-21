import React, { useState,useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import CardClient from "../components/componentsClient/CardClient";
import {
  Provider,
  Button,
  Dialog,
  Portal,
  Paragraph,
} from "react-native-paper";
import { w } from "../utils/Size";
import CalloutCard from "../components/Client_UI/CalloutCard";

import GreenBtn from "../components/componentsClient/GreenBtn";
import RedBtn from "../components/componentsClient/RedBtn";
import ClientProfilOrders from "../components/componentsClient/ClientProfilOrders";

import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import PlusMinus2 from "../components/componentsClient/PlusMinus2";
import { RFValue } from "react-native-responsive-fontsize";
import ClientItem from "../components/MerchantComponents/ClientItem";
import ClientReviewItem from "../components/Client_UI/ClientReviewItem";

import ClientFondBtnMarchand from "../assets/svgr/ClientFondBtnMarchands.jsx";
import merchantService from "../services/Trader";
import { Feather } from '@expo/vector-icons'; 
import CommonService from "../services/Common";

function MerchantProfilClient({ navigation,route }) {

 // const {ardoiseId} = route.params;
  const {client, ardoiseId}= route.params;

  const [orders,setOrders] = useState([]);
  
  const fetchOrders = async()=>{
    const response = await CommonService.getOrdersByArdoise(ardoiseId);
    {
      console.log(response.data);setOrders(response.data);
    }
      
  }

  useEffect(()=>{
      fetchOrders();
  },[])
  

  const [accepted, setAccepted] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(true);
  const [isMinus2, setIsMinus2] = useState(true);

  

  console.log('ccccccccccccccccccc',client);

  const changeState = ()=>{
    console.log('state Changed')  }

  //{ ardoise, _id, date:2021-08-11T14:33:08.944+00:00 }
  const navTo_NewOrder =(item)=>{
    
    navigation.navigate('MerchantClientOrder',
    {...item,client:client,setOrders:setOrders })
  }

  const navTo_activeOrder = ()=>{
    navigation.navigate('MerchantClientOrder')
  }

  const navTo_finishedOrder = ()=>{
    navigation.navigate('MerchantClientOrder')
  }

  const renderClientOrderDetail = ({item})=>{
   // console.log("iteemmmmmmmmmmmm",item);
   

  const {currentState} = item;

  let orderState;

  //  currentState === 'pending' ? 
  //  orderState = 'Commande crée' 
  //   :(   
  //    currentState === 'response' ?
  //     (item.status.res ? orderState ='Offre de prix envoyé': 'Commande refusé') 
  //     :(currentState === 'ready' ? 'Commande prête ':null)
  //   )
  console.log('sssssss',currentState);
    switch(currentState) {
      case 'pending':
          orderState = 'Nouvelle commande' 
        break;
      case 'response':
          (item.status.res ? orderState ='Commande accepté': 'Commande refusé')
        break;
      case 'offre':
          orderState = 'Offre de prix envoyé'
        break;
      case 'ready':
          orderState ='Commande prête'
        break;
    }

    console.log("yuyuyuyuyuyuyu");
    console.log(orderState);
 
    return(
    <ClientProfilOrders
    title={orderState}
    small="le 12/12/2020 à 10h30"
    smaller="Appuyez pour voir les détails."
    source={require("../assets/assets/icons/client-fond-btn-commande.png")}
    ardoise
    navigation={()=>navTo_NewOrder(item)}
  />)
  }
  return (
    <View style={{ flex: 1 }}>
      <Provider>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#324B3E",
          }}
        >
          <Myappbar
            navigation={navigation}
            title="Profil client"
          />
          <View style={{ position: "absolute", right: "-5%" }}>
            <ClientFondBtnMarchand />
          </View>
          <View style={{ marginTop: "10%", width: "93%", alignSelf: "center" }}>
            <ClientItem
              name= {`${client.firstName} ${client.lastName}`}
              address={client.address.location.label}
              phone={client.phoneNumber}
              img={require("../assets/assets/user.png")}
              call
            />
          </View>
 

         
            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: "10%",
                }}
              >
                <View
                  style={{
                    width: "90%",
                    alignSelf: "center",
                  }}
                >
                  <Divider borderColor="#fff" color="#fff" orientation="center">
                    <Text style={{ fontSize: RFValue(17) }}>Commandes</Text>
                  </Divider>
                </View>

                <View style={{ width: "10%", alignSelf: "center" }}>
                  <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
                </View>
              </View>

              {isMinus && (
                <View>


                <FlatList
                  numColumns={1}
                  contentContainerStyle={styles.orderContainer}
                  data={orders}
                  keyExtractor={(item) => item._id}
                  renderItem={renderClientOrderDetail}
                />  
                  <ClientProfilOrders
                    title="Commande prête"
                    small="le 12/12/2020 à 10h30"
                    smaller="Appuyez pour voir les détails."
                    source={require("../assets/assets/icons/client-fond-btn-commande.png")}
                    ardoise
                  />
                  <ClientProfilOrders
                    title="Commande terminée"
                    small="le 12/12/2020 à 10h30"
                    smaller="Appuyez pour voir les détails."
                    source={require("../assets/assets/icons/client-fond-btn-commande.png")}
                    grayed
                  />
                </View>
              )}

              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: "10%",
                  marginVertical: "3%",
                }}
              >
                <View
                  style={{
                    width: "90%",
                    alignSelf: "center",
                  }}
                >
                  <Divider borderColor="#fff" color="#fff" orientation="center">
                    <Text style={{ fontSize: RFValue(17) }}>Ardoise</Text>
                  </Divider>
                </View>

                <View style={{ width: "10%", alignSelf: "center" }}>
                  <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
                </View>
              </View>

              {isMinus1 && (
                <View
                  style={{
                    backgroundColor: "white",
                    elevation: 4,
                    borderRadius: 3,
                    alignSelf: "center",
                    width: "93%",
                    alignItems: "center",
                    padding: "3%",
                  }}
                >
                  <Text style={{ color: "grey", fontSize: RFValue(13) }}>
                    Un total de{" "}
                    <Text style={{ fontWeight: "bold" }}>150 MAD</Text> à payer{" "}
                    <Text style={{ fontWeight: "bold" }}>le 12/12/2020</Text>
                  </Text>
                </View>
              )}
            </View>
     

          <View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: "10%",
                marginVertical: "3%",
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <Divider borderColor="#fff" color="#fff" orientation="center">
                  <Text style={{ fontSize: RFValue(17) }}>
                    Avis des commerçants
                  </Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus2 isMinus2={isMinus2} setIsMinus2={setIsMinus2} />
              </View>
            </View>
          </View>
          {isMinus2 && (
            <View
              style={{ width: "93%", alignSelf: "center", marginBottom: "10%" }}
            >
              <ClientReviewItem
                name="Sam Irving"
                date="12/12/2020 à 10h30"
                img={require("../assets/SamIrving.png")}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tortor vitae erat sollicitudin fringilla ac id felis."
              />
            </View>
          )}
        </ScrollView>
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-10%",
  },
});

export default MerchantProfilClient;

/*

<Image
            style={styles.image}
            source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
          />

          */
