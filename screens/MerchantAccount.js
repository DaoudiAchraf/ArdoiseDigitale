import React, { useContext, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import Item1 from "../components/componentsClient/Item1";
import Item2 from "../components/componentsClient/Item2";
import Divider from "react-native-divider";
import GreenBtn from "../components/componentsClient/GreenBtn";
import LogoWhite from "../assets/svgr/Logo/LogoWhite";
import { h, w } from "../utils/Size";
import { RFValue } from "react-native-responsive-fontsize";
import { Context } from "../contexts/Auth.context";
import EmptyList from "../components/EmptyList";
import OrderCardViewer from "../components/OrderCardViewer";
import ClientProfilOrders from "../components/componentsClient/ClientProfilOrders";
import moment from "moment";

function MerchantAccount({ navigation }) {
  const navToNotifications = () => navigation.navigate("MerchantNotifications");
  const navToMerchantClientList = () =>
    navigation.navigate("MerchantClientList");
  const navToMerchantClientsOrdersList = () =>
    navigation.navigate("MerchantClientsOrdersList");
  const navToMerchantCatalogueModification = () =>
    navigation.navigate("MerchantCatalogueModification");
  const navToCharts = () => navigation.navigate("MerchantCharts");
  const navToAccountEdit = () => navigation.navigate("myAccount");

  const { orders, ardoiseList, getOrders } = useContext(Context);

  const [activeOrders, setActiveOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchOrders = () => {
    const activeOrderss = orders.filter(
      (order) => !(order.status.recieved.recieved && order.status.payment.payed)
    );
    setActiveOrders(activeOrderss);
  };

  useEffect(() => {
    getOrders();
    fetchOrders();
  }, []);

  const navTo_NewOrder = (item) => {
    navigation.navigate("MerchantClientOrder", {
      ...item,
      client: item.ardoise.client,
    });
  };

  const renderClientOrderDetail = (order) => {
    var orderState = order.status.payment.payed
      ? "Commande payée"
      : order.status.recieved.recieved
      ? "Commande servie"
      : order.status.ready.ready
      ? "Commande prête"
      : order.status.response.sent
      ? order.status.response.res
        ? "Offre de prix acceptée"
        : "Offre de prix refusée"
      : order.status.offer.onHold
      ? "En Attente"
      : order.status.offer.sent
      ? "Offre de prix envoyée"
      : "Commande refusée";

    return (
      <ClientProfilOrders
        title={orderState}
        small={`Crée le ${moment(order.date).format("DD/MM/YYYY [à] HH[h]mm")}`}
        smaller="Appuyez pour voir les détails."
        source={require("../assets/assets/icons/client-fond-btn-commande.png")}
        ardoise
        numberOfProd={order.products.length}
        grayed={
          order.status.recieved.recieved ||
          order.status.payment.payed ||
          (order.status.offer.onHold && !order.status.offer.sent)
            ? true
            : false
        }
        navigation={() => navTo_NewOrder(order)}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#324B3E" }}>
      <View style={{ height: "17%" }}>
        <Image
          resizeMode="contain"
          style={{
            marginTop: "15%",
            width: "90%",
            height: "60%",
            alignSelf: "center",
          }}
          source={require("../assets/assets/LogoWhite.png")}
        />
      </View>

      <ScrollView
        nestedScrollEnabled={true}
        style={{ top: "6%", marginBottom: "15%" }}
      >
        <View style={{ padding: "2%", width: w(94), alignSelf: "center" }}>
          {/* <Item1
            title="Mon solde"
            description="12 000 MAD"
            img={require("../assets/assets/icons/client-fond-btn-historique.png")}
          /> */}
          <Item1
            title="Mon Compte"
            description="Appuyez pour accéder à votre compte"
            img={require("../assets/assets/icons/client-fond-btn-historique.png")}
            navigation={navToAccountEdit}
          />
          <Item1
            title="Notifications"
            description="Vous avez 3 nouvelles notifications"
            img={require("../assets/assets/icons/client-fond-btn-notification.png")}
            navigation={navToNotifications}
          />
          <Item1
            title="Ma Liste des clients"
            description={`Vous avez ${ardoiseList.length} ardoises ouvertes`}
            img={require("../assets/assets/icons/client-fond-btn-marchands.png")}
            navigation={navToMerchantClientList}
          />
          <Item1
            title="Mon Catalogue"
            description="Appuyez pour afficher le catalogue"
            img={require("../assets/assets/icons/marchand-fond-btn-catalogue.png")}
            navigation={navToMerchantCatalogueModification}
          />

          <Item1
            title="Mes Courbes"
            description="Appuyez pour afficher les courbes"
            img={require("../assets/assets/icons/marchand-fond-btn-catalogue.png")}
            navigation={navToCharts}
          />

          <Divider borderColor="#fff" color="#fff" orientation="center">
            <Text style={{ fontWeight: "bold" }}>Mes commandes actives</Text>
          </Divider>
          {/* <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: RFValue(11),
              marginVertical: "-1.5%",
            }}
          >
            Vous avez 3 nouvelles commandes.
          </Text> */}

          {/* <Item2
            title="Offre de prix reçue"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/fond-page-commandes.png")}
          />
          <Item2
            title="Commande prete"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/fond-page-commandes.png")}
          />
          <Item2
            title="Commande servie"
            small="Sam lrving le 12/12/2020 à 10h30"
            smaller="Appuyez pour voir les détails."
            source={require("../assets/assets/icons/fond-page-commandes.png")}
          /> */}
          <FlatList
            contentContainerStyle={styles.orderContainer}
            data={activeOrders}
            onRefresh={() => {
              setRefreshing(true);
              fetchOrders();
              setRefreshing(false);
            }}
            refreshing={refreshing}
            keyExtractor={(item) => item._id}
            ListEmptyComponent={EmptyList}
            renderItem={({ item }) => renderClientOrderDetail(item)}
          />
        </View>
        <GreenBtn
          title="Voir toutes mes commandes"
          action={navToMerchantClientsOrdersList}
        />
      </ScrollView>
    </View>
  );
}

export default MerchantAccount;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: "10%",
    marginVertical: "10%",
  },
});

/*

   return (
    <View style={{ alignItems: "center", backgroundColor: "#324B3E" }}>
      <View
        style={{ backgroundColor: "red", width: w(80), alignSelf: "center" }}
      >
        <LogoWhite />
        <ScrollView style={styles.scroll}>
          <GreenItem
            title="Mon solde"
            description="12 000 MAD"
            logo="ClientFondBtnHistorique"
          />
          <GreenItem
            title="Mon solde"
            description="12 000 MAD"
            logo="ClientFondBtnNotification"
          />
        </ScrollView>
      </View>
    </View>
  );



  */
