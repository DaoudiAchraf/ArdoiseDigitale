import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  ScrollView,
} from "react-native";
import { TouchableRipple } from "react-native-paper";

import { h, totalSize, w } from "../utils/Size";

const Selector = ({ category, setCategory}) => {


  const onChipPress = (index) => {
    const item = category[index];
    const newCategory = [...category];
    newCategory[index] = {
      ...item,
      isChecked: !item.isChecked,
    };
    setCategory(newCategory);
  };

  return (

    <ScrollView>
      <View style={styles.container}>
        {category.map((item, index) => (
          <TouchableRipple
            key={index}
            onPress={() => onChipPress(index)}
            rippleColor="rgba(0, 0, 0, .32)"
            style={styles.touchableRipple}
          >
            <View style={styles.cardContainer}>
            {item.icon(styles.icon)}
              <View style={styles.footer}>
                <Text style={{ flex: 1 }}>{item.name}</Text>
                <CheckBox value={item.isChecked} />
              </View>
            </View>
          </TouchableRipple>
        ))}
      </View>
    </ScrollView>
  );
};

export default Selector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flex: 1,
  },
  touchableRipple: {
    borderColor: "#324B3E",
    borderWidth: 2,
    borderRadius: 5,

    width: "40%",
    marginBottom: 10,
  },
  cardContainer: {
    alignItems: "center",
    padding: 10,
    paddingBottom: 5,
    paddingRight: 3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: totalSize(10),
    height: h(10),
    marginBottom: 8,
    alignSelf: 'center'
  },
});
