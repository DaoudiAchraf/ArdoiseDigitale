import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDown from "../DropDown";
import Input from "../Input";

const Step5 = ({ toNextStep }) => {
  const dropdownItems = [
    "En Nom Propre",
    "Entreprise Individuelle",
    "S A R L",
    "S A",
  ];

  const [selectedItem, setSelectedItem] = useState();

  const [numPatente, setNumPatente] = useState();

  const submit = () => {
    toNextStep();
  };

  return (
    <View style={styles.stepTwo_container}>
      <View>
        <Text style={{ marginBottom: 5 }}>Numéro de patente *</Text>
        <Input value={numPatente} handleChange={setNumPatente} />

        <Text style={{ marginBottom: 5 }}>Statut juridique *</Text>

        <DropDown
          items={dropdownItems}
          selectedItem={selectedItem}
          handleChange={setSelectedItem}
        />

        <TouchableOpacity onPress={submit} style={styles.nextBtn}>
          <Text style={{ color: "white" }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step5;

const styles = StyleSheet.create({
  step_container: {
    width: "100%",
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
});
