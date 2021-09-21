import React, { useState, useContext } from "react";
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
import { Feather } from "@expo/vector-icons";

import { Context } from "../contexts/Auth.context";
import EmptyList from "../components/EmptyList";

function MerchantProfilClient({ navigation, route }) {
  const [accepted, setAccepted] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(true);
  const [isMinus2, setIsMinus2] = useState(true);

  const { client, ardoiseId } = route.params;

  const acceptArdoise = () => {
    setAccepted(true);
    merchantService.changeArdoiseState(ardoiseId, "accepted").then((result) => {
      console.log(result);
    });
    navigation.navigate("MerchantClientList");
  };

  const declineArdoise = () => {
    hideDialog();

    setAccepted(false);
    merchantService.changeArdoiseState(ardoiseId, "refused").then((result) => {
      console.log(result);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Provider>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#324B3E",
          }}
        >
          <View style={{ position: "absolute", right: "-5%" }}>
            <ClientFondBtnMarchand />
          </View>
          <Myappbar navigation={navigation} title="Profil client" />

          <View style={{ marginTop: "10%", width: "93%", alignSelf: "center" }}>
            <ClientItem
              name={`${client.firstName} ${client.lastName}`}
              address={client.address.location.label}
              smaller={client.address.location.countryName}
              img={require("../assets/assets/user.png")}
              call
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
                      <Feather
                        name="info"
                        size={RFValue(25)}
                        style={{ marginRight: "15%" }}
                        color="#324B3E"
                      />
                      <Text style={{ color: "#324B3E", fontSize: RFValue(24) }}>
                        Refus de client
                      </Text>
                    </Dialog.Title>
                    <Dialog.Content>
                      <Paragraph
                        style={{ fontSize: RFValue(13), color: "grey" }}
                      >
                        Etes-vous sur de vouloir refuser l'ouverture d'ardoise
                        avec Kristen Harper?
                      </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <RedBtn
                        myRedBtn
                        title="Réfuser l'ardoise"
                        action={declineArdoise}
                      />
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
              </View>
              <View style={{ width: "42%" }}>
                <GreenBtn myGreenBtn title="Accepter" action={acceptArdoise} />
              </View>
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
