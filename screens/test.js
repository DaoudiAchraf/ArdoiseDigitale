import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Divider from "react-native-divider";
import {
  Provider,
  Button,
  Dialog,
  Portal,
  Paragraph,
} from "react-native-paper";

import { RFValue } from "react-native-responsive-fontsize";
import CalloutCard from "../components/Client_UI/CalloutCard";
import MyAppbar from "../components/componentsClient/Myappbar";
import { w, h } from "../utils/Size";
import ItemInCallout from "../components/Client_UI/ItemInCallout";
import CardClient from "../components/componentsClient/CardClient";
import NextButton from "../components/componentsClient/test";
import PlusMinus from "../components/componentsClient/PlusMinus";

export default function ProfilMarchand(props) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View style={{ backgroundColor: "#324B3E", height: h(100) }}>
        <MyAppbar title="ProfilMarchand" />
        <CardClient
          title="Express"
          small="bla"
          smaller="bla"
          merchant="Kristin"
          text1="....."
          text2="..."
          source={require("../assets/assets/targetexpress.jpg")}
        />
        <NextButton action={showDialog} title="Fermer l'ardoise" />
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>
              <Text style={{ color: "#324B3E", fontSize: RFValue(25) }}>
                Fermeture d'ardoise
              </Text>
            </Dialog.Title>
            <Dialog.Content>
              <Paragraph style={{ fontSize: RFValue(13), color: "#B0AEAE" }}>
                Etes vous surs de vouloir fermer votre ardoise avec Kristen
                Harper?
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <NextButton
                title="Fermer l'ardoise"
                action={hideDialog}
              ></NextButton>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}
