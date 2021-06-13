import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { h, totalSize, w } from "../utils/Size";
import { RFPercentage } from 'react-native-responsive-fontsize';

const SignUp = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/BG.png')} style={styles.image} >
    <View style={styles.signUp_container}>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "70%" }}
          source={require("../assets/images/logo-light.png")}
        />
      </View>

      <View style={styles.signUp__Box}>
        <Text style={styles.topTxt}>Créer un compte</Text>

        <TouchableOpacity
          style={{ ...styles.connectBtn, marginBottom: h(1.6) }}
          onPress={() => navigation.navigate("SignUp_Trader")}
        >
          <Entypo
            name="shop"
            size={totalSize(3.5)}
            color="white"
            style={{ marginRight: w(5) }}
          />
          <Text style={styles.btnText}>
            Je suis un marchand
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.connectBtn}
          onPress={() => navigation.navigate("SignUp_Client")}
        >
          <AntDesign
            name="shoppingcart"
            size={totalSize(3.5)}
            color="white"
            style={{ marginRight: w(5) }}
          />
          <Text style={styles.btnText}>
            Je suis un client
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={styles.bottomTxt}
        onPress={() => navigation.navigate("SignUp")}
      >
        J'ai déja un compte
      </Text>
    </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signUp_container: {
    padding: totalSize(5),
    paddingTop: h(5),
    justifyContent: "flex-end",
    flex: 1,
  },
  signUp__Box: {
    padding: totalSize(1.5),
    backgroundColor: "white",
    marginBottom: h(4),
    borderRadius:5
  },
  connectBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#324B3E",
    padding: 10,
  },
  topTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: RFPercentage(3.8),
    marginBottom: h(2),
  },
  bottomTxt: {
    textAlign: "center",
    color: "white",
    fontSize: RFPercentage(3),
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  btnText:{
    color: "white",
    textAlign: "justify",
    fontSize: RFPercentage(2.8)
  }
});
