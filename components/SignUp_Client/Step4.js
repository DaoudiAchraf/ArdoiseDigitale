import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Geo_autocomplete from "../Geo_autocomplete";

import { Picker } from "@react-native-picker/picker";
import Input from "../Input";
import { Context } from "../../contexts/SignUp.context";
import { isValid } from "../Alert";

const Step4 = ({ toNextStep }) => {
  const { initialState, addInfos } = useContext(Context);

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [address, setAddress] = useState(initialState["address"]);

  const [errors, setErrors] = useState({
    address: false,
  });

  const submit = () => {
    if (isValid({ address }, errors, setErrors)) {
      console.log("adrress", { ...address });
      console.log("tpee", typeof { ...address });
      console.log("--------------------------");
      const k = JSON.stringify(address);
      console.log("string", k);
      console.log("parsed", JSON.parse(k));
      console.log("--------------------------");
      addInfos({ address: JSON.stringify(address) });
      toNextStep();
    }
  };

  return (
    <View style={styles.stepTwo_container}>
      <View>

        <Geo_autocomplete
          setAddress={setAddress}
          error={errors.address}
          setErrors={setErrors}
        />
        <TouchableOpacity onPress={submit} style={styles.nextBtn}>
          <Text style={{ color: "white" }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step4;

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
