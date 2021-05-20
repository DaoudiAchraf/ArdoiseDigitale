import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Myappbar from "../components/componentsClient/myappbar";
import Mynavbar from "../components/componentsClient/navbar";
import Item2 from "../components/componentsClient/Item2";
import MyItem from "../components/componentsClient/Item1";
import Divider from "react-native-divider";

const Separator = () => <View style={styles.separator} />;

function Listemarchands() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <Myappbar title="Ma liste de marchands" />
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
        />

        <View style={{ marginTop: "12%", margin: "3%" }}>
          <MyItem
            title="Trouver un marchand"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/client-fond-btn-carte.png")}
          />

          <View style={{ flexDirection: "row", margin: "3%" }}>
            <View style={{ width: "95%", margin: "1%" }}>
              <Divider borderColor="#fff" color="#fff" orientation="center">
                Ma liste
              </Divider>
            </View>
            <View style={{ width: "5%", marginTop: "-2%" }}></View>
          </View>

          <Item2
            title="Commande prete"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/user.png")}
          />
        </View>
        <Separator />
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
});

export default Listemarchands;
