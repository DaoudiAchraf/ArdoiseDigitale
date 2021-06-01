import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import Divider from "react-native-divider";
import { RFValue } from "react-native-responsive-fontsize";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import Separator from "../components/componentsClient/Separator";
import Item2 from "../components/componentsClient/Item2";
import FondPageMarchands from "../assets/svg-icones-client/fond-page-marchands";

function ConsulterArdoiseFermee({ navigation }) {
  const showDialog = () => setVisible(true);
  const [isMinus, setIsMinus] = useState(false);
  const [isMinus1, setIsMinus1] = useState(false);
  const navToHistoriquePaiements = () =>
    navigation.navigate("HistoriquePaiements");
  const navToProfilMarchand = () => navigation.navigate("ProfilMarchand");
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#324B3E",
        }}
      >
        <Myappbar
          title="Kristen Harper"
          subtitle="Ardoise fermée le 12/12/2020 à 10h30"
        />
        <FondPageMarchands style={styles.svg} />

        <View style={{ marginTop: "10%", alignContent: "space-around" }}>
          <CardClient
            title="Express"
            small="bla"
            smaller="bla"
            merchant="Kristin"
            text1="....."
            text2="..."
            source={require("../assets/assets/user.png")}
          />
          <View style={{ width: "90%", alignSelf: "center" }}>
            <GreenBtn
              title="Demander la récouverture de l'ardoise"
              action={navToProfilMarchand}
            />
            <GreenBtn
              title=" Historique des paiements"
              action={navToHistoriquePaiements}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <View
              style={{
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Divider borderColor="#fff" color="#fff" orientation="center">
                <Text style={{ fontSize: RFValue(17) }}> Mes commandes</Text>
              </Divider>
            </View>

            <View style={{ width: "10%", alignSelf: "center" }}>
              <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
            </View>
          </View>

          {isMinus1 && (
            <View
              style={{
                alignSelf: "center",
              }}
            >
              <Item2
                title="Commande Terminée"
                small="Sam lrving le 12/12/2020 à 10h30"
                smaller="Appuyez pour voir les détails."
                source={require("../assets/assets/icons/client-fond-btn-historique.png")}
                grayed="true"
              />
              <Item2
                title="Commande payée"
                small="Sam lrving le 12/12/2020 à 10h30"
                smaller="Appuyez pour voir les détails."
                source={require("../assets/assets/icons/client-fond-btn-historique.png")}
                grayed="true"
              />
              <Item2
                title="Commande payée avec un avis"
                small="Sam lrving le 12/12/2020 à 10h30"
                smaller="Appuyez pour voir les détails."
                source={require("../assets/assets/icons/client-fond-btn-historique.png")}
                grayed="true"
              />

              <Separator />
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <View
              style={{
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Divider borderColor="#fff" color="#fff" orientation="center">
                <Text style={{ fontSize: RFValue(17) }}> Avis des clients</Text>
              </Divider>
            </View>

            <View style={{ width: "10%", alignSelf: "center" }}>
              <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
            </View>
          </View>

          {isMinus && (
            <View>
              <Separator />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default ConsulterArdoiseFermee;

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-10%",
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});
