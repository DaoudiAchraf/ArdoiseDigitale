import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, Divider } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { w, h } from "../../utils/Size";

const card = (props) => {
  return (
    <Card
      style={{
        width: "85%",
        alignSelf: "center",
        marginTop: "5%",
      }}
    >
      <Card.Cover
        style={{ height: h(15) }}
        source={require("../../assets/assets/targetexpress.jpg")}
      />
      <Card.Content style={{ padding: "3%", paddingLeft: "5%" }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.small}>{props.small}</Text>
        <Text style={styles.smaller}>{props.smaller}</Text>
      </Card.Content>
      <Divider />
      <View style={{ flexDirection: "row", margin: "3%" }}>
        <View style={{ width: w(20) }}>
          <Image source={props.source} style={styles.image}></Image>
        </View>
        <View style={{ width: w(80), marginLeft: "5%" }}>
          <Text style={styles.title}>{props.merchant}</Text>
          <Text style={styles.small}>{props.text1}</Text>
          <Text style={styles.smaller}>{props.text2}</Text>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "#545353",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(16),
    fontWeight: "bold",
    paddingBottom: "1%",
  },
  small: {
    color: "#B0AEAE",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(12),
  },
  smaller: {
    color: "#B0AEAE",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(12),
  },
  image: {
    height: h(8),
    width: w(20),
  },
});
export default card;
