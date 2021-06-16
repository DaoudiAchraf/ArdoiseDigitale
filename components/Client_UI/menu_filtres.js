import React, { useContext, useState } from "react";
import { View } from "react-native";
import {
  Button,
  Text,
  Menu,
  Divider,
  Provider,
  Portal,
  Title,
  Subheading,
  Headline,
  Caption,
} from "react-native-paper";
import Filter from "../../assets/svg-icones-client/filter.jsx";
import DropDownFiltres from "../Client_UI/DropDownFiltres";
import ModalDropdown from "react-native-modal-dropdown";
import { h, w } from "../../utils/Size.js";
import { RFValue } from "react-native-responsive-fontsize";

const MenuFiltres = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Provider>
      <Menu
        style={{
          position: "relative",
          top: h(7),
          left: w(2),
          width: w(85),
        }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            icon={Filter}
            color="#426252"
            mode="contained"
            onPress={openMenu}
            uppercase="false"
            compact
            style={{ marginLeft: w(2.5), width: w(25), height: h(5.5) }}
            labelStyle={{ fontSize: RFValue(12), paddingTop: "2%" }}
          >
            Filtres
          </Button>
        }
      >
        <View style={{ padding: "7%" }}>
          <Title style={{ marginBottom: "2%", color: "#426252" }}>
            Filtres
          </Title>
          <Caption>Ville</Caption>

          <View>
            <DropDownFiltres
              selectedItem={selectedItem}
              handleChange={setSelectedItem}
              items={["Tunis", "Ariana", "Marsa", "Mannouba"]}
            />
          </View>

          <Caption>Domaine d'activité</Caption>
          <DropDownFiltres
            selectedItem={selectedItem}
            handleChange={setSelectedItem}
            items={[
              "supermarché",
              "épicerie",
              "droguerie",
              "parfumerie",
              "boucherie",
              "boulangerie",
              "patisserie",
              "buraliste",
              "épicerie fine",
            ]}
          />
          <Caption>Mode de payement</Caption>
          <DropDownFiltres
            selectedItem={selectedItem}
            handleChange={setSelectedItem}
            items={[
              "à la commande",
              "à la livraison",
              "vendredi fin de semaine",
              "en 3 fois (chaque mois)",
            ]}
          />
          <Caption>Livraison</Caption>
          <DropDownFiltres
            selectedItem={selectedItem}
            handleChange={setSelectedItem}
            items={["à récupérer", "à domicile"]}
          />
        </View>
      </Menu>
    </Provider>
  );
};

export default MenuFiltres;
