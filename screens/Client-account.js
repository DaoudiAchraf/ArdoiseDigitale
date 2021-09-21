import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Image, StyleSheet, FlatList } from "react-native";
import Item1 from "../components/componentsClient/Item1";
import Item2 from "../components/componentsClient/Item2";
import Divider from "react-native-divider";
import GreenBtn from "../components/componentsClient/GreenBtn";
import { Context } from "../contexts/Auth.context";
import OrderCardViewer from "../components/OrderCardViewer";
import ClientProfilOrders from "../components/componentsClient/ClientProfilOrders";
import EmptyList from "../components/EmptyList";
import moment from "moment";
import { h, w } from "../utils/Size";

function Clientaccount({ navigation }) {
  const navigation = useNavigation();
  const { ardoiseList, orders, getOrders } = useContext(Context);
  const [activeOrders, setActiveOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchOrders = () => {
    const activeOrderss = orders.filter(
      (order) =>
        !(
          order.status.recieved.recieved &&
          order.status.payment.payed &&
          order.ardoise.state === "closed"
        )
    );
    console.log("active oorders.......................", activeOrders);
    setActiveOrders(activeOrderss);
  };

  useEffect(() => {
    //getOrders();
    fetchOrders();
  }, [orders]);

  const navTo_NewOrder = (item) => {
    navigation.navigate("OffrePrixCommande", {
      order: item,
      merchant: item.ardoise.merchant,
    });
  };

  const renderClientOrderDetail = (order) => {
    //console.log("aaaaaaazerzearaerzazer", order);
    if (order) {
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
        ? "Offre de prix reçue"
        : "Commande refusée";

      return (
        <ClientProfilOrders
          title={orderState}
          small={`Crée le ${moment(order.date).format(
            "DD/MM/YYYY [à] HH[h]mm"
          )}`}
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
    } else {
      console.log("non");
    }
  };

  const navToNotification = () => navigation.navigate("Notification");
  const navToListemarchands = () => navigation.navigate("Listemarchands");
  const navToMapScreen = () => navigation.navigate("MapScreen");
  const navToListeDesCommandes = () => navigation.navigate("ListeDesCommandes");
  const navToEditAccount = () => navigation.navigate("myAccount");

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
      <ScrollView style={{ top: "6%", marginBottom: "15%" }}>
        <View style={{ padding: "2%" }}>
          <Item1
            title="Mon compte"
            description="12 000 MAD"
            img={require("../assets/assets/icons/client-fond-btn-historique.png")}
            navigation={navToEditAccount}
          />
          <Item1
            title="Mes notifications"
            description="Vous avez 3 nouvelles notifications"
            img={require("../assets/assets/icons/client-fond-btn-notification.png")}
            navigation={navToNotification}
          />
          <Item1
            title="Trouver un marchand"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/client-fond-btn-carte.png")}
            navigation={navToMapScreen}
          />
          <Item1
            title="Mes marchands"
            description={`Vous avez ${ardoiseList.length} ardoises`}
            img={require("../assets/assets/icons/client-fond-btn-marchands.png")}
            navigation={navToListemarchands}
          />
          <Divider borderColor="#fff" color="#fff" orientation="center">
            Mes commandes actives
          </Divider>

          <FlatList
            nestedScrollEnabled
            style={{ height: h(35), flexGrow: 0 }}
            contentContainerStyle={styles.orderContainer}
            data={activeOrders}
            onRefresh={() => {
              setRefreshing(true);
              fetchOrders();
              setRefreshing(false);
            }}
            refreshing={refreshing}
            keyExtractor={(item) => item._id}
            ListEmptyComponent={<EmptyList client />}
            renderItem={({ item }) => renderClientOrderDetail(item)}
          />
        </View>
        <GreenBtn
          title="Voir toutes mes commandes"
          action={navToListeDesCommandes}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "12%",
    alignSelf: "center",
  },
});

export default Clientaccount;
