import React, { useEffect, useState, useContext } from "react";

import MapView, { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import MarkerSvg from "../assets/svg-icones-client/marker.jsx";
import Filter from "../assets/svg-icones-client/filter.jsx";
import BackSvg from "../assets/svg-icones-client/back.jsx";
import Recherche from "../assets/assets/svgricons/recherche.jsx";
import { h, w } from "../utils/Size";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Button, TextInput, Portal, Searchbar } from "react-native-paper";
import MenuFiltres from "../components/Client_UI/menu_filtres";
import CalloutCard from "../components/Client_UI/CalloutCard.js";
import clientService from "../services/Clientt";
import { Context } from "../contexts/Auth.context";
import ProfilMarchand from "./ProfilMarchand.js";
import CardClient from "../components/componentsClient/CardClient.js";

export default function MapScreen({ navigation }) {
  const {
    merchantsList,
    setMerchantsList,
    currentMerchant,
    setCurrentMerchant,
  } = useContext(Context);

  const fetchMerchants = async () => {
    const result = await clientService.getProfiles();
    if (result.ok) {
      //const tab = result.data.filter(item => item._id === "60d0b42971607e928ce4a7bf" || item._id === "60d0b4cc71607e928ce4a7c1" || item._id === "60d0b34e71607e928ce4a7bd");
      setMerchantsList(result.data);
    }
  };

  useEffect(() => {
    fetchMerchants();
  }, []);

  // const [markers, setMarkers] = useState([
  //   {
  //     title: "Target Express",
  //     latlng: { latitude: 36.865384, longitude: 10.304349 },
  //     description: "751 Green Hill Dr. Webster,\nNY 114580",
  //   },
  //   {
  //     title: "marchand 2",
  //     latlng: { latitude: 36.870488, longitude: 10.263784 },
  //     description: "I am a very good shop",
  //   },
  //   {
  //     title: "marchand 3",
  //     latlng: { latitude: 36.850059, longitude: 10.259115 },
  //     description: "I am a very good shop",
  //   },
  //   {
  //     title: "marchand 4",
  //     latlng: { latitude: 36.846111, longitude: 10.272494 },
  //     description: "I am a very good shop",
  //   },
  // ]);

  const nav = (merchant) => {
    setCurrentMerchant(merchant);
    navigation.navigate("ProfilMarchand");
  };

  return (
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
        {merchantsList.map((merchant, index) => (
          <Marker
            onPress={() => nav(merchant)}
            key={merchant._id}
            coordinate={{
              latitude: merchant.address.position.lat,
              longitude: merchant.address.position.lng,
            }}
            tracksViewChanges={false}
          >
            <MarkerSvg />
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

      <View style={styles.callout}>
        {currentMerchant && (
          <CardClient
            myCard
            title="Target Express"
            small="751 Green Hill Dr. Webster,"
            smaller={currentMerchant.phoneNumber}
            merchant={
              currentMerchant.firstName + " " + currentMerchant.lastName
            }
            text1="Livraison disponible."
            text2="Accepte le paiement comptant et par crédit total."
            source={require("../assets/assets/targetexpress.jpg")}
            action={() => setCurrentMerchant(null)}
            item={currentMerchant}
          />
        )}
      </View>
    </View>
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
  callout: {
    position: "absolute",
    bottom: h(4),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
});
