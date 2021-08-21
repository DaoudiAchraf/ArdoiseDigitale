import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, Divider, Surface } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { w, h } from "../../utils/Size";

const CalloutCard = ({ commande }) => {
  return (
    <Card style={styles.myCard}>
      <Card.Cover
        style={{ height: h(15) }}
        source={require("../../assets/assets/targetexpress.jpg")}
      />
      <Card.Content style={{ padding: "3%", paddingLeft: "5%" }}>
        <Text style={styles.title}>{commande.shopTitle}</Text>
        <Text style={styles.small}>{commande.shopDescription}</Text>
      </Card.Content>
      <Divider />
      <View style={{ flexDirection: "row", margin: "3%" }}>
        <View style={{ alignSelf: "center", width: w(15) }}>
          <Image source={commande.merchant.img} style={styles.image} />
        </View>
        <View style={{ width: w(60), marginLeft: "5%" }}>
          <Text style={styles.title}>{commande.merchant.name}</Text>
          {commande.merchant.delivery && (
            <Text style={styles.small}>
              Livraison <Text style={{ fontWeight: "bold" }}>disponible</Text>
            </Text>
          )}
          {commande.merchant.paymentType[0] && (
            <Text style={styles.small}>
              Accepte le paiement{" "}
              <Text style={{ fontWeight: "bold" }}>
                {commande.merchant.paymentType[0]}
              </Text>
              {commande.merchant.paymentType[1] && (
                <Text style={styles.small}>
                  {" "}
                  et par{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {commande.merchant.paymentType[1]}.
                  </Text>
                </Text>
              )}
            </Text>
          )}
        </View>
      </View>



      {/* <View style={{borderWidth:0.5,borderColor: 'grey'}}/>
      <View style={{ padding: "3%" }}>
        {commande.dateOfCreation && (
          <Text
            style={{
              color: "#545353",
              textAlign: "left",
              fontSize: RFValue(11),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              {commande.dateOfCreation}
            </Text>
            : Commande créée
          </Text>
        )}
        {commande.offer.date && (
          <Text
            style={{
              color: "#545353",
              textAlign: "left",
              fontSize: RFValue(11),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{commande.offer.date}</Text>:
            Offre de prix envoyée par{" "}
            <Text style={{ fontWeight: "bold" }}>{commande.merchant.name}</Text>
          </Text>
        )}
        {!commande.offer.onHold && [
          commande.offer.accepted ? (
            <Text
              key="1"
              style={{
                color: "#545353",
                textAlign: "left",
                fontSize: RFValue(11),
              }}
            >
              <Text key="2" style={{ fontWeight: "bold" }}>
                {commande.offer.dateOfResponse}
              </Text>
              : Offre de prix acceptée
            </Text>
          ) : (
            <Text
              key="3"
              style={{
                color: "#545353",
                textAlign: "left",
                fontSize: RFValue(11),
              }}
            >
              <Text key="4" style={{ fontWeight: "bold" }}>
                {commande.offer.dateOfResponse}
              </Text>
              : Offre de prix refusée
            </Text>
          ),
        ]}

        {commande.ready.ready && (
          <Text
            style={{
              color: "#545353",
              textAlign: "left",
              fontSize: RFValue(11),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{commande.ready.date}</Text>:
            Commande préparée par{" "}
            <Text style={{ fontWeight: "bold" }}>{commande.merchant.name}</Text>
          </Text>
        )}
        {commande.recieved.recieved && (
          <Text
            style={{
              color: "#545353",
              textAlign: "left",
              fontSize: RFValue(11),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{commande.recieved.date}</Text>
            : Commande terminée
          </Text>
        )}
        {commande.payment.payed && (
          <Text
            style={{
              color: "#545353",
              textAlign: "left",
              fontSize: RFValue(11),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{commande.payment.date}</Text>:
            Commande payée
          </Text>
        )}
      </View> */}
    </Card>
  );
};
const styles = StyleSheet.create({
  myCard: {
    width: "100%",
    alignSelf: "center",
  },
  card: {
    width: "80%",
    alignSelf: "center",
    marginTop: "5%",
  },
  title: {
    color: "#545353",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(14.5),
    fontWeight: "bold",
    paddingBottom: "1%",
  },
  small: {
    color: "grey",
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: RFValue(11),
  },

  image: {
    height: RFValue(60),
    width: RFValue(60),
  },
});
export default CalloutCard;
