import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Divider from "react-native-divider";
import {
  Provider,
  Button,
  Dialog,
  Portal,
  Paragraph,
} from "react-native-paper";

import { RFValue } from "react-native-responsive-fontsize";
import CalloutCard from "../components/Client_UI/CalloutCard";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h } from "../utils/Size";
import ItemInCallout from "../components/Client_UI/ClientReviewItem";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import PlusMinus from "../components/componentsClient/PlusMinus";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import DropDownFiltres from "../components/Client_UI/DropDownFiltres";
import ClientReviewItem from "../components/Client_UI/ClientReviewItem";

export default function ProfilMarchand(props) {
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [isMinus, setIsMinus] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <MyAppbar title="ProfilMarchand" />
        <FondPageMarchand style={styles.svg} />
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
          />
          <GreenBtn
            myGreenBtn
            action={showDialog}
            title="Ouvrir une ardoise avec ce marchand"
          />

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "100%",
                alignSelf: "center",
              }}
            >
              <Divider borderColor="#fff" color="#fff" orientation="center">
                <Text style={{ fontSize: RFValue(17) }}> Avis des clients</Text>
              </Divider>
            </View>
            <View
              style={{
                position: "absolute",
                left: "93%",
                width: "10%",
                alignSelf: "center",
              }}
            >
              <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
            </View>
          </View>
          {isMinus && (
            <ClientReviewItem
              name="Sam Irving"
              date="12/12/2020 à 10h30"
              img={require("../assets/SamIrving.png")}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tortor vitae erat sollicitudin fringilla ac id felis."
            />
          )}
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={{ fontWeight: "600", color: "#426252" }}>
              Option de l'ardoise
            </Dialog.Title>
            <Dialog.Content>
              <Paragraph>Mode de payement préféré</Paragraph>
              <DropDownFiltres
                selectedItem={selectedItem}
                handleChange={setSelectedItem}
                items={[
                  "à la commande",
                  "à la livraison",
                  "vendredi fin de semaine",
                  "en 3 fois (chaque mois)",
                ]}
              />
              <Paragraph>Mode de payement préféré</Paragraph>
              <DropDownFiltres
                selectedItem={selectedItem}
                handleChange={setSelectedItem}
                items={["à récupérer", "à domicile"]}
              />
              <GreenBtn
                myGreenBtn
                action={hideDialog}
                title="Envoyer une Commande"
              />
            </Dialog.Content>
          </Dialog>
        </Portal>
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
