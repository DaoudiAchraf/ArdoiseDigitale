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
import Mynavbar from "../components/componentsClient/navbar";
import Item2 from "../components/componentsClient/Item2";
import MyItem from "../components/componentsClient/Item1";
import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import Separator from "../components/componentsClient/Separator";
import { RFValue } from "react-native-responsive-fontsize";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";

function Listemarchands({ navigation }) {
  const [isMinus, setIsMinus] = useState(false);
  const navToConsulterCompteMarchand = () =>
    navigation.navigate("ConsulterCompteMarchand");
  const navToNouvelleCommande = () => navigation.navigate("NouvelleCommande");
  const navToMapScreen = () => navigation.navigate("MapScreen");

  const navToClientaccount = () => navigation.navigate("Clientaccount");
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <Myappbar
          title="Ma liste de marchands"
          navigation={navToClientaccount}
        />

        <FondPageMarchand style={styles.svg} />
        <View style={{ marginTop: "10%", margin: "3%", padding: "2%" }}>
          <MyItem
            title="Trouver un marchand"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/client-fond-btn-carte.png")}
            navigation={navToMapScreen}
          />
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
              <Text style={{ fontSize: RFValue(17) }}> Commandes Actives</Text>
            </Divider>
          </View>
          <View
            style={{
              width: "10%",
              alignSelf: "center",
            }}
          >
            <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
          </View>
        </View>
        {isMinus && (
          <View>
            <Item2
              title="Kristen Harper"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/user.png")}
              navigation={navToConsulterCompteMarchand}
            />
            <Item2
              title="Sam lrving"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/user2.png")}
              navigation={navToNouvelleCommande}
            />
            <Item2
              title="Kristen Harper"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/user.png")}
            />
            <Item2
              title="Kristen Harper"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/user2.png")}
            />
            <Item2
              title="Kristen Harper"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/user.png")}
            />
            <Item2
              title="Kristen Harper"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/user2.png")}
            />
            <Separator />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: "40%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: "25%",
    marginRight: "25%",
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});

export default Listemarchands;
