import React, { useContext, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import { Provider } from "react-native-paper";

import Myappbar from "../components/componentsClient/Myappbar";
import CardClient from "../components/componentsClient/CardClient";
import GreenBtn from "../components/componentsClient/GreenBtn";
import Divider from "react-native-divider";
import { RFValue } from "react-native-responsive-fontsize";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import Separator from "../components/componentsClient/Separator";
import Item2 from "../components/componentsClient/Item2";
import FondPageMarchands from "../assets/svg-icones-client/fond-page-marchands";
import moment from "moment";
import EmptyList from "../components/EmptyList";
import OrderCardViewer from "../components/OrderCardViewer";
import { Context } from "../contexts/Auth.context";

function ConsulterArdoiseFermee({ navigation, route }) {
  const { ardoise, orders } = route.params;
  const currentMerchant = ardoise.merchant;
  const { setCurrentMerchant } = useContext(Context);

  const showDialog = () => setVisible(true);
  const [isMinus, setIsMinus] = useState(false);
  const [isMinus1, setIsMinus1] = useState(false);

  const navToHistoriquePaiements = () =>
    navigation.navigate("HistoriquePaiements");

  const navToProfilMarchand = () => {
    setCurrentMerchant(currentMerchant);
    navigation.navigate("ProfilMarchand");
  };

  const navToListemarchands = () => navigation.navigate("Listemarchands");
  console.log(
    "ardoise fermee ::::::::::::::::::::::::::::::::::::::::",
    ardoise
  );
  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#324B3E",
          }}
        >
          <FondPageMarchands style={styles.svg} />
          <Myappbar
            title={currentMerchant.firstName + " " + currentMerchant.lastName}
            subtitle={`Ardoise fermée le ${moment(ardoise.closingDay).format(
              "DD/MM/YYYY [à] HH[h]mm"
            )}`}
            navigation={navigation}
          />
          <View style={{ marginTop: "10%", alignContent: "space-around" }}>
            <CardClient
              title={`${currentMerchant.firstName} ${currentMerchant.lastName}`}
              small={currentMerchant.address.location.label}
              storeImage={currentMerchant.storeImage}
              merchantImage={currentMerchant.merchantImage}
              calender={currentMerchant.availability}
              rate={currentMerchant.rate ? currentMerchant.rate : 0}
              text1="Livraison disponible"
              text2="Accepte le paiement comptant "
              source={require("../assets/assets/user.png")}
            />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <GreenBtn
                title="Demander la récouverture de l'ardoise"
                action={navToProfilMarchand}
              />
              <GreenBtn
                title=" Historique des paiements"
                action={navToHistoriquePaiements}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <Divider borderColor="#fff" color="#fff" orientation="center">
                  <Text style={{ fontSize: RFValue(17) }}> Mes commandes</Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
              </View>
            </View>

            {isMinus1 && (
              <View
                style={{
                  alignSelf: "center",
                }}
              >
                <FlatList
                  numColumns={1}
                  nestedScrollEnabled
                  contentContainerStyle={styles.orderContainer}
                  data={orders}
                  ListEmptyComponent={EmptyList}
                  ListFooterComponent={Separator}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item }) => {
                    return (
                      <OrderCardViewer
                        order={item}
                        merchant={ardoise.merchant}
                        navigation={navigation}
                      />
                    );
                  }}
                />
              </View>
            )}

            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <Divider borderColor="#fff" color="#fff" orientation="center">
                  <Text style={{ fontSize: RFValue(17) }}>
                    {" "}
                    Avis des clients
                  </Text>
                </Divider>
              </View>

              <View style={{ width: "10%", alignSelf: "center" }}>
                <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
              </View>
            </View>

            {isMinus && (
              <View>
                <Separator />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
}

export default ConsulterArdoiseFermee;

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-10%",
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});
