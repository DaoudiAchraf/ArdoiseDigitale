import { useLinkProps } from "@react-navigation/native";
import * as React from "react";
import { Appbar } from "react-native-paper";
import { color } from "../../constants/Colors";
import { AntDesign } from '@expo/vector-icons'; 
import { Text } from "react-native";

const Myappbar = (props) => {
  
  return (
    <Appbar.Header style={{ backgroundColor: "transparent", marginTop: "8%" }}>
      <Appbar.BackAction
        color={props.whiteMode ?color.Primary :"#FFFFFF"}
        onPress={() => props.popup == false ? props.setPopup(true) : (props.navigation && props.navigation.goBack())}
        color="#FFFFFF"
      />
      <Appbar.Content
        title={props.title}
        subtitle={props.subtitle}
        color={props.whiteMode ?color.Primary:"#FFFFFF"}
        style={{ alignItems: "stretch" }}
      />
      <AntDesign 
        name="logout"
        size={20} color={props.whiteMode ?color.Primary :"#FFFFFF"}
        style={{marginRight:'3%'}} 
      />
    </Appbar.Header>
  );
};

export default Myappbar;
