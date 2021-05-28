import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Myappbar from '../components/componentsClient/Myappbar';
import Mynavbar from '../components/componentsClient/navbar';
import Item2 from '../components/componentsClient/Item2';
import Item3 from '../components/componentsClient/Item3';
import Separator from '../components/componentsClient/Separator';
import Divider from 'react-native-divider';
import { RFValue } from 'react-native-responsive-fontsize';
import PlusMinus from '../components/componentsClient/PlusMinus';
import PlusMinus1 from '../components/componentsClient/PlusMinus1';
import FondPageNotificaiton from '../assets/svg-icones-client/fond-page-notifications';
import { h } from '../utils/Size';
import FondPageCatalogue from '../assets/svg-icones-client/fond-page-catalogue';
import FondPageCommandes from '../assets/svg-icones-client/fond-page-commandes';
import FondPageMarchand from '../assets/svg-icones-client/fond-page-marchands';

const ListeDesCommandes = ({ navigation }) => {
  const [isMinus, setIsMinus] = useState(true);
  const [isMinus1, setIsMinus1] = useState(true);

  const navCommandePrete = () => navigation.navigate('CommandePrete');
  const navCommandePayee = () => navigation.navigate('CommandePayee');
  const navCommandePayeeAvis = () => navigation.navigate('CommandePayeeAvis');
  const navCommandeTerminee = () => navigation.navigate('CommandeTerminee');
  const navOffrePrixCommande = () => navigation.navigate('OffrePrixCommande');
  const navOffrePrixCommandeAccepted = () =>
    navigation.navigate('OffrePrixCommandeAccepted');
  /*
        <Image
        style={styles.image}
        source={require('../assets/assets/icons/fond-page-notifications.png')}
        />
      */
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#324B3E',
      }}
    >
      <Myappbar
        title={'Liste Des Commandes'}
        subtitle="Vous avez 3 Commandes actives"
      />
      <FondPageCommandes style={styles.svg} />

      <View style={{ margin: '3%', padding: '2%' }}>
        <View
          style={{
            flexDirection: 'row',
            margin: '8%',
          }}
        >
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}> Commandes Actives</Text>
            </Divider>
          </View>
          <View style={{ width: '10%', alignSelf: 'center' }}>
            <PlusMinus isMinus={isMinus} setIsMinus={setIsMinus} />
          </View>
        </View>
        {isMinus && (
          <View>
            <Item2
              title="Offre de prix reçue"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-commande.png')}
              navigation={navOffrePrixCommande}
            />
            <Item2
              title="Offre de prix accepté"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-commande.png')}
              navigation={navOffrePrixCommandeAccepted}
            />
            <Item2
              title="Commande prete"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-commande.png')}
              navigation={navCommandePrete}
            />
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            margin: '8%',
          }}
        >
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}>Commandes Terminées</Text>
            </Divider>
          </View>
          <View style={{ width: '10%', alignSelf: 'center' }}>
            <PlusMinus1 isMinus1={isMinus1} setIsMinus1={setIsMinus1} />
          </View>
        </View>
        {isMinus1 && (
          <View>
            <Item2
              title="Commande Servie"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
              navigation={navCommandeTerminee}
            />
            <Item2
              title="Commande payée"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
              navigation={navCommandePayee}
            />
            <Item2
              title="Commande payée avec un avis"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
              navigation={navCommandePayeeAvis}
            />

            <Separator />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ListeDesCommandes;

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  image: {
    height: '50%',
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: '-12%',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: '25%',
    marginRight: '25%',
  },
});
