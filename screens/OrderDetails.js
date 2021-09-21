import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Divider from "react-native-divider";
import {
  Dialog,
  Paragraph,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";

import { RFValue } from "react-native-responsive-fontsize";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h } from "../utils/Size";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import RedBtn from "../components/componentsClient/RedBtn";

import Cart from "../assets/svgr/Cart";
import ProductCard_Item from "../components/ProductCard_Item";
import ItemPrix from "../components/componentsClient/ItemPrix";
import moment from "moment";
import CalloutCard from "../components/Client_UI/CalloutCard";
import { URL } from "../services/Client";
import { color } from "../constants/Colors";

export default function OrderDetails({ navigation, route }) {
  const { products } = route.params;

  const { merchant } = route.params.ardoise;

  //  console.log('_______________________');
  //  console.log(products);

  let total = 0;
  products.forEach((item) => (total += item._id.price * item.quantity));

  const [commande, setCommande] = useState({
    ref: "HM-123456789",
    dateOfCreation: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
    shopTitle: "Target Express",
    shopDescription: merchant.address
      ? `${merchant.address.location.label}`
      : "751 Green Hill Dr.Webster,\nNY 14580",
    details: { paymentType: "Crédit Total", Livraison: true },
    merchant: {
      name: `${merchant.firstName} ${merchant.lastName}`,
      img: merchant.merchantImage
        ? { uri: URL + "/images/" + merchant.merchantImage }
        : require("../assets/UserOrange.png"),
      delivery: true,
      paymentType: ["comptant", "crédit total"],
    },

    offer: {
      onHold: true,
      accepted: false,
      dateOfResponse: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
      date: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
      price: "150 MAD",
    },
    ready: {
      ready: false,
      date: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
    },
    recieved: {
      recieved: false,
      date: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
    },
    payment: {
      payed: false,
      date: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
      dateAutoPayment: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
    },
    review: {
      reviewed: false,
      reviewText: "aaa",
    },
    listOfProducts: [],
  });
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <View style={{ backgroundColor: "#324B3E" }}>
        <MyAppbar navigation={navigation} title="details Commande" />
      </View>

      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <View style={styles.content}>
          <CalloutCard commande={commande} order />
          {commande.review.reviewed ? (
            <GreenBtn
              grayed
              myGreenBtn
              title={"Avis sur " + commande.merchant.name + " enregistré"}
            />
          ) : (
            [
              commande.payment.payed ? (
                <GreenBtn
                  key="1"
                  myGreenBtn
                  title={"Laisser un avis sur " + commande.merchant.name}
                  action={showDialog}
                />
              ) : (
                [
                  commande.recieved.recieved ? (
                    <View key="2">
                      <GreenBtn
                        key="3"
                        grayed
                        myGreenBtn2
                        title={
                          "Le paiement sera prélevé le " +
                          commande.payment.dateAutoPayment
                        }
                      />
                      <GreenBtn
                        key="4"
                        myGreenBtn2
                        title="Payer Immédiatement"
                        action={() =>
                          setCommande({
                            ...commande,
                            payment: {
                              ...commande.payment,
                              payed: true,
                              date: moment(new Date()).format(
                                "DD/MM/YYYY [à] hh[h]mm"
                              ),
                            },
                          })
                        }
                      />
                    </View>
                  ) : (
                    [
                      commande.ready.ready ? (
                        <GreenBtn
                          key="5"
                          myGreenBtn
                          title="J'ai reçu la commande"
                          action={() =>
                            setCommande({
                              ...commande,
                              recieved: {
                                ...commande.recieved,
                                recieved: true,
                                date: moment(new Date()).format(
                                  "DD/MM/YYYY [à] hh[h]mm"
                                ),
                              },
                            })
                          }
                        />
                      ) : (
                        [
                          commande.offer.onHold ? (
                            <View>
                              <Divider
                                borderColor="#fff"
                                color="#fff"
                                orientation="center"
                              >
                                <Text style={{ fontSize: RFValue(16) }}>
                                  Détails de la commande
                                </Text>
                              </Divider>

                              <View
                                style={{
                                  backgroundColor: color.WHITE,
                                  padding: 15,
                                  alignSelf: "center",
                                  elevation: 20,
                                  borderWidth: 5,
                                  borderColor: color.Primary,
                                }}
                              >
                                <View
                                  style={{
                                    flexDirection: "row",
                                    alignSelf: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text
                                    style={{
                                      ...styles.orderDetailTXT,
                                      fontWeight: "bold",
                                      fontSize: RFValue(15),
                                    }}
                                  >
                                    Total des achats :{" "}
                                  </Text>
                                  <Text
                                    style={{
                                      ...styles.orderDetailTXT,
                                      fontSize: RFValue(15),
                                      color: color.Primary,
                                    }}
                                  >
                                    {total} DT
                                  </Text>
                                </View>

                                <View
                                  style={{
                                    flexDirection: "row",
                                    marginTop: "3%",
                                  }}
                                >
                                  <Text
                                    style={{
                                      ...styles.orderDetailTXT,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    02/08/2021
                                  </Text>
                                  <Text style={styles.orderDetailTXT}> à </Text>
                                  <Text
                                    style={{
                                      ...styles.orderDetailTXT,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    02/08/2021
                                  </Text>
                                  <Text style={styles.orderDetailTXT}>
                                    : Commande créée
                                  </Text>
                                </View>

                                <View style={{ flexDirection: "row" }}>
                                  <Text
                                    style={{
                                      ...styles.orderDetailTXT,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    02/08/2021
                                  </Text>
                                  <Text style={styles.orderDetailTXT}> à </Text>
                                  <Text
                                    style={{
                                      ...styles.orderDetailTXT,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    02/08/2021
                                  </Text>
                                  <Text style={styles.orderDetailTXT}>
                                    : Commande accepté
                                  </Text>
                                </View>
                              </View>

                              {/* <ItemPrix
                                key="7"
                                title="150 MAD"
                                small="Prix proposé"
                              /> */}

                              {/* <View
                                key="8"
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View
                                  key="9"
                                  style={{
                                    width: "47.5%",
                                  }}
                                >
                                  <RedBtn
                                    key="10"
                                    action={() =>
                                      setCommande({
                                        ...commande,
                                        offer: {
                                          ...commande.offer,
                                          accepted: false,
                                          onHold: false,
                                          dateOfResponse: moment(
                                            new Date()
                                          ).format("DD/MM/YYYY [à] hh[h]mm"),
                                        },
                                      })
                                    }
                                    myRedBtn
                                    title="Refuser l'offre"
                                  />
                                </View>
                                <View key="11" style={{ width: "47.5%" }}>
                                  <GreenBtn
                                    key="12"
                                    myGreenBtn
                                    title="Accepter l'offre"
                                    action={() =>
                                      setCommande({
                                        ...commande,
                                        offer: {
                                          ...commande.offer,
                                          accepted: true,
                                          onHold: false,
                                          dateOfResponse: moment(
                                            new Date()
                                          ).format("DD/MM/YYYY [à] hh[h]mm"),
                                        },
                                      })
                                    }
                                  />
                                </View>
                              </View> */}
                            </View>
                          ) : (
                            [
                              commande.offer.accepted ? (
                                <GreenBtn
                                  key="13"
                                  myGreenBtn
                                  title="Commande acceptée"
                                  action={() =>
                                    setCommande({
                                      ...commande,
                                      ready: { ...commande.ready, ready: true },
                                    })
                                  }
                                />
                              ) : (
                                <GreenBtn
                                  key="14"
                                  myGreenBtn
                                  title="Commande refusée"
                                  action={() =>
                                    setCommande({
                                      ...commande,
                                      ready: { ...commande.ready, ready: true },
                                    })
                                  }
                                />
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          )}

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={{ fontWeight: "600", color: "#426252" }}>
                Lissez votre avis
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  Votre avis sur ce marchand ne sera visible qu'aux autres
                  clients dans notre réseau
                </Paragraph>
                <Paragraph>
                  Saisissez votre avis puis appuyez sur "envoyer" afin de le
                  soumettre
                </Paragraph>
                <TextInput
                  multiline
                  numberOfLines={5}
                  label="Mon avis"
                  value={commande.review.reviewText}
                  onChangeText={(txt) =>
                    setCommande({
                      ...commande,
                      review: {
                        ...commande.review,
                        reviewText: txt,
                      },
                    })
                  }
                />

                <View style={{ flexDirection: "row" }}>
                  <RedBtn myRedBtn action={hideDialog} title="Annuler" />
                  <GreenBtn
                    myGreenBtn
                    action={() => {
                      hideDialog();
                      setCommande({
                        ...commande,
                        review: { ...commande.review, reviewed: true },
                      });
                    }}
                    title="Envoyer"
                  />
                </View>
              </Dialog.Content>
            </Dialog>
          </Portal>

          <View
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(16.5), paddingBottom: "3%" }}>
                Liste des produits
              </Text>
            </Divider>

            {/* <ProductCard_Item 
              title="Brit Chicken & Salamon"
              small="Animaux » chiens"
              badged
            />
            <ProductCard_Item 
              title="Brit Chicken & Salamon"
              small=" - Animaux » chiens"
              smaller="Indisponible"
              badged
              indisponible
            /> */}

            <FlatList
              nestedScrollEnabled
              numColumns={1}
              data={products}
              contentContainerStyle={{ marginTop: "5%" }}
              renderItem={({ item, index }) => {
                return (
                  <ProductCard_Item
                    key={index}
                    product={item}
                    navigation={navigation}
                    badged
                  />
                );
              }}
            />

            {/* <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>
                Détails de la commande
              </Text>
            </Divider>
            {!commande.offer.onHold && (
              <ItemPrix title="150 MAD" small="Prix proposé" />
            )}
            <ItemPrix title="Crédit total" small="Mode de payement" />
            <ItemPrix title="Oui" small="Livraison" /> */}
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: "center",
    width: w(80),
    marginTop: h(2),
    paddingBottom: "15%",
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  orderDetailTXT: {
    color: "#545353",
    fontSize: RFValue(12),
  },
});
