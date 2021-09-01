import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const EmptyList = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/icons8-purchase-order-80.png")}
      ></Image>
      <Text style={styles.textBold}>Aucune commande trouvée...</Text>
      {props.client && (
        <Text style={styles.textNormal}>
          On dirait que vous n'avez pas encore passé de commande
        </Text>
      )}
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "10%",
  },
  img: {},
  textBold: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFValue(16),
  },
  textNormal: {
    color: "lightgrey",
    fontSize: RFValue(12),
  },
});
