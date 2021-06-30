import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Context, phoneId } from "../../contexts/SignUp.context";
import Input from "../Input";
import ButtonNext from "../ButtonNext";
import { Formik } from "formik";
import { isValid } from "../Alert";

const Step1 = ({ toNextStep }) => {
  const { addInfos, initialState } = useContext(Context);
  // console.log(initialState)

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

  const onSubmit = async (values) => {
    const { phoneNumber } = values;

    if (isValid(values, errors, setErrors)) {
      addInfos(values);
      toNextStep();
      // const res = await authService.requestVerficationCode(phoneId,phoneNumber);
    }

    //console.log('id: ', phoneId, 'phone: ', phoneNumber);

    //   if (!firstName)
    //    setErrors({...errors,firstName: true});

    //   if (!lastName)
    //    setErrors({...errors,lastName: true});

    //   if(!phoneNumber)
    //    setErrors({...errors,phoneNumber: true});

    // if(!firstName || !lastName || !phoneNumber)
    //   setAlert('Veuillez remplir le(s) champs en rouge pour continuer.')

    // console.log("res: ",res.data);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <View style={styles.container}>
            <Input
              label="Prénom"
              value={values.firstName}
              handleChange={handleChange("firstName")}
              error={errors.firstName}
              onFocus={() => setErrors({ ...errors, firstName: false })}
            />

            <Input
              label="Nom"
              value={values.lastName}
              handleChange={handleChange("lastName")}
              error={errors.lastName}
              onFocus={() => setErrors({ ...errors, lastName: false })}
            />

            <Input
              keyboardType="numeric"
              label="Numero de télephone"
              value={values.phoneNumber}
              error={errors.phoneNumber}
              handleChange={handleChange("phoneNumber")}
              onFocus={() => setErrors({ ...errors, phoneNumber: false })}
            />
          </View>

          <ButtonNext onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    marginBottom: "10%",
  },
});
