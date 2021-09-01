import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Badge } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { w, h, totalSize } from "../utils/Size";
import { subCategory, categories } from "../constants/Arrays";
import { LogBox } from "react-native";

const ProductCard_item = (props) => {
  const { _id, quantity } = props.product;

  console.log("procCARDDDDDDD", props.product);
  // console.log(props.product)

  const navTo_productDetails = () => {
    if (typeof _id === "object")
      props.navigation.navigate("ProductDetails", {
        ..._id,
        quantity,
        ViewOnly: true,
      });
    else
      props.navigation.navigate("ProductDetails", {
        ...props.product,
        ViewOnly: true,
      });
  };

  return (
    <TouchableOpacity
      style={[styles.button, props.indisponible && styles.indisponible]}
      onPress={navTo_productDetails}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: w(87), marginLeft: "2%" }}>
          <Text style={styles.title}>
            {(_id && _id.productName) || props.product.productName}
          </Text>
          <Text style={styles.small}>
            <Text style={styles.smaller}>
              {props.indisponible && (
                <Text style={(styles.smaller, { color: "red" })}>
                  Indisponible{" "}
                </Text>
              )}
              {(_id &&
                typeof _id === "object" &&
                `${categories[_id.category].name} » ${
                  subCategory[_id.category][_id.subCategory].name
                }`) ||
                `${categories[props.product.category].name} » ${
                  subCategory[props.product.category][props.product.subCategory]
                    .name
                }`}
            </Text>
            {props.small}
          </Text>
        </View>

        {/* <FondBtnCommandes
          style={{ position: 'absolute', left: '80%', top: '-20%' }}
        /> */}
        {categories[0].icon({
          width: totalSize(3.5),
          height: totalSize(5),
          position: "absolute",
          left: "88%",
          bottom: "-20%",
        })}
        {props.badged && (
          <Badge size={25} style={styles.badge}>
            {`x ${quantity}`}
          </Badge>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  indisponible: {
    backgroundColor: "lightgrey",
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: "3%",
    paddingBottom: "4%",
    marginBottom: "3%",
    borderRadius: 3,

    width: "100%",
    alignSelf: "center",
  },
  title: {
    color: "#333333",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(17),
    fontWeight: "bold",
    paddingBottom: "1.1%",
  },
  small: {
    color: "#333333",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
    fontWeight: "bold",
  },
  smaller: {
    color: "#C1272D",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    left: "90%",
    top: "-22%",
    color: "#324B3E",
    backgroundColor: "transparent",
    fontWeight: "700",
    fontSize: RFValue(15),
  },
});

export default ProductCard_item;
