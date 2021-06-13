import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignUpContext from "../../contexts/SignUp.context";
import DropDown from "../DropDown";
import Input from "../Input";
import { Formik } from 'formik';

const Step1 = ({ toNextStep }) => {
  const { formState, setFormState } = useContext(SignUpContext);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [selectedItem, setSelectedItem] = useState(0);

  const submit = () => {
    setFormState({
      ...formState,
      lastName,
      firstName,
      phoneNumber,
    });
    console.log(formState);
    toNextStep(formState);
  };

  return (
    <View style={styles.step_container}>
      <Text>Nom *</Text>
      <Input value={lastName} handleChange={setLastName} />
      <Text>Prenom *</Text>
      <Input value={firstName} handleChange={setFirstName} />
      <Text>Numéro de télephone *</Text>
      <Input value={phoneNumber} handleChange={setPhoneNumber} />

      <Text>Status marital *</Text>
      <DropDown
        selectedItem={selectedItem}
        handleChange={setSelectedItem}
        items={["Marié(e)", "Célibataire"]}
      />
      <TouchableOpacity onPress={submit} style={styles.nextBtn}>
        <Text style={{ color: "white" }}>Suivant</Text>
      </TouchableOpacity>
    </View>
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
});
