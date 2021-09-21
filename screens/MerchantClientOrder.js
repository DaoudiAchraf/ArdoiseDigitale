import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Divider from "react-native-divider";
import {
  Button,
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

import FondPageCommandes from "../assets/svg-icones-client/fond-page-commandes.jsx";
import Item3 from "../components/componentsClient/Item3";
import ItemPrix from "../components/componentsClient/ItemPrix";
import moment from "moment";
import CalloutCard from "../components/Client_UI/CalloutCard";
import ClientItem from "../components/MerchantComponents/ClientItem";
import ProductCard from "../components/ProductCard";
import Input from "../components/Input";
import { color } from "../constants/Colors";

import { LogBox } from "react-native";
import ProductCard_item from "../components/ProductCard_Item";

import commonService from "../services/Common";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function OffrePrixCommande({ route, navigation }) {
  const {
    ardoise,
    _id,
    client,
    date,
    products,
    status,
    listOf_RefusedProducts,
    totalPrice,
  } = route.params;

  const sendUpdate = useRef(false);

  console.log("_____________________________", products);
  // console.log(currentState);
  console.log(route.params);

  const [commande, setCommande] = useState({
    ref: "Ref: " + _id,
    dateOfCreation: moment(date).format("DD/MM/YYYY [à] HH[h]mm"),
    price: totalPrice,
    client: {
      name: `${client.firstName} ${client.lastName}`,
      address: `${client.address.location.label}`,
      img: require("../assets/UserOrange.png"),
      history: "Ce client a une ardoise de 150 MAD à payer le 12/12/2020",
    },

    offer: status.offer,
    response: status.response,
    ready: status.ready,
    payment: status.payment,
    review: {
      reviewed: false,
      reviewText: "aaa",
    },
    listOf_RefusedProducts: [],
  });

  const calculateInitialPrice = () => {
    var price = 0;
    if (listOf_RefusedProducts) {
      const filteredProducts = products.filter(
        (element) =>
          commande.listOf_RefusedProducts.indexOf(element._id._id) < 0
      );
      console.log(
        "filtered productssssssssssssssssssssssssss : ",
        filteredProducts
      );
      console.log(
        "list of refused productsssssssssssssssssss : ",
        commande.listOf_RefusedProducts
      );

      filteredProducts.forEach((element) => {
        price += element._id.price * element.quantity;
      });
    }
    setCommande({ ...commande, price: `${price}` });
  };

  const updateOrder = () => {
    const updates = {
      totalPrice: commande.price,
      status: {
        offer: commande.offer,
        response: commande.response,
        ready: commande.ready,
        payment: commande.payment,
      },
      listOf_RefusedProducts: commande.listOf_RefusedProducts,
    };
    const patchOrder = async () => {
      const response = await commonService.patchOrder(_id, updates);
      if (response.ok) {
        console.log(response.data);
      } else {
        console.log("error");
      }
    };
    try {
      console.log(
        "UPPDATESSSSSSS:                                          ",
        updates
      );
      patchOrder();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!sendUpdate.current) {
      return;
    } else {
      updateOrder();
      sendUpdate.current = false;
    }
  }, [commande]);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [visible1, setVisible1] = useState(false);
  const showDialog1 = () => setVisible1(true);
  const hideDialog1 = () => setVisible1(false);

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <FondPageCommandes style={styles.svg} />

        <MyAppbar
          navigation={navigation}
          title="Commande"
          subtitle={commande.ref}
        />
        <View style={styles.contentView}>
          <ClientItem call commande={commande} />
          {!commande.payment.payed && [
            commande.ready.ready ? (
              <GreenBtn
                key="1"
                myGreenBtn
                title="Le client a été informé que sa commande est prête"
                grayed
              />
            ) : (
              [
                commande.response.sent ? (
                  commande.response.res ? (
                    <GreenBtn
                      key="2"
                      myGreenBtn
                      title="Marquer la commande comme prête"
                      textSize={{ fontSize: RFValue(13), fontWeight: "bold" }}
                      action={() => {
                        sendUpdate.current = true;
                        setCommande({
                          ...commande,
                          ready: {
                            ...commande.ready,
                            ready: true,
                            date: moment(new Date()).format(
                              "DD/MM/YYYY [à] HH[h]mm"
                            ),
                          },
                        });
                      }}
                    />
                  ) : (
                    <Text>Offre refusé par le client</Text>
                  )
                ) : (
                  [
                    commande.offer.onHold ? (
                      <View
                        key="3"
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          key="4"
                          style={{
                            width: "47.5%",
                          }}
                        >
                          <RedBtn
                            style={{ fontSize: RFValue(11.5) }}
                            key="5"
                            action={() => {
                              sendUpdate.current = true;
                              setCommande({
                                ...commande,
                                offer: {
                                  ...commande.offer,
                                  sent: false,
                                  onHold: false,
                                  date: moment(new Date()).format(
                                    "DD/MM/YYYY [à] HH[h]mm"
                                  ),
                                },
                              });
                            }}
                            myRedBtn
                            title="Refuser commande"
                          />
                        </View>
                        <View key="6" style={{ width: "47.5%" }}>
                          <GreenBtn
                            key="7"
                            myGreenBtn
                            title="Accepter commande"
                            action={showDialog1}
                          />
                        </View>
                      </View>
                    ) : (
                      [
                        commande.offer.sent ? (
                          <GreenBtn
                            key="8"
                            myGreenBtn
                            textSize={{
                              fontSize: RFValue(15),
                              fontWeight: "bold",
                            }}
                            grayed
                            title="L'offre de prix a été envoyée au client"
                          />
                        ) : (
                          <GreenBtn
                            key="9"
                            myGreenBtn
                            title="La commande a été refusée"
                            textSize={{
                              fontSize: RFValue(15),
                              fontWeight: "bold",
                            }}
                            grayed
                          />
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]}

          {commande.review.reviewed ? (
            <GreenBtn
              key="1"
              myGreenBtn
              grayed
              title={"Avis sur " + commande.client.name + " enregistré"}
              action={showDialog}
            />
          ) : (
            [
              commande.payment.payed && (
                <GreenBtn
                  key="2"
                  myGreenBtn
                  title={"Laissez un avis sur " + commande.client.name}
                  action={showDialog}
                />
              ),
            ]
          )}
          {}
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
              nestedScrollEnabled
              numColumns={1}
              data={products}
              contentContainerStyle={{ marginTop: "5%" }}
              renderItem={({ item, index }) => {
                return (
                  <ProductCard_item
                    key={index}
                    product={item}
                    navigation={navigation}
                    badged
                  />
                );
              }}
            />

            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>
                Détails de la commande
              </Text>
            </Divider>

            <ItemPrix title={commande.price + " DT"} small="Total :" />
            <ItemPrix title="Crédit total" small="Mode de payement" />
            <ItemPrix title="Oui" small="Livraison" />
          </View>
        </View>
      </ScrollView>

      <Portal>
        <Dialog visible={visible1} onDismiss={hideDialog1}>
          <Dialog.Title style={{ fontWeight: "600", color: "#426252" }}>
            Offre de prix
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Selectionnez les produits disponible et Saisissez le prix de la
              commande.
            </Paragraph>
            <Paragraph>
              Appuyez sur "envoyer" afin de soumettre votre réponse au client
            </Paragraph>
            <View>
              <FlatList
                numColumns={1}
                data={products}
                contentContainerStyle={{ marginTop: "5%" }}
                renderItem={({ item, index }) => {
                  return (
                    <ProductCard
                      quantity={item.quantity}
                      checkable
                      key={index}
                      product={item._id}
                      commande={commande}
                      setCommande={setCommande}
                    />
                  );
                }}
              />
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <Text style={{ ...styles.offrePrixTXT, fontWeight: "bold" }}>
                  Total de la commande :
                </Text>
                <Text
                  style={{
                    ...styles.offrePrixTXT,
                    fontWeight: "bold",
                    color: color.INFO_TEXT,
                  }}
                >
                  {`${commande.price}`} DT
                </Text>
              </View>
              <Button
                style={{ alignSelf: "center", width: "70%", marginTop: "3%" }}
                color={color.Primary}
                icon="calculator"
                mode="contained"
                onPress={calculateInitialPrice}
              >
                Calculate Total
              </Button>

              <View style={{ marginTop: "15%" }}>
                <Text
                  style={{
                    ...styles.offrePrixTXT,
                    fontWeight: "bold",
                    color: color.INFO_TEXT,
                    textAlign: "center",
                  }}
                >
                  Prix proposé :
                </Text>
                <Input
                  styleBox={{ height: 45 }}
                  mode="box"
                  value={commande.price}
                  handleChange={(txt) =>
                    setCommande({
                      ...commande,
                      price: txt,
                    })
                  }
                />
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <RedBtn myRedBtn action={hideDialog1} title="Annuler" />
              <GreenBtn
                myGreenBtn
                action={() => {
                  hideDialog1();
                  sendUpdate.current = true;
                  setCommande({
                    ...commande,
                    offer: {
                      ...commande.offer,
                      sent: true,
                      onHold: false,
                      date: moment(new Date()).format("DD/MM/YYYY [à] HH[h]mm"),
                    },
                  });
                }}
                title="Envoyer"
              />
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={{ fontWeight: "600", color: "#426252" }}>
            Lissez votre avis
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Votre avis sur ce marchand ne sera visible qu'aux autres clients
              dans notre réseau
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
                  sendUpdate.current = true;
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
  offrePrixTXT: {
    fontSize: RFValue(14),
    color: color.Primary,
  },
});
