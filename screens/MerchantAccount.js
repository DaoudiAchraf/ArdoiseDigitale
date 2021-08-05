import React from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import Item1 from "../components/componentsClient/Item1";
import Item2 from "../components/componentsClient/Item2";
import Divider from "react-native-divider";
import GreenBtn from "../components/componentsClient/GreenBtn";
import LogoWhite from "../assets/svgr/Logo/LogoWhite";
import { h, w } from "../utils/Size";
import GreenItem from "../components/MerchantComponents/GreenItem";
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from "@react-navigation/native";

function MerchantAccount({ navigation }) {
  const navToNotifications = () => navigation.navigate("MerchantNotifications");
  const navToMerchantClientList = () =>
    navigation.navigate("MerchantClientList");
  const navToMerchantClientsOrdersList = () =>
    navigation.navigate("MerchantClientsOrdersList");
  const navToMerchantCatalogueModification = () =>
    navigation.navigate("MerchantCatalogueModification");
  return (
    <View style={{ flex: 1, backgroundColor: "#324B3E" }}>
      <View style={{ height: "17%" }}>
        <Image
          resizeMode="contain"
          style={{
            marginTop: "15%",
            width: "90%",
            height: "60%",
            alignSelf: "center",
          }}
          source={require("../assets/assets/LogoWhite.png")}
        />
      </View>

      <ScrollView style={{ top: "6%", marginBottom: "15%" }}>
        <View style={{ padding: "2%", width: w(80), alignSelf: "center" }}>
          <Item1
            title="Mon solde"
            description="12 000 MAD"
            img={require("../assets/assets/icons/client-fond-btn-historique.png")}
          />
          <Item1
            title="Notifications"
            description="Vous avez 3 nouvelles notifications"
            img={require("../assets/assets/icons/client-fond-btn-notification.png")}
            navigation={navToNotifications}
          />
          <Item1
            title="Ma Liste des clients"
            description="Vous avez 3 nouvelles notifications"
            img={require("../assets/assets/icons/client-fond-btn-marchands.png")}
            navigation={navToMerchantClientList}
          />
          <Item1
            title="Mon Catalogue"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/marchand-fond-btn-catalogue.png")}
            navigation={navToMerchantCatalogueModification}
          />

          <Divider borderColor="#fff" color="#fff" orientation="center">
            <Text style={{ fontWeight: "bold" }}>Dernières commandes</Text>
          </Divider>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: RFValue(11),
              marginVertical: "-1.5%",
            }}
          >
            Vous avez 3 nouvelles commandes.
          </Text>

          <Item2
            title="Offre de prix reçue"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/fond-page-commandes.png")}
          />
          <Item2
            title="Commande prete"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/fond-page-commandes.png")}
          />
          <Item2
            title="Commande servie"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/fond-page-commandes.png")}
          />
        </View>
        <GreenBtn
          title="Voir toutes mes commandes"
          action={navToMerchantClientsOrdersList}
        />
      </ScrollView>
    </View>
  );
}

export default MerchantAccount;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: "10%",
    marginVertical: "10%",
  },
});

/*

   return (
    <View style={{ alignItems: "center", backgroundColor: "#324B3E" }}>
      <View
        style={{ backgroundColor: "red", width: w(80), alignSelf: "center" }}
      >
        <LogoWhite />
        <ScrollView style={styles.scroll}>
          <GreenItem
            title="Mon solde"
            description="12 000 MAD"
            logo="ClientFondBtnHistorique"
          />
          <GreenItem
            title="Mon solde"
            description="12 000 MAD"
            logo="ClientFondBtnNotification"
          />
        </ScrollView>
      </View>
    </View>
  );



  */
