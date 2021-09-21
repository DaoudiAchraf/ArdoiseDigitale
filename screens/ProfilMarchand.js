import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Divider from "react-native-divider";
import {
  Provider,
  Button,
  Dialog,
  Portal,
  Paragraph,
} from "react-native-paper";

import { RFValue } from "react-native-responsive-fontsize";
import CalloutCard from "../components/Client_UI/CalloutCard";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h, totalSize } from "../utils/Size";
import ItemInCallout from "../components/Client_UI/ClientReviewItem";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import PlusMinus from "../components/componentsClient/PlusMinus";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import DropDownFiltres from "../components/Client_UI/DropDownFiltres";
import ClientReviewItem from "../components/Client_UI/ClientReviewItem";
import clientService from "../services/Clientt";
import { setAlert } from "../components/Alert";
import { Context } from "../contexts/Auth.context";
import { Entypo } from "@expo/vector-icons";
import { color } from "../constants/Colors";

const ProfilMarchand = ({ navigation }) => {
  const { currentMerchant, setArdoiseList, ardoiseList } = useContext(Context);

  const [ardoise, setArdoise] = useState();
  // console.log("ardoiseList:::::::::::::::::", ardoiseList);

  // console.log("currentMerchant:::::::::::::::::", currentMerchant);

  useEffect(() => {
    const fetchedArdoise = ardoiseList.find(
      (ardoise) =>
        ardoise.merchant._id === currentMerchant._id &&
        ardoise.state !== "closed"
    );
    console.log("ghjgfghjkjhgfd", ardoiseList[ardoiseList.length - 1]);
    //console.log("fetchedArdoise:::::::::::::::::", fetchedArdoise);
    if (fetchedArdoise) {
      if (fetchedArdoise.state === "pending") {
        setArdoise(fetchedArdoise);
      } else if (fetchedArdoise.state === "accepted") {
        navigation.navigate("ConsulterCompteMarchand", {
          ardoise: fetchedArdoise,
          noGoBack: true,
        });
      }
    }
  }, [ardoiseList]);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [isMinus, setIsMinus] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const [filterState, setFilterState] = useState({
    paymentType: 0,
    delivery: 0,
  });

  const sendDemande = async () => {
    hideDialog();
    const response = await clientService.ardoiseDemande({
      merchant: currentMerchant._id,
    });

    if (response.ok) {
      //setDemandeSent(true);
      console.log("jdiiiiiiiiiiiiiiiiiida", response.data);
      setArdoiseList([...ardoiseList, response.data]);
    } else console.log("Un problème se produit, veuillez réessayer de nouveau");
  };

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <MyAppbar
          style={{ zIndex: -999 }}
          navigation={navigation}
          title="ProfilMarchand"
        />
        <FondPageMarchand style={styles.svg} />

        <View style={styles.contentView}>
          <CardClient
            myCard
            title={currentMerchant.firstName + " " + currentMerchant.lastName}
            small={"Adresse : " + currentMerchant.address.location.label}
            smaller={"Télephone : " + currentMerchant.phoneNumber}
            merchant={
              currentMerchant.firstName + " " + currentMerchant.lastName
            }
            calender={currentMerchant.availability}
            text1="Livraison disponible."
            text2="Accepte le paiement comptant et par crédit total."
            source={require("../assets/assets/targetexpress.jpg")}
          />

          <TouchableOpacity
            style={styles.BtnCatalog}
            onPress={() =>
              navigation.navigate("MerchantCatalog", { currentMerchant })
            }
          >
            <Entypo name="shop" size={totalSize(3.5)} color={color.Primary} />
            <Text style={{ marginLeft: "5%", fontSize: RFValue(15) }}>
              Consulter catalogue
            </Text>
          </TouchableOpacity>
          {ardoise && ardoise.state === "pending" ? (
            <GreenBtn grayed myGreenBtn title="Votre demande à été envoyée" />
          ) : (
            <GreenBtn
              myGreenBtn
              action={showDialog}
              title="Ouvrir une ardoise avec ce marchand"
            />
          )}

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "100%",
                alignSelf: "center",
              }}
            >
              <Divider borderColor="#fff" color="#fff" orientation="center">
                <Text style={{ fontSize: RFValue(17) }}> Avis des clients</Text>
              </Divider>
            </View>
            <View
              style={{
                position: "absolute",
                left: "93%",
                width: "10%",
                alignSelf: "center",
              }}
            >
              <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
            </View>
          </View>
          {isMinus && (
            <ClientReviewItem
              name="Sam Irving"
              date="12/12/2020 à 10h30"
              img={require("../assets/SamIrving.png")}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tortor vitae erat sollicitudin fringilla ac id felis."
            />
          )}
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={{ fontWeight: "600", color: "#426252" }}>
              Option de l'ardoise
            </Dialog.Title>
            <Dialog.Content>
              <Paragraph>Mode de payement préféré</Paragraph>
              <DropDownFiltres
                dropdownName="paymentType"
                selectedItem={filterState}
                handleChange={setFilterState}
                items={[
                  "à la commande",
                  "à la livraison",
                  "vendredi fin de semaine",
                  "en 3 fois (chaque mois)",
                ]}
              />
              <Paragraph>Livraison</Paragraph>
              <DropDownFiltres
                dropdownName="delivery"
                selectedItem={filterState}
                handleChange={setFilterState}
                items={["à récupérer", "à domicile"]}
              />
              <GreenBtn
                myGreenBtn
                action={sendDemande}
                title="Envoyer une demande"
              />
            </Dialog.Content>
          </Dialog>
        </Portal>
      </ScrollView>
    </Provider>
  );
};

export default ProfilMarchand;

const styles = StyleSheet.create({
  contentView: {
    alignSelf: "center",
    width: w(80),
    marginTop: h(7),
  },
  svg: {
    zIndex: 900,
    position: "absolute",
    alignSelf: "flex-end",
  },
  BtnCatalog: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1.5%",
    padding: "2%",
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
  },
});
