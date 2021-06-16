import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
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
import Item2 from "../components/componentsClient/Item2";

import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import PlusMinus2 from "../components/componentsClient/PlusMinus2";
import { RFValue } from "react-native-responsive-fontsize";
import ClientItem from "../components/MerchantComponents/ClientItem";
import ClientReviewItem from "../components/Client_UI/ClientReviewItem";

import ClientFondBtnMarchand from "../assets/svgr/ClientFondBtnMarchands.jsx";

function MerchantProfilClient({ navigation }) {
  const [accepted, setAccepted] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(true);
  const [isMinus2, setIsMinus2] = useState(true);

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
            title="Name"
            subtitle="Vous avez 3 nouvelles notifications"
          />
          <View style={{ position: "absolute", right: "-5%" }}>
            <ClientFondBtnMarchand />
          </View>
          <View style={{ marginTop: "10%", width: "93%", alignSelf: "center" }}>
            <ClientItem
              name="Express"
              date="Green Hill"
              smaller="NY 145230"
              img={require("../assets/assets/user.png")}
            />
          </View>
          {!accepted && (
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignSelf: "center",
                marginHorizontal: "8%",
                justifyContent: "space-around",
              }}
            >
              <View style={{ width: "40%" }}>
                <RedBtn myRedBtn action={showDialog} title="Refuser" />
                <Portal>
                  <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>
                      <Text style={{ color: "#324B3E", fontSize: RFValue(25) }}>
                        Refus de client
                      </Text>
                    </Dialog.Title>
                    <Dialog.Content>
                      <Paragraph
                        style={{ fontSize: RFValue(13), color: "grey" }}
                      >
                        Etes-vous surs de vouloir refuser ouvrir ardoise avec
                        Kristen Harper?
                      </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <RedBtn
                        myRedBtn
                        title="Fermer l'ardoise"
                        action={hideDialog}
                      />
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
              </View>
              <View style={{ width: "42%" }}>
                <GreenBtn
                  myGreenBtn
                  title="Accepter"
                  action={() => setAccepted(true)}
                />
              </View>
            </View>
          )}

          {accepted && (
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
                  <Item2
                    title="Nouvelle commande"
                    small="Sam lrving le 12/12/2020 à 10h30"
                    smaller="Appuyez pour voir les détails."
                    source={require("../assets/assets/icons/client-fond-btn-commande.png")}
                  />
                  <Item2
                    title="Commande active"
                    small="Sam lrving le 12/12/2020 à 10h30"
                    smaller="Appuyez pour voir les détails."
                    source={require("../assets/assets/icons/client-fond-btn-commande.png")}
                  />
                  <Item2
                    title="Commande terminée"
                    small="Sam lrving le 12/12/2020 à 10h30"
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
          )}

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
