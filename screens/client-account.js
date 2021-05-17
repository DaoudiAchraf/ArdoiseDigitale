import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { Appbar } from "react-native-paper";
import Myappbar from "../components/componentsClient/myappbar";

function clientaccount() {
  return (
    <ScrollView>
      <Myappbar title="title" subtitle="subtitle" />
    </ScrollView>
  );
}
export default clientaccount;
