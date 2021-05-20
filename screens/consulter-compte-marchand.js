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
import Card from "../components/componentsClient/card";

function Consultercomptemarchand() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <Myappbar
          title="Name"
          subtitle="Ardoise ouverte depuis 12/1/2020 à 10h30"
        />
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/client-fond-btn-marchands.png")}
        />
        <Card title="Express" small="bla" smaller="bla" />
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
});

export default Consultercomptemarchand;
