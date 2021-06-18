import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import NotificationBackground from "../../assets/assets/svgricons/notificationBackground";
import { w, h } from "../../utils/Size";
import { Badge } from "react-native-paper";

const Item2 = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation && props.navigation()}
    >
      <View style={{ flexDirection: "row", marginTop: "-5%" }}>
        {props.badged && <Badge size={10} style={styles.badge} />}

        <View style={{ width: w(87), margin: "4%", marginLeft: "2%" }}>
          <Text
            style={[styles.title, props.grayed ? styles.grayed : styles.normal]}
          >
            {props.title}
          </Text>
          <Text
            style={[styles.small, props.grayed ? styles.grayed : styles.normal]}
          >
            {props.small}
          </Text>
          <Text style={styles.smaller}>{props.smaller}</Text>
        </View>
        <View style={{ width: w(15), marginLeft: "-21%" }}>
          <Image source={props.source} style={styles.image}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: "101.7%",
    top: "1.7%",
    backgroundColor: "#DC2C23",
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    borderRadius: 3,
    marginTop: "5%",
    height: h(9.5),
    width: w(92),
    alignSelf: "center",
  },
  grayed: {
    color: "#B0AEAE",
  },
  normal: {
    color: "#485c54",
  },
  title: {
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(17),
    fontWeight: "bold",
  },
  small: {
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
    height: "90%",
    width: "100%",
  },
});

export default Item2;