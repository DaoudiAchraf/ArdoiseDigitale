import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import Item2 from "../components/componentsClient/Item2";
import Item3 from "../components/componentsClient/Item3";
import Separator from "../components/componentsClient/Separator";

function Notification({ navigation }) {
  const navOffrePrixCommande = () => navigation.navigate("OffrePrixCommande");
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#324B3E",
      }}
    >
      <Image
        style={styles.image}
        source={require("../assets/assets/icons/fond-page-notifications.png")}
      />
      <Myappbar
        title="Notifications"
        subtitle="Vous avez 3 nouvelles notifications"
        navigation={navigation}
      />

      <View style={{ marginTop: "18%", margin: "3%", padding: "2%" }}>
        <Item2
          title="Offre de prix reçue"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-commande.png")}
          badged
        />
        <Item2
          title="Commande prete"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-commande.png")}
          badged
        />
        <Item2
          title="Commande servie"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-commande.png")}
          badged
        />
        <Item2
          title="Ardoise payée"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-historique.png")}
          grayed
        />
        <Item2
          title="Echéance étendue"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-historique.png")}
          grayed
        />
        <Item2
          title="Solde insuffisant"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-historique.png")}
          grayed
        />
        <Item2
          title="Payement du dans 2 jours"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require("../assets/assets/icons/client-fond-btn-historique.png")}
          grayed
        />
      </View>
      <Separator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-17%",
  },
});

export default Notification;
