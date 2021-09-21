import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Menu, Provider, Title, Caption } from "react-native-paper";
import Filter from "../../assets/svg-icones-client/filter.jsx";
import DropDownFiltres from "../Client_UI/DropDownFiltres";
import { h, w } from "../../utils/Size.js";
import { RFValue } from "react-native-responsive-fontsize";
import { Context } from "../../contexts/Auth.context";

const MenuFiltres = () => {
  const [visible, setVisible] = React.useState(false);
  const activityDomainTab = [
    "supermarché",
    "épicerie",
    "droguerie",
    "parfumerie",
    "boucherie",
    "boulangerie",
    "patisserie",
    "buraliste",
    "épicerie fine",
  ];
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const { merchantsList, setMerchantsFilterList } = useContext(Context);

  const [filterState, setFilterState] = useState({
    city: 0,
    activityDomain: 0,
    paymentType: 0,
    delivery: 0,
  });

  const deleteFilters = () => {
    setMerchantsFilterList([]);
  };

  useEffect(() => {
    //console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", merchantsList);
    if (visible) {
      const tab = merchantsList.filter(
        (item) =>
          item.activityDomain === activityDomainTab[filterState.activityDomain]
      );
      // console.log(
      //   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      //   activityDomainTab[filterState.activityDomain],
      //   tab
      // );

      setMerchantsFilterList(tab);
    }
  }, [filterState]);

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
          <Button
            style={{ position: "absolute", top: "10%", right: "10%" }}
            mode="contained"
            compact
            color="grey"
            onPress={deleteFilters}
          >
            effacer les filtres
          </Button>
          <Caption>Ville</Caption>

          <View>
            <DropDownFiltres
              dropdownName="city"
              selectedItem={filterState}
              handleChange={setFilterState}
              items={["Tunis", "Ariana", "Marsa", "Mannouba"]}
            />
          </View>

          <Caption>Domaine d'activité</Caption>
          <DropDownFiltres
            dropdownName="activityDomain"
            selectedItem={filterState}
            handleChange={setFilterState}
            items={activityDomainTab}
          />
          <Caption>Mode de paiement</Caption>
          <DropDownFiltres
            dropdownName="paymentType"
            selectedItem={filterState}
            handleChange={setFilterState}
            items={[
              "à la commande",
              "à la livraison",
              "vendredi fin de semaine",
              "en 3 fois (chaque mois)",
            ]}
          />
          <Caption>Livraison</Caption>
          <DropDownFiltres
            dropdownName="delivery"
            selectedItem={filterState}
            handleChange={setFilterState}
            items={["à récupérer", "à domicile"]}
          />
        </View>
      </Menu>
    </Provider>
  );
};

export default MenuFiltres;
