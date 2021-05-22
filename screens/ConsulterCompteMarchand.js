import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import Card from "../components/componentsClient/card";
import { Button } from "react-native-paper";
import { w } from "../utils/Size";
import Btn from "../components/componentsClient/test";

function ConsulterCompteMarchand() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#324B3E",
        }}
      >
        <Myappbar title="Name" subtitle="Vous avez 3 nouvelles notifications" />
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
        />

        <View style={{ marginTop: "10%", alignContent: "space-around" }}>
          <Card
            title="Express"
            small="bla"
            smaller="bla"
            merchant="Kristin"
            text1="....."
            text2="..."
            source={require("../assets/assets/user.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: "5%",
          }}
        >
          <View
            style={{
              width: "35%",
              alignSelf: "center",
            }}
          >
            <Btn title="Fermer l'ardoise" />
          </View>
          <View style={{ width: "65%", alignSelf: "center" }}>
            <Btn title=" Passer une commande" />
          </View>
        </View>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Btn title="Historique" />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: "5%",
          }}
        >
          <View
            style={{
              width: "50%",
              alignSelf: "center",
            }}
          >
            <Btn title="Historique des paiements" />
          </View>
          <View style={{ width: "50%", alignSelf: "center" }}>
            <Btn title=" Payer maintenant" />
          </View>
        </View>
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
    top: "-10%",
  },
});

export default ConsulterCompteMarchand;
