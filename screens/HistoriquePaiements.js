import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import Item3 from "../components/componentsClient/Item3";
import Myappbar from "../components/componentsClient/myappbar";

const Separator = () => <View style={styles.separator} />;

function HistoriquePaiements() {
  return (
    <View style={{ flex: 1, backgroundColor: "#324B3E" }}>
      <ScrollView style={{ flex: 1 }}>
        <Myappbar title="Historique des paiements" />
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/fond-page-historique.png")}
        />
        <View style={{ margin: "10%" }}>
          <Item3
            title="Payement automatique de crédit"
            small="Pour le compte de Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/client-fond-btn-historique.png")}
          />
          <Item3
            title="Payement mannuel de crédit"
            small="Pour le compte de Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons//client-fond-btn-historique.png")}
          />
          <Item3
            title="Solde insuffisant"
            small="Le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons//client-fond-btn-historique.png")}
          />
          <Item3
            title="Payement au comptant"
            small="Pour le compte de Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons//client-fond-btn-historique.png")}
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

export default HistoriquePaiements;
