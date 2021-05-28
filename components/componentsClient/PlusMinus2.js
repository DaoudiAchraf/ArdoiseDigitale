import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Maximiser from "../../assets/assets/svgricons/maximiser";
import Minimiser from "../../assets/assets/svgricons/minimiser";

function PlusMinus2({ isMinus2, setIsMinus2 }) {
  return (
    <View style={{ margin: "10%" }}>
      {isMinus2 ? (
        <TouchableHighlight
          onPress={() => {
            setIsMinus2(false);
          }}
          style={styles.imageContainer}
        >
          <Minimiser style={{ alignSelf: "center" }} />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => {
            setIsMinus2(true);
          }}
          style={styles.imageContainer}
        >
          <Maximiser style={{ alignSelf: "center" }} />
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 5,
    width: 5,
    borderRadius: 64,
    marginLeft: "6%",
    marginTop: "6%",
  },

  imageContainer: {
    justifyContent: "center",
    height: 20,
    width: 20,
    borderRadius: 100 / 2,
    backgroundColor: "white",
  },
});

export default PlusMinus2;
