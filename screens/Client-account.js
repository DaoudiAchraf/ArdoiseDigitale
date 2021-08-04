import React, { useContext ,useEffect } from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import Item1 from "../components/componentsClient/Item1";
import Item2 from "../components/componentsClient/Item2";
import Divider from "react-native-divider";
import GreenBtn from "../components/componentsClient/GreenBtn";
import { Context } from "../contexts/Auth.context";

function Clientaccount({ navigation }) {
  const { ardoiseList } = useContext(Context);

  useEffect(() => {
      console.log(ardoiseList.length)
  }, [ardoiseList.length])

  const navToNotification = () => navigation.navigate("Notification");
  const navToListemarchands = () => navigation.navigate("Listemarchands");
  const navToMapScreen = () => navigation.navigate("MapScreen");
  const navToListeDesCommandes = () => navigation.navigate("ListeDesCommandes");
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
        <View style={{ padding: "2%" }}>
          <Item1
            title="Mon solde"
            description="12 000 MAD"
            img={require("../assets/assets/icons/client-fond-btn-historique.png")}
          />
          <Item1
            title="Mes notifications"
            description="Vous avez 3 nouvelles notifications"
            img={require("../assets/assets/icons/client-fond-btn-notification.png")}
            navigation={navToNotification}
          />
          <Item1
            title="Trouver un marchand"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/client-fond-btn-carte.png")}
            navigation={navToMapScreen}
          />
          <Item1
            title="Mes marchands"
            description= {`Vous avez ${ardoiseList.length} ardoises ouverte`}
            img={require("../assets/assets/icons/client-fond-btn-marchands.png")}
            navigation={navToListemarchands}
          />
          <Divider borderColor="#fff" color="#fff" orientation="center">
            Mes commandes actives
          </Divider>

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
          action={navToListeDesCommandes}
        />
      </ScrollView>
    </View>
  );
}

export default Clientaccount;
