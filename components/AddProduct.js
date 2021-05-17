import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import DropDown from "./DropDown";

import Input from "./Input";

const Step1 = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [selectedItem, setSelectedItem] = useState(0);

  const submit = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Nouveau Produit</Text>
        <Input
          label="Nom du Produit"
          mode="outlined"
          value={firstName}
          handleChange={setFirstName}
        />
        <View style={styles.rowContainer}>
          <View style={{ flex: 1.8 }}>
            <Input
              label="Prix"
              mode="outlined"
              value={firstName}
              handleChange={setFirstName}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 5, marginRight: 5 }}>
            <Input
              label="Par"
              mode="outlined"
              value={firstName}
              handleChange={setFirstName}
            />
          </View>

          <View style={{ flex: 2 }}>
            <DropDown items={["unité"]} />
          </View>
        </View>

        <Input
          label="Description"
          mode="outlined"
          value={firstName}
          handleChange={setFirstName}
        />

        <View style={styles.rowContainer}>
          <View style={{ flex: 1.8 }}>
            <Input
              label="Attributs"
              mode="outlined"
              value={firstName}
              handleChange={setFirstName}
            />
          </View>

          <View style={{ flex: 2, marginLeft: 5, marginRight: 5 }}>
            <DropDown items={["unité"]} />
          </View>

          <View style={{ flex: 1 }}>
            <Input
              label="Par"
              mode="outlined"
              value={firstName}
              handleChange={setFirstName}
            />
          </View>
        </View>

        <TouchableOpacity onPress={submit} style={styles.nextBtn}>
          <Text style={{ color: "white" }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Step1;

const styles = StyleSheet.create({
  nextBtn: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 25,
    marginBottom: 14,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",

  },
});
