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

function consultercomptemarchand() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <Myappbar
          title="Notifications"
          subtitle="Vous avez nouvelles notifications"
        />

        <Card title="Express" small="bla" smaller="bla" />
      </ScrollView>
      <Mynavbar></Mynavbar>
    </View>
  );
}

export default consultercomptemarchand;
