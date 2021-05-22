import React from "react";
import SignIn from "./screens/SignIn";
import SignUp_Trader from "./screens/SignUp_Trader";
import SignUp_Client from "./screens/SignUp_Client";
import SignUp from "./screens/SignUp";
import OpeningTime from "./screens/OpeningTime";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsCategory from "./screens/ProductsCategory";
import AddProduct from "./screens/AddProduct";
import Clientaccount from "./screens/Client-account";
import Notification from "./screens/Notification";
import ConsulterCompteMarchand from "./screens/ConsulterCompteMarchand";
import test from "./screens/test";
import test_components from "./screens/test_components";
import ProductsCatalog from "./screens/ProductsCatalog";
import TraderFirstConnection from "./screens/TraderFirstConnection";
import Listemarchands from "./screens/Liste-marchands";
import HistoriquePaiements from "./screens/HistoriquePaiements";
import DetailsTransaction from "./screens/DetailsTransaction";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="DetailsTransaction"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignUp_Trader" component={SignUp_Trader} />
    <Stack.Screen name="SignUp_Client" component={SignUp_Client} />
    <Stack.Screen name="OpeningTime" component={OpeningTime} />
    <Stack.Screen name="ProductsCategory" component={ProductsCategory} />
    <Stack.Screen name="ProductsCatalog" component={ProductsCatalog} />
    <Stack.Screen name="Listemarchands" component={Listemarchands} />
    <Stack.Screen name="test" component={test} />
    <Stack.Screen name="test_components" component={test_components} />
    <Stack.Screen name="add" component={AddProduct} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Clientaccount" component={Clientaccount} />
    <Stack.Screen
      name="ConsulterCompteMarchand"
      component={ConsulterCompteMarchand}
    />
    <Stack.Screen
      name="TraderFirstConnection"
      component={TraderFirstConnection}
    />
    <Stack.Screen name="HistoriquePaiements" component={HistoriquePaiements} />
    <Stack.Screen name="DetailsTransaction" component={DetailsTransaction} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
