import { useLinkProps } from "@react-navigation/native";
import * as React from "react";
import { Appbar } from "react-native-paper";

const Myappbar = (props) => {
  return (
    <Appbar.Header style={{ backgroundColor: "transparent", marginTop: "10%" }}>
      <Appbar.BackAction
        onPress={() => props.navigation && props.navigation.goBack()}
        color="#FFFFFF"
      />
      <Appbar.Content
        title={props.title}
        subtitle={props.subtitle}
        color="#FFFFFF"
        style={{ alignItems: "stretch" }}
      />
    </Appbar.Header>
  );
};

export default Myappbar;
