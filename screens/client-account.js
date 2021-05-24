<<<<<<< HEAD
import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import Item1 from '../components/componentsClient/Item1';
import Item2 from '../components/componentsClient/Item2';
import Divider from 'react-native-divider';
import { Button } from 'react-native-paper';
import NextButton from '../components/componentsClient/test';
=======
import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import Item1 from "../components/componentsClient/Item1";
import Item2 from "../components/componentsClient/Item2";
import Divider from "react-native-divider";
import GreenBtn from "../components/componentsClient/GreenBtn";
>>>>>>> 8c15bda4f44ade2a0378837f963cc9e0a0fcb9b1

function Clientaccount({ navigation }) {
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
      <ScrollView style={{ top: "6%", marginBottom: "6%" }}>
        <View style={{ marginTop: "18%", margin: "3%", padding: "2%" }}>
          <Item1
            title="Mon solde"
            description="12 000 MAD"
            img={require("../assets/assets/icons/client-fond-btn-historique.png")}
          />
          <Item1
            title="Mes notifications"
            description="Vous avez 3 nouvelles notifications"
            img={require("../assets/assets/icons/client-fond-btn-notification.png")}
          />
          <Item1
            title="Trouver un marchand"
            description="Appuyez pour afficher la carte."
            img={require("../assets/assets/icons/client-fond-btn-carte.png")}
          />
          <Item1
            title="Ma liste de marchands"
            description="Vous avez 5 marchands dans votre liste"
            img={require("../assets/assets/icons/client-fond-btn-marchands.png")}
          />
          <Divider borderColor="#fff" color="#fff" orientation="center">
            Mes commandes actives
          </Divider>

<<<<<<< HEAD
        <Item2
          title="Offre de prix reçue"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require('../assets/assets/icons/fond-page-commandes.png')}
        />
        <Item2
          title="Commande prete"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require('../assets/assets/icons/fond-page-commandes.png')}
        />
        <Item2
          title="Commande servie"
          small="Sam lrving le 12/12/2020 à 10h30"
          smaller="Appuyez pour voir les détails."
          source={require('../assets/assets/icons/fond-page-commandes.png')}
        />
        <Button
          style={{
            backgroundColor: '#485c54',
            marginTop: '3%',
            marginBottom: '15%',
            width: '90%',
            alignSelf: 'center',
          }}
          mode="contained"
          uppercase="false"
          onPress={() => navigation.navigate('ListeDesCommandes')}
        >
          Voir toutes mes commandes
        </Button>
=======
          <Item2
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
          />
        </View>
        <GreenBtn title="Voir toutes mes commandes" />
>>>>>>> 8c15bda4f44ade2a0378837f963cc9e0a0fcb9b1
      </ScrollView>
    </View>
  );
}

export default Clientaccount;
