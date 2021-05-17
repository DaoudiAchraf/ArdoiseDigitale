import * as React from "react";
import { List } from "react-native-paper";
import Recherche from "../../assets/assets/svgricons/recherche";

const myitem = (props) => (
  <List.Item
    title={props.title}
    description={props.description}
    right={(props) => <Recherche />}
  />
);

export default myitem;
