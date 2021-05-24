import React from "react";
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
import PlusMinus from "../components/componentsClient/PlusMinus";
import Divider from "react-native-divider";
import { RFValue } from "react-native-responsive-fontsize";

function ConsulterArdoiseFermee() {
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
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
        />

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
          <View
            style={{
              marginRight: "2%",
              marginLeft: "2%",
            }}
          >
            <GreenBtn title="Demander la récouverture de l'ardoise" />
          </View>
          <View
            style={{
              marginRight: "2%",
              marginLeft: "2%",
              marginTop: "-5%",
            }}
          >
            <GreenBtn title=" Historique des paiements" />
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: "8%",
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
              <PlusMinus />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: "8%",
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
              <PlusMinus />
            </View>
          </View>
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
});
