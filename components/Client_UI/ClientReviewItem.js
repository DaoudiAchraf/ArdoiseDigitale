import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { h, w } from "../../utils/Size";

const ClientReviewItem = ({ name, date, img, text }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={{ marginBottom: "3%", flexDirection: "row" }}>
        <Image style={styles.img} source={img} />
        <View style={{ marginLeft: "3%" }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ClientReviewItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: "5%",
    borderRadius: 3,
    marginTop: "5%",
    elevation: 4,
  },
  name: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(17),
    fontWeight: "bold",
  },
  date: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
    fontWeight: "bold",
  },
  text: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(10),
  },
  img: {
    alignSelf: "center",
    width: w(9),
    height: h(5),
  },
});
