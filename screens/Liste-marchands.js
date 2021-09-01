import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  CheckBox,
} from "react-native";
import Myappbar from "../components/componentsClient/Myappbar";
import Item2 from "../components/componentsClient/Item2";
import MyItem from "../components/componentsClient/Item1";
import Divider from "react-native-divider";
import PlusMinus from "../components/componentsClient/PlusMinus";
import Separator from "../components/componentsClient/Separator";
import { RFValue } from "react-native-responsive-fontsize";
import FondPageMarchand from "../assets/svg-icones-client/fond-page-marchands";
import { Context } from "../contexts/Auth.context";
import PagerView from "react-native-pager-view";
import { color } from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { totalSize } from "../utils/Size";
import { ColorAndroid } from "react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid";

function Listemarchands({ navigation }) {
  const [isMinus, setIsMinus] = useState(true);

  const [ArdoiseFilter, setArdoiseFilter] = useState({
    accepted: true,
    closed: false,
    pending: true,
  });

  const setFilter = (filter) => {
    if (filter === "accepted")
      setArdoiseFilter({
        ...ArdoiseFilter,
        accepted: !ArdoiseFilter.accepted,
      });
    else if (filter === "closed")
      setArdoiseFilter({
        ...ArdoiseFilter,
        closed: !ArdoiseFilter.closed,
      });
    else if (filter === "pending")
      setArdoiseFilter({
        ...ArdoiseFilter,
        pending: !ArdoiseFilter.pending,
      });
  };

  const navToNouvelleCommande = () => navigation.navigate("NouvelleCommande");
  const navToMapScreen = () => navigation.navigate("MapScreen");

  const navToClientaccount = () => navigation.navigate("Clientaccount");

  const { ardoiseList, setCurrentMerchant, currentMerchant } =
    useContext(Context);

  console.log(ardoiseList);

  const navToMerchant = (item) => {
    console.log(item);
    navigation.navigate("ConsulterCompteMarchand", { ardoise: item });

    //navigation.navigate('Notification');
  };

  // const viewPager = React.createRef();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#324B3E" }}>
        <Myappbar title="Ma liste de marchands" navigation={navigation} />

        <FondPageMarchand style={styles.svg} />
        <View style={{ marginTop: "10%", margin: "3%", padding: "2%" }}>
          <MyItem
            title="Trouver un marchand"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/client-fond-btn-carte.png")}
            navigation={navToMapScreen}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: "5%",
            marginRight: "5.5%",
          }}
        >
          <View
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}> Ardoise</Text>
            </Divider>

            {/* <View >
            <Text style={{...styles.textFilter}}>filtrer par ardoise :</Text>
            </View> */}

            {ardoiseList.length > 0 && (
              <View style={styles.filterLayout}>
                <View style={styles.filterContainer}>
                  <View>
                    <Text style={styles.textFilter}>Ouverte</Text>
                  </View>

                  <CheckBox
                    value={ArdoiseFilter.accepted}
                    style={styles.checkbox}
                    onValueChange={() => setFilter("accepted")}
                  />
                </View>

                <View style={styles.filterContainer}>
                  <View>
                    <Text style={styles.textFilter}>En attente</Text>
                  </View>

                  <CheckBox
                    value={ArdoiseFilter.pending}
                    onValueChange={() => setFilter("pending")}
                  />
                </View>

                <View style={styles.filterContainer}>
                  <View>
                    <Text style={styles.textFilter}>Fermée</Text>
                  </View>

                  <CheckBox
                    value={ArdoiseFilter.closed}
                    style={styles.checkbox}
                    onValueChange={() => setFilter("closed")}
                  />
                </View>
              </View>
            )}

            {ardoiseList && ardoiseList.length === 0 && (
              <View style={{ alignSelf: "center" }}>
                <MaterialCommunityIcons
                  name="database-remove"
                  size={totalSize(30)}
                  color={color.INFO_TEXT}
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: color.INFO_TEXT,
                    fontSize: RFValue(18),
                  }}
                >
                  Aucune ardoise Trouvée{" "}
                </Text>
              </View>
            )}

            {/* <View style={{...styles.filterContainer,alignSelf:'center',marginTop:0}} >
                  <View>
                  <Text style={styles.textFilter}>En attente</Text>
                  
                  </View>

                 <CheckBox
                    value={ArdoiseFilter.pending}
                    onValueChange={()=>setFilter('pending')}  
                  />
              </View> */}
          </View>
        </View>

        <View>
          {ardoiseList.map(
            (item) =>
              ArdoiseFilter[item.state] && (
                <Item2
                  key={item._id}
                  title={item.merchant.firstName + " " + item.merchant.lastName}
                  ardoise
                  small={` ${item.ordersCount} `}
                  smaller="Appuyez pour voir les détails."
                  source={require("../assets/assets/user.png")}
                  navigation={() => navToMerchant(item)}
                />
              )
          )}

          <Separator />
        </View>
      </ScrollView>
    </View>
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
  filterLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: "2%",
    paddingRight: "2%",
    borderRadius: 3,
    marginTop: "2%",
  },
  filterContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: "0%",
  },
  textFilter: {
    fontWeight: "bold",
    fontSize: RFValue(15),
    color: color.Secondary,
  },
  checkbox: {
    marginLeft: "-2%",
  },
});

export default Listemarchands;
