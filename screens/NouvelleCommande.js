import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Divider from "react-native-divider";
import { Provider } from "react-native-paper";

import { RFValue } from "react-native-responsive-fontsize";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h } from "../utils/Size";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import Item1 from "../components/componentsClient/Item1";

export default function ProfilMarchand({ props, navigation }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const navToListemarchands = () => navigation.navigate("Listemarchands");

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <MyAppbar title="Nouvelle commande" navigation={navToListemarchands} />
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
            commandecree="12/12/2020 à 10h30"
          />
          <GreenBtn grayed myGreenBtn title="Commande passée" />

          <View
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>Liste des produits</Text>
            </Divider>
            <Item1
              title="Brit Care Hair & Skin"
              description="Animaux » chiens"
              img={require("../assets/assets/icons/client-fond-btn-commande.png")}
              myItem
              badged
            />
            <Item1
              title="Brit Chicken & Salamon"
              description="Animaux » chiens"
              img={require("../assets/assets/icons/client-fond-btn-commande.png")}
              myItem
              badged
            />
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>
                Options de la commande
              </Text>
            </Divider>
            <Item1 title="Mode de payement" description="Crédit total" myItem />
            <Item1 title="Livraison" description="Oui" myItem />
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
