import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ClientFondBtnHistorique from "../../assets/svgr/ClientFondBtnHistorique";
import ClientFondBtnNotification from "../../assets/svgr/ClientFondBtnNotification";
import MarchandFondBtnCatalogue from "../../assets/svgr/MarchandFondBtnCatalogue";

const GreenItem = ({ title, description, logo }) => {
  const Logo = {
    first: ClientFondBtnHistorique,
    second: ClientFondBtnNotification,
    third: MarchandFondBtnCatalogue,
  };
  return (
    <TouchableOpacity style={styles.item}>
      <View style={{ marginVertical: "5%", backgroundColor: "blue" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {logo == "ClientFondBtnHistorique" && <Logo.first />}
      {logo == "ClientFondBtnNotification" && <Logo.second />}
      {logo == "MarchandFondBtnCatalogue" && <Logo.third />}
    </TouchableOpacity>
  );
};

export default GreenItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#496054",
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: RFValue(17),
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: RFValue(11),
  },
});
