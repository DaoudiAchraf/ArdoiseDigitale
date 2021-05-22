import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import Transaction from "../components/componentsClient/Transaction";
import Myappbar from "../components/componentsClient/myappbar";

const Separator = () => <View style={styles.separator} />;

function DetailsTransaction() {
  return (
    <View style={{ flex: 1, backgroundColor: "#324B3E" }}>
      <ScrollView style={{ flex: 1 }}>
        <Myappbar title="Details de la transaction" />
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/fond-page-historique.png")}
        />
        <View style={{ margin: "3%" }}>
          <Transaction
            type="Type de paiement"
            title1="Paiement au comptant"
            montant="Montant"
            title2="150 MAD"
            detail1="Paiement effectué par Sam lrving le 12/12/2020 à 10h30"
            detail2="Commande REF HM-123456789 passée avec Kristen Harper"
            content="Contenu de la commande"
            content1="3 x BRIT Care Chiken et Salmon"
            content2="3 x BRIT Care Skin et Hair"
            method="Méthode de payement choisie"
            meth="PAiement au comptant"
          />
        </View>
        <Separator />
      </ScrollView>
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
    top: "-12%",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: "25%",
    marginRight: "25%",
  },
});

export default DetailsTransaction;
