import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import ButtonNext from "../ButtonNext";
import CategorySelector from "../CategorySelector";
import { categories } from "../../constants/Arrays";
import { Context } from "../../contexts/TraderProfile.context";

const ProductsCategory = ({ toNextStep }) => {
  const { addInfos } = useContext(Context);
  const [category, setCategory] = useState(categories);

  const submit = () => {
    const selectedCategories = [];
    category.forEach(
      (item, index) => item.isChecked && selectedCategories.push(index)
    );
    addInfos({ categories: selectedCategories });
    toNextStep();
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerTxt}>Catégories de produits</Text> */}

      <CategorySelector category={category} setCategory={setCategory} />

      <Text style={styles.footerTxt}>
        Sélectionner les catégories de produits que votre commerce offre.
      </Text>

      <ButtonNext onPress={submit} />
    </View>
  );
};

export default ProductsCategory;

const styles = StyleSheet.create({
  container: {
    paddingTop: 7,

    justifyContent: "flex-end",
  },
  headerTxt: {
    textAlign: "center",
    color: "#324B3E",
    fontSize: 20,
    marginBottom: 12,
  },
  footerTxt: {
    marginTop: "4%",
    marginBottom: "5%",
    textAlign: "justify",
    color: "#808080",
    fontSize: 15,
  },
});
