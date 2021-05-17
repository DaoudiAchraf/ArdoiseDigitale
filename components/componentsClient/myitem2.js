import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import NotificationBackground from "../../assets/assets/svgricons/notificationBackground";

const item2 = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "80%" }}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.small}>{props.small}</Text>
          <Text style={styles.smaller}>{props.smaller}</Text>
        </View>
        <View style={{ width: "20%" }}>
          <NotificationBackground style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    borderRadius: 3,
    marginBottom: "2%",
    height: 60,
    width: "85%",
    alignSelf: "center",
  },
  title: {
    color: "#B0AEAE",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(13),
    fontWeight: "bold",
    marginTop: "-2%",
  },
  small: {
    color: "#B0AEAE",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
  },
  smaller: {
    color: "#B0AEAE",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(9),
  },
  image: {
    height: 60,
    width: "100%",
    marginTop: "-15%",
    marginLeft: "30%",
  },
});

export default item2;
