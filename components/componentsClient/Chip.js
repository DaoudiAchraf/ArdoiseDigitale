import * as React from "react";
import { Chip } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

function MyComponent() {
  return (
    <View style={{ margin: "10%" }}>
      <TouchableHighlight style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/assets/icons/inscription-marchand-categorie-minimiser.png")}
        />
      </TouchableHighlight>
      <Chip icon="information" onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 7,
    width: 7,
    borderRadius: 64,
    marginLeft: "6%",
    marginTop: "6%",
  },
});
export default MyComponent;
