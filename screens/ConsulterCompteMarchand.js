import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
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
import { totalSize, w } from "../utils/Size";
import CalloutCard from "../components/Client_UI/CalloutCard";

import GreenBtn from "../components/componentsClient/GreenBtn";
import RedBtn from "../components/componentsClient/RedBtn";
import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import PlusMinus2 from "../components/componentsClient/PlusMinus2";
import { RFValue } from "react-native-responsive-fontsize";
import { Context } from "../contexts/Auth.context";
import { ProgressBar, ActivityIndicator, Colors } from "react-native-paper";
import Item2 from "../components/componentsClient/Item2";
import { color } from "../constants/Colors";
import CommonServices from "../services/Common";
import OrderCardViewer from "../components/OrderCardViewer";
import { AntDesign } from '@expo/vector-icons'; 
import PaymentSVG from "../assets/svgr/Credit"; 

function ConsulterCompteMarchand({ navigation,route }) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const [isMinus, setIsMinus] = useState(false);
  const [isMinus1, setIsMinus1] = useState(false);
  const [isMinus2, setIsMinus2] = useState(false);
  const navToHistoriquePaiements = () =>
    navigation.navigate("HistoriquePaiements");
  const navToConsulterArdoiseFermee = () =>
    navigation.navigate("ConsulterArdoiseFermee");
  const navToProfilMarchand = () => navigation.navigate("ProfilMarchand");

  const navToListemarchands = () => navigation.navigate("Listemarchands");

  const { ardoise } = route.params;
  
  const currentMerchant = ardoise.merchant;


  const [orders,setOrders] = useState([]);


  useEffect(()=>{

   const fetchOrders = async ()=>{
   const result = await CommonServices.getOrders(ardoise._id);
   if(result.ok && result.data.length>0)
      setOrders(result.data);
      console.log("get orders",result.data);
  }

  fetchOrders();

  },[])

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
            title="Name"
            subtitle="Vous avez 3 nouvelles notifications"
            navigation={navigation}
          />
          <Image
            style={styles.image}
            source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
          />

          <View style={{ marginTop: "10%" }}>
            <CardClient
              title={currentMerchant.firstName}
              small="Green Hill"
              smaller="NY 145230"
              merchant={currentMerchant.firstName}
              text1="Livraison disponible"
              text2="Accepte le paiement comptant "
              source={require("../assets/assets/user.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginRight: "8%",
              marginLeft: "8%",
            }}
          >
            <View
              style={{
                width: "40%",
                alignSelf: "center",
              }}
            >
              <RedBtn action={showDialog} title="Fermer l'ardoise" />
              <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title>
                    <Text style={{ color: "#324B3E", fontSize: RFValue(25) }}>
                      Fermeture d'ardoise
                    </Text>
                  </Dialog.Title>
                  <Dialog.Content>
                    <Paragraph style={{ fontSize: RFValue(13), color: "grey" }}>
                      Etes-vous surs de vouloir fermer votre ardoise avec
                      Kristen Harper?
                    </Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <RedBtn
                      title="Fermer l'ardoise"
                      action={navToConsulterArdoiseFermee}
                    ></RedBtn>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>

        
            <View style={{ width: "60%", alignSelf: "center" }}>
              <GreenBtn
                title=" Passer une commande"
                action={
                  () => {navigation.navigate("MerchantCatalog",{
                    currentMerchant,
                    ardoiseId: ardoise._id
                  })}
                }
              />
            </View>
          </View>


          <View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
                marginBottom: '2.5%'
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                 
                }}
              >
                <Divider  borderColor="#fff" color="#fff" orientation="center">
                  <Text style={{ fontSize: RFValue(15.5) }}> Mes commandes ({orders.length})</Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
              </View>
            </View>
            {isMinus && 
                <FlatList
                  numColumns={1}
                  contentContainerStyle={{
                  width:'100%',
                  paddingLeft:'10%',
                  paddingRight:'12%',
                  alignSelf:'center'
                  }}
                  data={orders}
                  keyExtractor={(item) => item._id}
                  renderItem={({item}) => {
                    return <OrderCardViewer order={item} />;
                  }}
                />
            }
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <Divider borderColor="#fff" color="#fff" orientation="center">
                  <Text style={{ fontSize: RFValue(17) }}> Ardoise</Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus isMinus2={isMinus2} setIsMinus2={setIsMinus2} />
              </View>
            </View>

            {isMinus && <View></View>}
          </View>
          {/* <View style={{  
                marginTop: "5%",
                marginBottom: "5%",
                marginLeft: "30%",
                marginRight: "37%",}}  >
                  <ActivityIndicator animating={true} color={Colors.white} />
       
          </View> */}

          <View
            style={{
              width: "95%",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
            
                alignItems: "center",
                alignSelf: "center",
                width: "83%",
                borderRadius: 3,
                backgroundColor: '#F5F5F5',
                borderWidth: 2
              }}
            >
              <View
                style={{
                  padding: "5%",
                }}
              >
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                  <AntDesign
                     name="profile" 
                     size={24} 
                     color="black" 
                     style={{marginRight: '3%'}}
                  />
                  <Text style={{ color: "grey", fontSize: RFValue(13) }}>
                 Mes anciens
                </Text>
                </View>
                
                <Text style={{ color: "grey", fontSize: RFValue(13) }}>
                  Un total de 150 MAD à payer le 12/12/2020
                </Text>
              </View>
    

              <TouchableOpacity>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: '2%',
                borderColor:color.Primary,
                borderWidth:0.8,borderRadius:50}}>
                <PaymentSVG width={30} height={30}/>
                 <Text style={{fontSize:RFValue(13),fontWeight:'bold'}} >Payer </Text>
              </View>
                
              </TouchableOpacity>
              
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: "5%",
            }}
          >
            <View
              style={{
                width: "50%",
                alignSelf: "center",
              }}
            >
              <GreenBtn
                title="Historique des paiements"
                action={navToHistoriquePaiements}
              />
            </View>
            <View style={{ width: "50%", alignSelf: "center" }}>
              <GreenBtn
                title=" Payer maintenant"
                action={navToHistoriquePaiements}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
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
                    {" "}
                    Avis des clients
                  </Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
              </View>
            </View>

            {isMinus && <View></View>}
          </View>
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

export default ConsulterCompteMarchand;
