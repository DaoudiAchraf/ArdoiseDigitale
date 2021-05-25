import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import CardClient from "../components/componentsClient/CardClient";
import { Button } from "react-native-paper";
import { w } from "../utils/Size";
import GreenBtn from "../components/componentsClient/GreenBtn";
import RedBtn from "../components/componentsClient/RedBtn";
import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import PlusMinus2 from "../components/componentsClient/PlusMinus2";
import { RFValue } from "react-native-responsive-fontsize";

function ConsulterCompteMarchand({ navigation }) {
  const [isMinus, setIsMinus] = useState(false);
  const [isMinus1, setIsMinus1] = useState(false);
  const [isMinus2, setIsMinus2] = useState(false);
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

        <View style={{ marginTop: "10%" }}>
          <CardClient
            title="Express"
            small="Green Hill"
            smaller="NY 145230"
            merchant="Kristin"
            text1="Livraison disponible"
            text2="Accepte le paiement comptant "
            source={require("../assets/assets/user.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginRight: "8%",
            marginLeft: "8%",
          }}
        >
          <View
            style={{
              width: "40%",
              alignSelf: "center",
            }}
          >
            <RedBtn title="Fermer l'ardoise" />
          </View>
          <View style={{ width: "60%", alignSelf: "center" }}>
            <GreenBtn
              title=" Passer une commande"
              onPress={() => navigation.navigate("Notification")}
            />
          </View>
        </View>

        <View>
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
              <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
            </View>
          </View>

          {isMinus && <View></View>}
        </View>

        <View>
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
                <Text style={{ fontSize: RFValue(17) }}> Ardoise</Text>
              </Divider>
            </View>

            <View style={{ width: "10%", alignSelf: "center" }}>
              <PlusMinus isMinus2={isMinus2} setIsMinus2={setIsMinus2} />
            </View>
          </View>

          {isMinus && <View></View>}
        </View>

        <View
          style={{
            width: "95%",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 40,
              alignItems: "center",
              alignSelf: "center",
              width: "83%",
              borderRadius: 3,
            }}
          >
            <View
              style={{
                padding: "5%",
              }}
            >
              <Text style={{ color: "grey", fontSize: RFValue(13) }}>
                Un total de 150 MAD à payer le 12/12/2020
              </Text>
            </View>
          </View>
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
            <GreenBtn title="Historique des paiements" />
          </View>
          <View style={{ width: "50%", alignSelf: "center" }}>
            <GreenBtn title=" Payer maintenant" />
          </View>
        </View>
        <View>
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

          {isMinus && <View></View>}
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
