import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Divider from 'react-native-divider';
import {
  Provider,
  Button,
  Dialog,
  Portal,
  Paragraph,
} from 'react-native-paper';

import { RFValue } from 'react-native-responsive-fontsize';
import CalloutCard from '../components/Client_UI/CalloutCard';
import MyAppbar from '../components/componentsClient/Myappbar';
import { w, h } from '../utils/Size';
import ItemInCallout from '../components/Client_UI/ItemInCallout';
import CardClient from '../components/componentsClient/CardClient';
import GreenBtn from '../components/componentsClient/GreenBtn';
import RedBtn from '../components/componentsClient/RedBtn';

import FondPageMarchand from '../assets/svg-icones-client/fond-page-marchands';
import DropDownFiltres from '../components/Client_UI/DropDownFiltres';
import Item1 from '../components/componentsClient/Item1';
import Item3 from '../components/componentsClient/Item3';
import ItemPrix from '../components/componentsClient/ItemPrix';

export default function ProfilMarchand(props) {
  const [selectedItem, setSelectedItem] = useState(0);

  const aaa = () => console.log('aaaaa');
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: '#324B3E' }}>
        <MyAppbar title="Nouvelle commande" />
        <FondPageMarchand style={styles.svg} />
        <View style={styles.contentView}>
          <CardClient
            myCard
            title="Target Express"
            small="751 Green Hill Dr. Webster,"
            smaller="NY 14580"
            merchant="Kristin Harper"
            text1="Livraison disponible."
            text2="Accepte le paiement comptant et par crédit total."
            source={require('../assets/UserOrange.png')}
            commandecree="12/12/2020 à 10h301"
            offreDePrix={['13/12/2020 à 10h31', 'Kristen Harper']}
          />
          <ItemPrix title="150 MAD" small="Prix proposé" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                width: '47.5%',
              }}
            >
              <RedBtn myRedBtn title="Refuser l'offre" />
            </View>
            <View style={{ width: '47.5%' }}>
              <GreenBtn
                myGreenBtn
                title="Accepter l'offre"
                onPress={() => navigation.navigate('Notification')}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>Liste des produits</Text>
            </Divider>

            <Item3
              title="Brit Chicken & Salamon"
              small="Animaux » chiens"
              badged
            />
            <Item3
              title="Brit Chicken & Salamon"
              small=" - Animaux » chiens"
              smaller="Indisponible"
              badged
              indisponible
            />

            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>
                Détails de la commande
              </Text>
            </Divider>
            <ItemPrix title="Crédit total" small="Mode de payement" />
            <ItemPrix title="Livraison" small="Oui" />
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  contentView: {
    alignSelf: 'center',
    width: w(80),
    marginTop: h(7),
  },
  svg: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
