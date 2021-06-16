import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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

import FondPageCommandes from "../assets/svg-icones-client/fond-page-commandes.jsx";
import Item3 from "../components/componentsClient/Item3";
import ItemPrix from "../components/componentsClient/ItemPrix";
import moment from "moment";
import CalloutCard from "../components/Client_UI/CalloutCard";
import ClientItem from "../components/MerchantComponents/ClientItem";

export default function OffrePrixCommande({ navigation }) {
  const [commande, setCommande] = useState({
    ref: "HM-123456789",
    dateOfCreation: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
    price: "0 MAD",
    client: {
      name: "Kristen Harper",
      address: "987 University St.Roselle,\nIL 60172",
      img: require("../assets/UserOrange.png"),
      history: "Ce client a une ardoise de 150 MAD à payer le 12/12/2020",
    },

    offer: {
      onHold: true,
      sent: false,
      date: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
      price: "150 MAD",
    },
    response: {
      sent: false,
      res: false,
      date: moment(new Date()).format("DD/MM/YYYY [à] hh[h]mm"),
    },
    ready: {
      ready: false,
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

  const [visible1, setVisible1] = useState(false);
  const showDialog1 = () => setVisible1(true);
  const hideDialog1 = () => setVisible1(false);
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <MyAppbar navigation={navigation} title="Commande" />
        <FondPageCommandes style={styles.svg} />
        <View style={styles.contentView}>
          <ClientItem commande={commande} />
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
            <Item3
              title="Brit Chicken & Salamon"
              small="Animaux » chiens"
              badged
            />
            <Item3
              title="Brit Chicken & Salamon"
              small="Animaux » chiens"
              badged
            />
            {!commande.payment.payed && [
              commande.ready.ready ? (
                <GreenBtn
                  key="1"
                  myGreenBtn
                  title="Le client a été informé que sa commande est prête"
                  action={() =>
                    setCommande({
                      ...commande,
                      payment: {
                        ...commande.ready,
                        payed: true,
                        date: moment(new Date()).format(
                          "DD/MM/YYYY [à] hh[h]mm"
                        ),
                      },
                    })
                  }
                />
              ) : (
                [
                  commande.response.sent ? (
                    <GreenBtn
                      key="2"
                      myGreenBtn
                      title="Marquer la commande comme prête"
                      action={() =>
                        setCommande({
                          ...commande,
                          ready: {
                            ...commande.ready,
                            ready: true,
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
                              key="5"
                              action={() =>
                                setCommande({
                                  ...commande,
                                  offer: {
                                    ...commande.offer,
                                    sent: false,
                                    onHold: false,
                                    dateOfResponse: moment(new Date()).format(
                                      "DD/MM/YYYY [à] hh[h]mm"
                                    ),
                                  },
                                })
                              }
                              myRedBtn
                              title="Refuser l'offre"
                            />
                          </View>
                          <View key="6" style={{ width: "47.5%" }}>
                            <GreenBtn
                              key="7"
                              myGreenBtn
                              title="Accepter l'offre"
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
                              title="L'offre de prix a été envoyée au client"
                              action={() =>
                                setCommande({
                                  ...commande,
                                  response: {
                                    ...commande.response,
                                    sent: true,
                                    res: true,
                                  },
                                })
                              }
                            />
                          ) : (
                            <GreenBtn
                              key="9"
                              myGreenBtn
                              title="L'offre de prix a été refusée"
                              action={() =>
                                setCommande({
                                  ...commande,
                                  response: {
                                    ...commande.response,
                                    sent: true,
                                    res: false,
                                  },
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
            ]}
            {}
            {}
            {}

            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>
                Détails de la commande
              </Text>
            </Divider>

            <ItemPrix title="150 MAD" small="Prix proposé" />
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
            <TextInput
              multiline
              numberOfLines={5}
              label="Liste des produits"
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
            <Paragraph>Prix de la commande</Paragraph>
            <TextInput
              value={commande.price}
              onChangeText={(txt) =>
                setCommande({
                  ...commande,
                  price: txt,
                })
              }
            />

            <View style={{ flexDirection: "row" }}>
              <RedBtn myRedBtn action={hideDialog1} title="Annuler" />
              <GreenBtn
                myGreenBtn
                action={() => {
                  hideDialog1();
                  setCommande({
                    ...commande,
                    offer: {
                      ...commande.offer,
                      sent: true,
                      onHold: false,
                      dateOfResponse: moment(new Date()).format(
                        "DD/MM/YYYY [à] hh[h]mm"
                      ),
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
});
