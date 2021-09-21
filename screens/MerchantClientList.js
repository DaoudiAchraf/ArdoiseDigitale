import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import Item2 from "../components/componentsClient/Item2";
import MyItem from "../components/componentsClient/Item1";
import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import Separator from "../components/componentsClient/Separator";
import { RFValue } from "react-native-responsive-fontsize";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import PlusMinus1 from "../components/componentsClient/PlusMinus1";
import { h, w } from "../utils/Size";
import { Context } from "../contexts/Auth.context";
import clienttService from "../services/Clientt";
import moment from "moment";

function MerchantClientList({ navigation }) {
  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(true);

  const [scroll, setScroll] = useState(true);

  const navToMerchantProfilClient = (client) =>
    navigation.navigate("MerchantProfilClient", client);
  //navigation.navigate('MyClientProfil',client);

  const { ardoiseList } = useContext(Context);

  const pendingArdoiseList = ardoiseList.filter(
    (ardoise) => ardoise.state === "pending" && ardoise.client
  );
  const openedArdoiseList = ardoiseList.filter(
    (ardoise) => ardoise.state === "accepted"
  );

  // console.log("pendinggggg");
  // console.log(pendingArdoiseList);

  const renderItem_NewClients = ({ item }) => {
    const { firstName, lastName } = item.client;
    const { creationDay } = item;

    return (
      // <Text>h1</Text>

      <Item2
        title={`${firstName} ${lastName}`}
        small={moment(creationDay).format("DD/MM/YYYY [à] HH[h]mm")}
        smaller="Appuyez pour voir les détails."
        source={require("../assets/assets/user.png")}
        navigation={() =>
          navToMerchantProfilClient({
            ardoiseId: item._id,
            client: item.client,
          })
        }
      />
    );
  };

  const renderItem_Myclients = ({ item }) => {
    const { firstName, lastName } = item.client;
    const { ordersCount } = item;

    // nbr de commande

    return (
      // <Text>h1</Text>

      <Item2
        title={`${firstName} ${lastName}`}
        small={`${ordersCount} commandes`}
        smaller="Appuyez pour voir les détails."
        source={require("../assets/assets/user.png")}
        //navigation={() =>navToMerchantProfilClient({ardoiseId: item._id,client: item.client,})}
        navigation={() =>
          navigation.navigate("MyClient", {
            ardoiseId: item._id,
            client: item.client,
          })
        }
      />
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#324B3E" }}>
      <FondPageMarchand style={styles.svg} />

      <Myappbar navigation={navigation} title="Mes clients" />

      <View
        onStartShouldSetResponderCapture={() => setScroll(true)}
        style={{
          flexDirection: "row",
          marginHorizontal: "10%",
          marginBottom: "3%",
        }}
      >
        <View
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Divider borderColor="#fff" color="#fff" orientation="center">
            <Text style={{ fontSize: RFValue(17) }}>Nouveaux clients</Text>
          </Divider>
        </View>
        <View
          style={{
            width: "10%",
            alignSelf: "center",
          }}
        >
          <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
        </View>
      </View>
      {isMinus && (
        <View
          onStartShouldSetResponderCapture={() => setScroll(false)}
          style={{ height: h(35) }}
        >
          <FlatList
            nestedScrollEnabled
            data={pendingArdoiseList}
            renderItem={renderItem_NewClients}
            keyExtractor={(item) => item._id}
            ListFooterComponent={<Separator />}
          />
        </View>
      )}

      <View
        onStartShouldSetResponderCapture={() => setScroll(true)}
        style={{
          flexDirection: "row",
          marginHorizontal: "10%",
          marginVertical: "5%",
        }}
      >
        <View
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Divider borderColor="#fff" color="#fff" orientation="center">
            <Text style={{ fontSize: RFValue(17) }}>Mes clients</Text>
          </Divider>
        </View>
        <View
          style={{
            width: "10%",
            alignSelf: "center",
          }}
        >
          <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
        </View>
      </View>
      {isMinus1 && (
        <View
          onStartShouldSetResponderCapture={() => setScroll(false)}
          style={{ height: h(35), marginBottom: "10%" }}
        >
          <FlatList
            nestedScrollEnabled
            data={openedArdoiseList}
            renderItem={renderItem_Myclients}
            keyExtractor={(item) => item._id}
            ListFooterComponent={<Separator />}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: "40%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: "25%",
    marginRight: "25%",
  },
  svg: {
    position: "absolute",
    alignSelf: "flex-end",
  },
});

export default MerchantClientList;
