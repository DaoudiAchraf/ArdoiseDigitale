import * as React from "react";
import { List } from "react-native-paper";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Myitem = (props) => (
  <List.Item
    style={{
      backgroundColor: "#485c54",
      width: "90%",
      borderRadius: "3%",
      alignSelf: "center",
      marginBottom: "3%",
    }}
    titleStyle={{
      color: "white",
      fontSize: RFValue(17),
      marginBottom: "1%",
      fontWeight: "bold",
    }}
    descriptionStyle={{ color: "white", fontSize: RFValue(11) }}
    descriptionNumberOfLines="1"
    title={props.title}
    description={props.description}
    right={() => (
      <Image source={props.img} style={{ width: "17%", height: "100%" }} />
    )}
    onPress={() => console.log("Pressed")}
  />
);

export default Myitem;
