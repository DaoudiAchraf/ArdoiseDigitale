import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Drawer,
  Card,
  Divider,
  Title,
  Subheading,
  Paragraph,
} from "react-native-paper";
import { List } from "react-native-paper";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { w, h } from "../../utils/Size";

const Transaction = (props) => {
  return (
    <Card
      style={{
        width: "90%",
        alignSelf: "center",
        marginTop: "10%",
      }}
    >
      <Card.Content>
        <Text style={styles.title}>{props.type}</Text>
        <Text style={styles.content}>{props.title1}</Text>
        <Text style={styles.title}>{props.montant}</Text>
        <Text style={styles.content}>{props.title2}</Text>
        <Text style={styles.small}>{props.detail1}</Text>
        <Text style={styles.small}>{props.detail2}</Text>
        <Text style={styles.subtitle}>{props.content}</Text>
        <Text style={styles.small}>{props.content1}</Text>
        <Text style={styles.small}>{props.content2}</Text>
        <Text style={styles.subtitle}>{props.method}</Text>
        <Text style={styles.small}>{props.meth}</Text>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(13),
    fontWeight: "bold",
    paddingBottom: "1%",
  },
  small: {
    color: "#B0AEAE",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(12),
  },
  content: {
    color: "#545353",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(17),
    fontWeight: "bold",
    paddingBottom: "5%",
  },
  subtitle: {
    color: "#545353",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(13),
    paddingTop: "3%",
    paddingBottom: "3%",
  },
});

export default Transaction;
