import React, { useState } from "react";

import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import MarkerSvg from "../assets/svg-icones-client/marker.jsx";
import Filter from "../assets/svg-icones-client/filter.jsx";
import BackSvg from "../assets/svg-icones-client/back.jsx";
import Recherche from "../assets/assets/svgricons/recherche.jsx";
import { h, w } from "../utils/Size";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Button, TextInput, Portal, Searchbar } from "react-native-paper";
import MenuFiltres from "../components/Client_UI/menu_filtres";
import CalloutCard from "../components/Client_UI/CalloutCard.js";

export default function MapScreen({ navigation }) {
  const [markers, setMarkers] = useState([
    {
      title: "Target Express",
      latlng: { latitude: 36.865384, longitude: 10.304349 },
      description: "751 Green Hill Dr. Webster,\nNY 114580",
    },
    {
      title: "marchand 2",
      latlng: { latitude: 36.870488, longitude: 10.263784 },
      description: "I am a very good shop",
    },
    {
      title: "marchand 3",
      latlng: { latitude: 36.850059, longitude: 10.259115 },
      description: "I am a very good shop",
    },
    {
      title: "marchand 4",
      latlng: { latitude: 36.846111, longitude: 10.272494 },
      description: "I am a very good shop",
    },
  ]);
  const aaa = require("../assets/assets/targetexpress.jpg");

  return (
    <ScrollView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.87014037882809,
            longitude: 10.237451295943895,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <MarkerSvg />

              <Callout
                onPress={() => navigation.navigate("ProfilMarchand")}
              ></Callout>
            </Marker>
          ))}
        </MapView>

        <View style={styles.container2}>
          <Button
            compact
            icon={BackSvg}
            color="#426252"
            mode="contained"
            onPress={() => navigation.goBack()}
            style={{ width: w(10), height: h(5.5) }}
          />

          <MenuFiltres />

          <Searchbar
            icon={Recherche}
            placeholder={"Recherche.."}
            onChangeText={(text) => console.log(text)}
            onIconPress={(text) => {
              console.log(text);
            }}
            inputStyle={{ fontSize: RFValue(12) }}
            style={{ width: w(47), height: h(5.5) }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    top: h(5),
    left: w(7),
    position: "absolute",
    justifyContent: "space-between",
    width: w(88),
    height: h(100),
  },
});
/*
<TextInput
              mode="flat"
              dense="true"
              selectionColor="#426252"
              underlineColor="#426252"
              style={{ height: '100%' }}
            />
            */
