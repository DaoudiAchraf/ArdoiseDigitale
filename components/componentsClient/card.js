import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Drawer,
  Card,
  Divider,
  Title,
  Subheading,
  Paragraph,
} from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Item2 from "../../components/componentsClient/myitem2";

const card = (props) => {
  return (
    <Card style={{ width: "80%", alignSelf: "center", marginTop: "10%" }}>
      <Card.Cover source={require("../../assets/assets/targetexpress.jpg")} />
      <Card.Content style={{ padding: "3%", paddingLeft: "5%" }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.small}>{props.small}</Text>
        <Text style={styles.smaller}>{props.smaller}</Text>
      </Card.Content>
      <Divider />

      <Item2 title="bla" small="bla" smaller="bla" />
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
});
export default card;
