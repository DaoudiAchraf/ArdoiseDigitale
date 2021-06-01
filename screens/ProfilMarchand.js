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
import PlusMinus from '../components/componentsClient/PlusMinus';
import FondPageMarchand from '../assets/svg-icones-client/fond-page-marchands';
import DropDownFiltres from '../components/Client_UI/DropDownFiltres';

export default function ProfilMarchand(props) {
  const [visible, setVisible] = useState(false);
  const [isMinus, setIsMinus] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [selectedItem, setSelectedItem] = useState(0);

  const aaa = () => console.log('aaaaa');
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: '#324B3E' }}>
        <MyAppbar title="ProfilMarchand" />
        <FondPageMarchand style={styles.svg} />
        <View style={styles.contentView}>
          <CardClient
            myCard
            title="Target Express"
            small="751 Green Hill Dr. Webster,"
            smaller="NY 14580"
            merchant="Kristin"
            text1="Livraison disponible."
            text2="Accepte le paiement comptant et par crédit total."
            source={require('../assets/assets/targetexpress.jpg')}
          />
          <GreenBtn myGreenBtn action={showDialog} title="TargetExpress" />
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={{ fontWeight: '600', color: '#426252' }}>
                Option de l'ardoise
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>Mode de payement préféré</Paragraph>
                <DropDownFiltres
                  selectedItem={selectedItem}
                  handleChange={setSelectedItem}
                  items={[
                    'à la commande',
                    'à la livraison',
                    'vendredi fin de semaine',
                    'en 3 fois (chaque mois)',
                  ]}
                />
                <Paragraph>Mode de payement préféré</Paragraph>
                <DropDownFiltres
                  selectedItem={selectedItem}
                  handleChange={setSelectedItem}
                  items={['à récupérer', 'à domicile']}
                />
                <GreenBtn
                  myGreenBtn
                  action={hideDialog}
                  title="Envoyer une Commande"
                />
              </Dialog.Content>
            </Dialog>
          </Portal>
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
                <Text style={{ fontSize: RFValue(17) }}> Avis des clients</Text>
              </Divider>
            </View>
            <View style={{ width: '10%', alignSelf: 'center' }}>
              <PlusMinus
                action={aaa}
                isMinus={isMinus}
                setIsMinus={setIsMinus}
              />
            </View>
          </View>
          {isMinus && <Text>aaaaa</Text>}
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
