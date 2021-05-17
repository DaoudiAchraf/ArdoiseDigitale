import * as React from "react";
import { Button } from "react-native-paper";

const btn = (props, { navigation }) => (
  <Button
    mode="contained"
    color={props.color}
    onPress={() => navigation.navigate(props.nav)}
  >
    {props.text}
  </Button>
);

export default btn;
