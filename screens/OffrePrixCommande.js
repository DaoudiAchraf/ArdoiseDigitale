import React, { useContext, useState, useEffect, useRef } from "react";
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
import ProductCard_Item from "../components/ProductCard_Item";

import FondPageCommandes from "../assets/svg-icones-client/fond-page-commandes.jsx";
import Item3 from "../components/componentsClient/Item3";
import ItemPrix from "../components/componentsClient/ItemPrix";
import moment from "moment";
import CalloutCard from "../components/Client_UI/CalloutCard";
import { URL } from "../services/Client";

import commonService from "../services/Common";

export default function OffrePrixCommande({ navigation, route }) {
  const { order, merchant } = route.params;

  //const sendUpdate = useRef(false)

  // const filteredProducts = () => {
  //   if (listOf_RefusedProducts) {
  //     const filteredProducts = order.products.filter(element => order.listOf_RefusedProducts.indexOf(element._id._id) < 0)
  //     console.log('filtered productssssssssssssssssssssssssss : ', filteredProducts);
  //     console.log('list of refused productsssssssssssssssssss : ', order.listOf_RefusedProducts);

  //   setCommande({...commande, acceptedProducts: filteredProducts }) ;
  // }}

  const [commande, setCommande] = useState({
    ref: `Ref: ${order._id}`,
    dateOfCreation: moment(order.date).format("DD/MM/YYYY [à] HH[h]mm"),
    shopTitle: "Target Express",
    shopDescription: merchant.address
      ? `${merchant.address.location.label}`
      : "751 Green Hill Dr.Webster,\nNY 14580",
    details: { paymentType: "Crédit Total", Livraison: true },
    merchant: {
      name: merchant.firstName + " " + merchant.lastName,
      img: merchant.merchantImage
        ? { uri: URL + "/images/" + merchant.merchantImage }
        : require("../assets/UserOrange.png"),
      delivery: true,
      paymentType: ["comptant", "crédit total"],
    },
    price: order.totalPrice,

    offer: order.status.offer,
    response: order.status.response,
    recieved: order.status.recieved,
    ready: order.status.ready,
    payment: order.status.payment,
    review: {
      reviewed: false,
      reviewText: "aaa",
    },
    listOf_RefusedProducts: order.listOf_RefusedProducts,
  });

  const updateOrder = () => {
    const updates = {
      totalPrice: commande.price,
      status: {
        offer: commande.offer,
        response: commande.response,
        recieved: commande.recieved,
        ready: commande.ready,
        payment: commande.payment,
      },
      listOf_RefusedProducts: commande.listOf_RefusedProducts,
    };
    const patchOrder = async () => {
      const response = await commonService.patchOrder(order._id, updates);
      if (response.ok) {
        console.log(response.data);
      } else {
        console.log("error");
      }
    };
    try {
      console.log(
        "UPPDATESSSSSSS:                 STATESSSSSS                  ",
        updates
      );
      patchOrder();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateOrder();
  }, [commande]);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <MyAppbar navigation={navigation} title="Commande" />
        <FondPageCommandes style={styles.svg} />
        <View style={styles.contentView}>
          <CalloutCard commande={commande} />
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
                          moment(new Date())
                            .add(1, "months")
                            .format("DD/MM/YYYY [à] HH[h]mm")
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
                                "DD/MM/YYYY [à] HH[h]mm"
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
                                  "DD/MM/YYYY [à] HH[h]mm"
                                ),
                              },
                            })
                          }
                        />
                      ) : commande.response.sent ? (
                        commande.response.res ? (
                          <GreenBtn
                            key="51"
                            myGreenBtn
                            title={`Offre de prix accepté en attente de préparation par '${commande.merchant.name}'`}
                            grayed
                          />
                        ) : (
                          <GreenBtn
                            key="52"
                            myGreenBtn
                            title={
                              "Offre de prix refusé commande echoué " +
                              commande.merchant.name
                            }
                            grayed
                          />
                        )
                      ) : commande.offer.onHold ? (
                        <GreenBtn
                          key="53"
                          myGreenBtn
                          title={
                            "Offre de prix refusé commande echoué " +
                            commande.merchant.name
                          }
                          grayed
                        />
                      ) : commande.offer.sent ? (
                        <View key="6">
                          <ItemPrix
                            key="7"
                            title={`${commande.price} DT`}
                            small="Prix proposé"
                          />

                          <View
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
                                    response: {
                                      ...commande.response,
                                      sent: true,
                                      res: false,
                                      dateOfResponse: moment(new Date()).format(
                                        "DD/MM/YYYY [à] HH[h]mm"
                                      ),
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
                                    response: {
                                      ...commande.response,
                                      sent: true,
                                      res: true,
                                      date: moment(new Date()).format(
                                        "DD/MM/YYYY [à] HH[h]mm"
                                      ),
                                    },
                                  })
                                }
                              />
                            </View>
                          </View>
                        </View>
                      ) : (
                        <Text>Commande Refusé par le marchand</Text>
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
              <Text style={{ fontSize: RFValue(17) }}>Liste des produits</Text>
            </Divider>

            <FlatList
              numColumns={1}
              data={order.products}
              contentContainerStyle={{ marginTop: "5%" }}
              renderItem={({ item, index }) => {
                if (order.listOf_RefusedProducts.indexOf(item._id._id) < 0) {
                  return (
                    <ProductCard_Item
                      key={index}
                      product={item}
                      navigation={navigation}
                      badged
                    />
                  );
                } else {
                  return (
                    <ProductCard_Item
                      key={index}
                      product={item}
                      navigation={navigation}
                      badged
                      indisponible
                    />
                  );
                }
              }}
            />
            {/* <Item3
              title="Lait Delice"
              small="Animaux » chiens"
              badged
            />
            <Item3
              title="Brit Chicken & Salamon"
              small=" - Animaux » chiens"
              smaller="Indisponible"
              badged
              indisponible
            /> */}

            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>
                Détails de la commande
              </Text>
            </Divider>
            {!commande.offer.onHold && (
              <ItemPrix title={`${commande.price} DT`} small="Prix proposé" />
            )}
            <ItemPrix
              title={commande.merchant.paymentType[0]}
              small="Mode de payement"
            />
            <ItemPrix
              title={commande.merchant.delivery ? "Oui" : "Non"}
              small="Livraison"
            />
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  contentView: {
    alignSelf: "center",
    width: w(80),
    marginTop: h(7),
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});
