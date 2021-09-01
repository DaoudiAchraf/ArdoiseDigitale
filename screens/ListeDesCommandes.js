import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import Item2 from "../components/OrderList_Item";
import Separator from "../components/componentsClient/Separator";
import Divider from "react-native-divider";
import { RFValue } from "react-native-responsive-fontsize";
import PlusMinus from "../components/componentsClient/PlusMinus";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import FondPageCommandes from "../assets/svg-icones-client/fond-page-commandes";
import CommonServices from "../services/Common";
import EmptyList from "../components/EmptyList";
import ClientProfilOrders from "../components/componentsClient/ClientProfilOrders";
import moment from "moment";

import { Context } from "../contexts/Auth.context";

const ListeDesCommandes = ({ navigation }) => {
  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(false);

  const { orders, getOrders } = useContext(Context);
  const [refreshing, setRefreshing] = useState(false);

  const [activeOrders, setActiveOrders] = useState([]);
  const [finishedOrders, setFinishedOrders] = useState([]);

  useEffect(() => {
    getOrders();
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    const activeOrderss = orders.filter(
      (order) => !(order.status.recieved.recieved && order.status.payment.payed)
    );
    setActiveOrders(activeOrderss);

    const finishedOrderss = orders.filter(
      (order) => order.status.recieved.recieved && order.status.payment.payed
    );
    setFinishedOrders(finishedOrderss);
  };

  const navTo_NewOrder = (item) => {
    navigation.navigate("OffrePrixCommande", {
      ...item,
      merchant: item.ardoise.merchant,
    });
  };

  const renderClientOrderDetail = (order) => {
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

  // const navTo_OrderDetails = (item) =>
  //   navigation.navigate('OrderDetails',{products: item.products,ardoise:item.ardoise});

  // const [orders,setOrders] = useState();

  // useEffect(()=>{
  //   const fetchUserOrders = async()=>{
  //     const response = await CommonServices.getOrders();
  //     response.ok && setOrders(response.data);
  //   }
  //   fetchUserOrders();

  // },[]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#324B3E",
      }}
    >
      <Myappbar
        title={"Liste Des Commandes"}
        subtitle={"Vous avez " + orders.length + " Commandes"}
        navigation={navigation}
      />
      <FondPageCommandes style={styles.svg} />

      <View style={{ margin: "3%", padding: "2%" }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}> Commandes Actives</Text>
            </Divider>
          </View>
          <View style={{ width: "10%", alignSelf: "center" }}>
            <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
          </View>
        </View>
        {isMinus && (
          <FlatList
            contentContainerStyle={{ margin: "0%" }}
            data={activeOrders}
            onRefresh={() => {
              setRefreshing(true);
              fetchOrders();
              setRefreshing(false);
            }}
            refreshing={refreshing}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => renderClientOrderDetail(item)}
            ListEmptyComponent={EmptyList}
            ListFooterComponent={Separator}
          />
        )}

        {/* <FlatList
            contentContainerStyle={{ margin: "0%" }}
            data={orders}
            keyExtractor={item => item._id}     
            renderItem={({item})=>(
              
              <Item2
                navigation={()=>navTo_OrderDetails(item)}
                infos ={item}
             />
            )}
          /> */}

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>Commandes Terminées</Text>
            </Divider>
          </View>
          <View style={{ width: "10%", alignSelf: "center" }}>
            <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
          </View>
        </View>
        {isMinus1 && (
          <View>
            <FlatList
              contentContainerStyle={{ margin: "0%" }}
              data={finishedOrders}
              onRefresh={() => {
                setRefreshing(true);
                fetchOrders();
                setRefreshing(false);
              }}
              refreshing={refreshing}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => renderClientOrderDetail(item)}
              ListEmptyComponent={EmptyList}
              ListFooterComponent={Separator}
            />

            {/* <Item2
              title="Commande Terminée"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-historique.png")}
              navigation={navTo_OrderDetails}
              grayed="true"
            />
            <Item2
              title="Commande payée"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-historique.png")}
              navigation={navTo_OrderDetails}
              grayed="true"
            />
            <Item2
              title="Commande payée avec un avis"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require("../assets/assets/icons/client-fond-btn-historique.png")}
              navigation={navTo_OrderDetails}
              grayed="true"
            />
            <Separator /> */}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ListeDesCommandes;

const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  image: {
    height: "50%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-12%",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: "25%",
    marginRight: "25%",
  },
});
