import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import StepIndicator from "react-native-step-indicator";
import indicatorStyle from "../styles/StepIndicator";
import FinalStep from "../components/FinalStep";

import logo from "../assets/images/logo-dark.png";

import TraderProfileContext from "../contexts/TraderProfile.context";
import { Context } from "../contexts/Auth.context";

import AboutTrader from "../components/TraderProfile/AboutTrader";
import OpeningTime from "../components/TraderProfile/OpeningTime";
import ProductsCategory from "../components/TraderProfile/ProductsCategory";
import TraderCatalog from "../components/TraderProfile/TraderCatalog";
import TraderFirstConnection from "../components/TraderProfile/TraderFirstConnection";
import { totalSize } from "../utils/Size";
import { GlobalProvider } from "../contexts/ProductsCatalog.context";
import { Button } from "react-native-paper";

const App = ({ navigation }) => {
  const [currentPosition, setcurrentPosition] = useState(-1);
  const [stepTitle, setStepTitle] = useState("Compte crée !");

  const { logout } = useContext(Context);

  const toNextStep = () => {
    const pos = currentPosition + 1;
    setcurrentPosition(pos);
  };

  const toPreviousStep = () => {
    if (currentPosition > -1) setcurrentPosition(currentPosition - 1);
  };

  const backAction = () => {
    Alert.alert(
      "Attention !",
      "Voulez vous confirmer le retour à l'étape précédente",
      [
        {
          text: "Non",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Oui", onPress: () => toPreviousStep() },
      ]
    );

    return true;
  };

  const switchStepTitle = () => {
    // console.log(currentPosition);
    switch (currentPosition) {
      case -1:
        return setStepTitle("Compte crée !");
      case 0:
        return setStepTitle("A propos du commerce");
      case 1:
        return setStepTitle("Horaires d'ouverture");
      case 2:
        return setStepTitle("Catégorie de produits");
      case 3:
        return setStepTitle("Catalogue des produits");
      case 4:
        return setStepTitle("Tout est prêt !");
      default:
        break;
    }
  };

  useEffect(() => {
    // switchStepTitle();
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [currentPosition]);

  const renderSteps = () => {
    switch (currentPosition) {
      case -1:
        return <TraderFirstConnection toNextStep={toNextStep} />;
      case 0:
        return <AboutTrader toNextStep={toNextStep} />;
      case 1:
        return <OpeningTime toNextStep={toNextStep} />;
      case 2:
        return <ProductsCategory toNextStep={toNextStep} />;
      case 3:
        return (
          <GlobalProvider>
            <TraderCatalog toNextStep={toNextStep} />
          </GlobalProvider>
        );
      case 4:
        return <FinalStep toNextStep={toNextStep} />;
      default:
        break;
    }
  };

  return (
    <TraderProfileContext>
      <View style={styles.container}>
        <Button
          style={styles.logoutBtn}
          icon="logout"
          mode="contained"
          color="#324B3E"
          onPress={() => logout()}
        />
        <Image resizeMode="contain" style={styles.logoStyle} source={logo} />

        <View style={styles.stepsContainer}>
          {/* <Text style={styles.headerTxt}>{stepTitle}</Text> */}
          <StepIndicator
            stepCount={5}
            customStyles={indicatorStyle}
            currentPosition={currentPosition}
          />

          <View>{renderSteps()}</View>
        </View>
      </View>
    </TraderProfileContext>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: totalSize(3.6),
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
  },
  logoStyle: {
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  stepsContainer: {
    justifyContent: "flex-end",
    flex: 1,
  },
  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 20,
    marginBottom: 12,
  },

  formContainer: {
    marginTop: 25,
  },
  footerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 15,
  },
  logoutBtn: {
    position: "absolute",
    right: "1%",
    top: "3%",
  },
});
