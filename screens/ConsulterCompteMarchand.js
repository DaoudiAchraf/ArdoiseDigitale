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
  Alert,
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
import { LogBox } from "react-native";
import { GlobalContext as OrderContext } from "../contexts/ProductsCatalog.context";
import { ProgressBar, ActivityIndicator, Colors } from "react-native-paper";
import Item2 from "../components/componentsClient/Item2";
import { color } from "../constants/Colors";
import CommonServices from "../services/Common";
import OrderCardViewer from "../components/OrderCardViewer";
import { AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
import PaymentSVG from "../assets/svgr/Credit";
import moment from "moment";
import Review from "../components/Review";
import ClientReviewItem from "../components/Client_UI/ClientReviewItem";
import EmptyList from "../components/EmptyList";
import FondPageMarchands from "../assets/svgr/FondPageMarchands.jsx";

function ConsulterCompteMarchand({ navigation, route }) {
  const [reviewVisible, setReviewVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [isMinus, setIsMinus] = useState(false);
  const [isMinus1, setIsMinus1] = useState(false);
  const [isMinus2, setIsMinus2] = useState(false);

  const navToHistoriquePaiements = () =>
    navigation.navigate("HistoriquePaiements");

  const navToProfilMarchand = () => navigation.navigate("ProfilMarchand");

  const navToListemarchands = () => navigation.navigate("Listemarchands");

  const { ardoise, noGoBack } = route.params;

  const currentMerchant = ardoise.merchant;

  console.log("ttttEX", currentMerchant);

  const [orders, setOrders] = useState([]);

  const { newOrders } = useContext(OrderContext);

  const c = newOrders && currentMerchant._id === newOrders.merchant;

  const getReviews = async () => {};

  useEffect(() => {
    if (c) setIsMinus(true);
  }, [c]);

  const fetchOrders = async () => {
    const result = await CommonServices.getOrdersByArdoise(ardoise._id);
    if (result.ok && result.data.length > 0) {
      setOrders(result.data);
    } else {
      console.log(result.problem);
    }
  };

  useEffect(() => {
    //LogBox.ignoreAllLogs();
    console.log("newOrder : ", newOrders);

    fetchOrders();
  }, []);

  const closeArdoise = async () => {
    if (orders.some((e) => e.status.payment.payed === false)) {
      console.log("there are active orders ... ");
      Alert.alert("Erreur", "L'ardoise contient des commandes actives", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      const ardoiseData = {
        ardoiseId: ardoise._id,
        state: "closed",
        closingDay: Date.now(),
      };
      const result = await CommonServices.changeArdoiseState(ardoiseData);
      if (result.ok) {
        console.log("ardoise closed ::::", result);
        ardoise.closingDay = Date.now();
        ardoise.state = "closed";
        navigation.navigate("ConsulterArdoiseFermee", {
          ardoise: ardoise,
          orders: orders,
        });
      }
    }

    // console.log("closingDay:::::::::::::", Date.now());
    // navigation.navigate("ConsulterArdoiseFermee", {
    //   ardoise: ardoise,
    //   orders: orders,
    // });
  };

  return (
    <Provider>
      <View
        style={{ flex: 1, backgroundColor: "#324B3E", paddingBottom: "10%" }}
      >
        <FondPageMarchands style={styles.svg} />
        <Myappbar
          title="Profil marchand"
          // subtitle="Vous avez 3 nouvelles notifications"
          navigation={navigation}
          noGoBack={noGoBack}
        />
        <ScrollView
          style={{
            flex: 1,

            paddingBottom: "20%",
          }}
        >
          {/* <Image
            style={styles.image}
            source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
          /> */}

          <View style={{ marginTop: "10%" }}>
            <CardClient
              title={`${currentMerchant.firstName} ${currentMerchant.lastName}`}
              small={currentMerchant.address.location.label}
              storeImage={currentMerchant.storeImage}
              merchantImage={currentMerchant.merchantImage}
              calender={currentMerchant.availability}
              rate={currentMerchant.rate ? currentMerchant.rate : 0}
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
                      action={() => {
                        //con
                        hideDialog();
                        //setReviewVisible(true);
                        closeArdoise();
                      }}
                    />
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>

            <Review
              visible={reviewVisible}
              setVisible={setReviewVisible}
              user={currentMerchant.user}
            />

            <View style={{ width: "60%", alignSelf: "center" }}>
              <GreenBtn
                title=" Passer une commande"
                action={() => {
                  navigation.navigate("MerchantCatalog", {
                    currentMerchant,
                    ardoiseId: ardoise._id,
                    client: ardoise.client,
                  });
                }}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
                marginBottom: "2.5%",
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <Divider borderColor="#fff" color="#fff" orientation="center">
                  <Text style={{ fontSize: RFValue(16) }}> Mes commandes </Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
              </View>
            </View>
            <>
              {isMinus &&
                newOrders &&
                currentMerchant._id === newOrders.merchant && (
                  <View style={styles.orderContainer}>
                    <OrderCardViewer
                      newOrder
                      order={newOrders}
                      navigation={navigation}
                    />
                  </View>
                )}

              {isMinus && (
                <FlatList
                  numColumns={1}
                  nestedScrollEnabled
                  contentContainerStyle={styles.orderContainer}
                  data={orders}
                  onRefresh={() => {
                    setRefreshing(true);
                    fetchOrders();
                    setRefreshing(false);
                  }}
                  refreshing={refreshing}
                  ListEmptyComponent={EmptyList}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item }) => {
                    return (
                      <OrderCardViewer
                        order={item}
                        merchant={ardoise.merchant}
                        navigation={navigation}
                      />
                    );
                  }}
                />
              )}
            </>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
                marginBottom: "2.5%",
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
            </View>

            {/* {isMinus && <View></View>} */}
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

                alignSelf: "center",
                width: "83%",
                borderRadius: 3,
                backgroundColor: "#F5F5F5",
                borderWidth: 0,
              }}
            >
              <View
                style={{
                  paddingBottom: "5%",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#324B3E",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "60%",
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: "2%",
                  }}
                >
                  <AntDesign
                    name="profile"
                    size={24}
                    color="white"
                    style={{ marginRight: "3%" }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: RFValue(13),
                    }}
                  >
                    Mes anciens ardoise
                  </Text>
                </View>

                <View>
                  <Fontisto
                    style={{ padding: "5%", paddingBottom: 0 }}
                    name="pinboard"
                    size={RFValue(20)}
                    color="#DC143C"
                  />

                  <Text style={styles.ardoiseMainText}>
                    Un total de 150 MAD à payer le 12/12/2020
                  </Text>
                </View>

                <View style={styles.ardoiseItemContainer}>
                  <Text style={styles.ardoiseItemTxt}>Livraison :</Text>
                  {!ardoise.delivery ? (
                    <FontAwesome5 name="check" size={20} color="#84F783" />
                  ) : (
                    <Text
                      style={{
                        fontSize: RFValue(20),
                        fontWeight: "bold",
                        color: "red",
                        paddingBottom: "1%",
                      }}
                    >
                      x
                    </Text>
                  )}
                </View>

                <View style={styles.ardoiseItemContainer}>
                  <Text style={styles.ardoiseItemTxt}>Date d'ouverture :</Text>
                  <Text style={styles.dataValueText}>
                    {moment(ardoise.creationDay).format("DD-MM-YYYY")}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row-reverse" }}>
                <View style={{ backgroundColor: color.Primary }}>
                  <TouchableOpacity
                    style={styles.paymentCard}
                    onPress={navToHistoriquePaiements}
                  >
                    <PaymentSVG width={30} height={30} />
                    <Text style={styles.paymentText}>Payer </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    backgroundColor: color.Primary,
                    borderWidth: 0,
                    flex: 1,
                  }}
                />
              </View>
            </View>
          </View>
          {/* <View
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
          </View> */}
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
                    Avis des clients
                  </Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus isMinus={isMinus1} setIsMinus={setIsMinus1} />
              </View>
            </View>

            {isMinus1 && (
              <View
                style={{
                  marginLeft: "10%",
                  marginRight: "10%",
                }}
              >
                <ClientReviewItem
                  name="Sam Irving"
                  date="12/12/2020 à 10h30"
                  img={require("../assets/SamIrving.png")}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tortor vitae erat sollicitudin fringilla ac id felis."
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-10%",
  },
  paymentCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderColor: color.Primary,
    borderTopRightRadius: w(0),
    borderBottomLeftRadius: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    padding: "1%",
    width: w(30),
    marginRight: "0%",
    marginBottom: "0%",
    justifyContent: "center",
  },
  paymentText: {
    fontSize: RFValue(16),
    fontWeight: "bold",
    marginLeft: "3%",
    color: color.Secondary,
  },
  ardoiseItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
  },
  ardoiseItemTxt: {
    fontWeight: "bold",
    color: color.Secondary,
    fontSize: RFValue(16),
    marginRight: "2%",
  },
  dataValueText: {
    fontWeight: "bold",
    fontSize: RFValue(14),
    color: color.INFO_TEXT,
  },
  ardoiseMainText: {
    fontWeight: "bold",
    color: color.INFO_TEXT,
    fontSize: RFValue(15),
    paddingLeft: "14%",
    marginBottom: "3.5%",
  },
  orderContainer: {
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "12%",
    alignSelf: "center",
  },
});

export default ConsulterCompteMarchand;
