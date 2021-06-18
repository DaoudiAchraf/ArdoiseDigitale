import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignUpContext from "../../contexts/SignUp.context";
import DropDown from "../DropDown";
import Input from "../Input";
import { Formik } from "formik";
import { Context } from "../../contexts/SignUp.context";
import ButtonNext from "../ButtonNext";
import { isValid } from "../Alert";
import ImagePicker from "../ImagePicker";

const Step1 = ({ toNextStep }) => {
  const { addInfos, initialState } = useContext(Context);
  const [cinImage, setCinImage] = useState(initialState["photo"]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState(
    initialState["maritalStatus"]
  );

  const [errors, setErrors] = useState({
    lastName: false,
    firstName: false,
    phoneNumber: false,
  });
  const initialValues = {
    lastName: null,
    firstName: null,
    phoneNumber: null,
    ...initialState,
  };

  const onSubmit = (values) => {
    //values["image"] = cinImage;
    // console.log(values);

    if (isValid(values, errors, setErrors)) {
      // console.log("--->",{...values,photo:cinImage});

      addInfos({ ...values });
      toNextStep();
    }
  };

  /* const submit = () => {
    setFormState({
      ...formState,
      lastName,
      firstName,
      phoneNumber,
    });
    console.log(formState);
    toNextStep(formState);
  };*/

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "45%",
                alignSelf: "center",
              }}
            >
              <Input
                label="Nom"
                value={values.firstName}
                handleChange={handleChange("firstName")}
                error={errors.firstName}
                onFocus={() => setErrors({ ...errors, firstName: false })}
              />
            </View>

            <View
              style={{ width: "45%", alignSelf: "center", marginLeft: "10%" }}
            >
              <Input
                label="Prénom"
                value={values.lastName}
                handleChange={handleChange("lastName")}
                error={errors.lastName}
                onFocus={() => setErrors({ ...errors, lastName: false })}
              />
            </View>
          </View>

          <Input
            keyboardType="numeric"
            label="Numero de télephone"
            value={values.phoneNumber}
            error={errors.phoneNumber}
            handleChange={handleChange("phoneNumber")}
            onFocus={() => setErrors({ ...errors, phoneNumber: false })}
          />
          <DropDown
            items={["Célibataire", "Marié"]}
            maritalStatus={maritalStatus}
            handleChange={setMaritalStatus}
          />
          {/* <ImagePicker
            image={cinImage}
            error={errors.image}
            handleChange={setCinImage}
            onFocus={() => setErrors({ ...errors, image: false })}
          /> */}
          <ButtonNext onPress={handleSubmit} />
        </View>
      )}
    </Formik>
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
