import React, { useContext, useState } from "react";
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
import GreenBtn from "../components/componentsClient/GreenBtn";
import PlusMinus from "../components/componentsClient/PlusMinus";

export default function ProfilMarchand(props) {
  const [visible, setVisible] = useState(false);
  const [isMinus, setIsMinus] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const aaa = () => console.log("aaaaa");
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
        <GreenBtn action={showDialog} title="TargetExpress" />
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <View
          style={{
            flexDirection: "row",
            margin: "8%",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Divider borderColor="#fff" color="#fff" orientation="center">
              <Text style={{ fontSize: RFValue(17) }}> Avis des clients</Text>
            </Divider>
          </View>
          <View style={{ width: "10%", alignSelf: "center" }}>
            <PlusMinus action={aaa} isMinus={isMinus} setIsMinus={setIsMinus} />
          </View>
        </View>
        {isMinus && <Text>aaaaa</Text>}
      </View>
    </Provider>
  );
}
