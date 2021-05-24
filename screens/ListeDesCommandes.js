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

const ListeDesCommandes = ({ name }) => {
  const [isMinus, setIsMinus] = useState(0);
  const [isMinus1, setIsMinus1] = useState(0);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#324B3E',
      }}
    >
      <Myappbar title={name} subtitle="Vous avez 3 Commandes actives" />
      <Image
        style={styles.image}
        source={require('../assets/assets/icons/fond-page-notifications.png')}
      />
      <View style={{ marginTop: '18%', margin: '3%', padding: '2%' }}>
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
            <PlusMinus where="act" isMinus={isMinus} setIsMinus={setIsMinus} />
          </View>
        </View>
        {isMinus && (
          <View>
            <Item2
              title="Offre de prix reçue"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-commande.png')}
            />
            <Item2
              title="Commande prete"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-commande.png')}
            />
            <Item2
              title="Commande servie"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-commande.png')}
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
            <PlusMinus
              where="term"
              isMinus1={isMinus1}
              setIsMinus1={setIsMinus1}
            />
          </View>
        </View>
        {isMinus1 && (
          <View>
            <Item3
              title="Ardoise payée"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
            />
            <Item3
              title="Echéance étendue"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
            />
            <Item3
              title="Solde insuffisant"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
            />
            <Item3
              title="Payement du dans 2 jours"
              small="Sam lrving le 12/12/2020 à 10h30"
              smaller="Appuyez pour voir les détails."
              source={require('../assets/assets/icons/client-fond-btn-historique.png')}
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
