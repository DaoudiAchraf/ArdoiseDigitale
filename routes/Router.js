import React, { useContext } from "react";
import SignIn from "../screens/SignIn";
import SignUp_Trader from "../screens/SignUp_Trader";
import SignUp_Client from "../screens/SignUp_Client";
import SignUp from "../screens/SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Context } from "../contexts/Auth.context";
import { role } from "../constants/Strings";
import TraderProfile from "../screens/TraderProfile";
import Navbar from "../components/componentsClient/navbar";
import Catalog from "../screens/Catalog"

const Stack = createStackNavigator();
///////////////////-----------------------------------

///////------------------------------------------

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignUp_Trader" component={SignUp_Trader} />
    <Stack.Screen name="SignUp_Client" component={SignUp_Client} />
  </Stack.Navigator>
);

const ProfileBuilder = () => (
  <Stack.Navigator
    initialRouteName="TraderProfile"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="TraderProfile" component={TraderProfile} />
  </Stack.Navigator>
);

export default function App() {
  const { user } = useContext(Context);

  console.log("---- :::", user);

  return (
    <NavigationContainer>
      {/* <Catalog/> */}

      {user ? (
        user.role === role.PENDING_MERCHANT ? (
          <ProfileBuilder />
        ) : user.role === role.MERCHANT ? (
          <Navbar merchant />
        ) : (
          <Navbar />
        )
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}
