import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "./Input";
import ImagePicker from "./ImagePicker";
import SignUpContext from "../contexts/SignUp.context";

const Step3 = ({ toNextStep }) => {
  const { formState, setFormState } = useContext(SignUpContext);

  const submit = () => {
    // setFormState({
    //     ...formState,

    // });
    console.log("3->", formState);
    toNextStep();
  };

  return (
    <View style={styles.stepTwo_container}>
      <View>
        <Text style={{ marginBottom: 5 }}>Réference de la CIN *</Text>
        <Input />
        <Text style={{ marginBottom: 5 }}>Date d'expiration de CIN *</Text>
        <Input />
        <Text style={{ marginBottom: 5 }}>Photo de la CIN *</Text>
        <ImagePicker />
        <TouchableOpacity onPress={submit} style={styles.nextBtn}>
          <Text style={{ color: "white" }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  stepTwo_container: {
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
