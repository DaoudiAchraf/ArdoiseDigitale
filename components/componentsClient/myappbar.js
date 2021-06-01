import { useLinkProps } from "@react-navigation/native";
import * as React from "react";
import { Appbar } from "react-native-paper";

const myappbar = (props) => {
  return (
    <Appbar.Header style={{ backgroundColor: "transparent", marginTop: "5%" }}>
      <Appbar.BackAction onPress={() => props.navigation()} color="#FFFFFF" />
      <Appbar.Content
        title={props.title}
        subtitle={props.subtitle}
        color="#FFFFFF"
        style={{ alignItems: "stretch" }}
      />
    </Appbar.Header>
  );
};

export default myappbar;
