import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";

import ClientService from "../services/Clientt";
import traderService from "../services/Trader";

import { Context } from "../contexts/Auth.context";
import { GlobalContext } from "../contexts/ProductsCatalog.context";

import Category from "../components/Category";
import { color } from "../constants/Colors";

const SaveDialog = ({ popup, setPopup, navigation }) => {
  const {
    modifiedProds,
    setModifiedProds,
    deletedProds,
    setDeletedProds,
    addedProds,
    setAddedProds,
  } = useContext(GlobalContext);

  const saveModification = async () => {
    let modifiedCatalog = {
      modifiedProds: modifiedProds,
      deletedProds: deletedProds,
      addedProds: addedProds,
    };
    console.log("MODIFIED CATALOG", modifiedCatalog);
    const data = new FormData();

    const keys = Object.keys(modifiedCatalog);
    keys.forEach((key) => {
      if (key == "modifiedProds") {
        for (const item of modifiedCatalog[key]) {
          item.photo &&
            data.append("modifiedProdsIMG", { ...item.photo, name: "IMG" });
        }

        data.append(key, JSON.stringify(modifiedCatalog[key]));
      } else if (key == "addedProds") {
        for (const item of modifiedCatalog[key]) {
          item.photo &&
            data.append("addedProdsIMG", { ...item.photo, name: "IMG" });
        }

        data.append(key, JSON.stringify(modifiedCatalog[key]));
      } else if (key == "deletedProds") {
        data.append(key, JSON.stringify(modifiedCatalog[key]));
      }
    });
    console.log("MODIFIED CATALOG", data);

    const response = await traderService.traderBulkUpdateProds(data);
    console.log("RESPONSE", response);

    setModifiedProds([]);
    setDeletedProds([]);
    setAddedProds([]);

    navigation.goBack();
  };

  const hideDialog = () => setPopup(false);
  const quit = () => navigation.goBack();

  return (
    <View>
      <Portal>
        <Dialog visible={popup} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Voulez vous quitter cette page sans sauvegarder ?
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={quit}>OUI Quitter</Button>
            <Button onPress={saveModification}>NON Sauveguarder</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const MerchantCatalogueModification = ({ navigation }) => {
  //******************************* global context ********************************************
  const { setProducts, products } = useContext(GlobalContext);

  //products state
  const [popup, setPopup] = useState(false);

  const { user } = useContext(Context);

  const categories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const getCatalog = async () => {
      const response = await ClientService.getMerchantCatalogOwnerId(user._id);
      console.log("blalalalalal", response.data);
      if (response.ok) {
        setProducts(response.data);
      } else
        setAlert(
          "Une erreur se produit , Veuillez vérifier votre connexion Internet ."
        );
    };
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", user);

    getCatalog();
  }, []);

  return (
    <Provider>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#324B3E",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/assets/icons/fond-page-catalogue.png")}
        />
        <Myappbar
          title="Mon Catalogue"
          navigation={navigation}
          popup={popup}
          setPopup={setPopup}
        />
        <SafeAreaView style={{ paddingHorizontal: "10%" }}>
          <Text style={styles.footerTxt}>
            {`Vous pouvez modifier votre cataloge à tout moment.\nIl est recommendé de le garder à jour pour garantir une meilleure expérience à vos clients`}
          </Text>
          <View
            style={{
              backgroundColor: "white",
              padding: 1,
              borderWidth: 4,
              borderColor: color.INFO_TEXT,
            }}
          >
            {categories.map((item) => (
              <Category
                key={item}
                categIndex={item}
                subCategIndex={item}
                modif={true}
              />
            ))}
            {/* {products.map((item) => (
          <Category key={item._id} item={item} categIndex={item.category} subCategIndex={item.subCategory} />
        ))} */}
          </View>
        </SafeAreaView>

        {popup && (
          <SaveDialog
            navigation={navigation}
            popup={popup}
            setPopup={setPopup}
          />
        )}
      </ScrollView>
    </Provider>
  );
};

export default MerchantCatalogueModification;

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-3%",
  },
  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 36,
    paddingTop: 10,
    flex: 1,
  },
  logoStyle: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
  },
  stepsContainer: {
    paddingTop: "5%",

    justifyContent: "flex-end",
  },
  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 20,
    marginBottom: 12,
  },
  footerTxt: {
    marginTop: "4%",
    marginBottom: "5%",
    textAlign: "justify",
    color: "#808080",
    fontSize: 15,
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: "#324B3E",
    padding: 10,
    marginBottom: "5%",
    marginTop: "4%",
  },
});
