import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import Item2 from "../components/componentsClient/Item2";
import Separator from "../components/componentsClient/Separator";
import Divider from "react-native-divider";
import { RFValue } from "react-native-responsive-fontsize";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import FondPageCommandes from "../assets/svg-icones-client/fond-page-commandes";

//Todo: this needs flatlists like merchant clientList

const ListeDesCommandes = ({ navigation }) => {
  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(true);

  const navCommandePrete = () => navigation.navigate("CommandePrete");
  const navCommandePayee = () => navigation.navigate("CommandePayee");
  const navCommandePayeeAvis = () => navigation.navigate("CommandePayeeAvis");
  const navCommandeTerminee = () => navigation.navigate("CommandeTerminee");
  const navMerchantClientOrder = () =>
    navigation.navigate("MerchantClientOrder");
  const navOffrePrixCommandeAccepted = () =>
    navigation.navigate("OffrePrixCommandeAccepted");
  /*
        <Image
        style={styles.image}
        source={require('../assets/assets/icons/fond-page-notifications.png')}
        />
      */
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#324B3E",
      }}
    >
      <Myappbar
        title={"Liste Des Commandes"}
        subtitle="Vous avez 3 Commandes actives"
      />
      <FondPageCommandes style={styles.svg} />

      <View style={{ margin: "3%", padding: "2%" }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}> Commandes actives</Text>
            </Divider>
          </View>
          <View style={{ width: "10%", alignSelf: "center" }}>
            <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
          </View>
        </View>
        {isMinus && (
          <View style={{ margin: "8%" }}>
            <Item2
              title="Offre de prix reçue"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-commande.png")}
              navigation={navMerchantClientOrder}
            />
            <Item2
              title="Offre de prix accepté"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-commande.png")}
              navigation={navOffrePrixCommandeAccepted}
            />
            <Item2
              title="Commande prête"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-commande.png")}
              navigation={navCommandePrete}
            />
          </View>
        )}

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>Commandes Terminées</Text>
            </Divider>
          </View>
          <View style={{ width: "10%", alignSelf: "center" }}>
            <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
          </View>
        </View>
        {isMinus1 && (
          <View>
            <Item2
              title="Commande Terminée"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-historique.png")}
              navigation={navCommandeTerminee}
              grayed="true"
            />
            <Item2
              title="Commande payée"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-historique.png")}
              navigation={navCommandePayee}
              grayed="true"
            />
            <Item2
              title="Commande payée avec un avis"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-historique.png")}
              navigation={navCommandePayeeAvis}
              grayed="true"
            />

            <Separator />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ListeDesCommandes;

const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
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
