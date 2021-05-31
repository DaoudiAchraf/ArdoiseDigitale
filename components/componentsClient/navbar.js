import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/bottom-tabs";
import { w, h } from "../../utils/Size";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Listemarchands from "../../screens/Liste-marchands";
import Clientaccount from "../../screens/Client-account";
import Listecommandes from "../../screens/ListeDesCommandes";

const Tab = createBottomTabNavigator();

function ListemarchandsScreen() {
  return <Listemarchands />;
}
function ClientaccountScreen() {
  return <Clientaccount />;
}
function ListecommandesScreen() {
  return <Listecommandes />;
}

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ top: -40 }} onPress={onPress}>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 40,
          backgroundColor: "#324B3E",
        }}
      >
        <Image
          source={require("../../assets/assets/user.png")}
          style={{ height: 70, width: 70, borderRadius: 40 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const CustomButtonCommand = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignSelf: "center", margin: "14%" }}
      onPress={onPress}
    >
      <Image
        source={require("../../assets/assets/icons/client-control-btn-commandes.png")}
        style={{ height: h(6), width: w(12) }}
      />
    </TouchableOpacity>
  );
};

const CustomButtonMerchant = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignSelf: "center", margin: "14%" }}
      onPress={onPress}
    >
      <Image
        source={require("../../assets/assets/icons/client-control-btn-marchands.png")}
        style={{ height: h(6), width: w(12) }}
      />
    </TouchableOpacity>
  );
};

function navbar() {
  return (
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen
        name="Merchant"
        component={ListemarchandsScreen}
        options={{
          tabBarButton: (props) => <CustomButtonMerchant {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={ClientaccountScreen}
        options={{ tabBarButton: (props) => <CustomButton {...props} /> }}
      />

      <Tab.Screen
        name="Command"
        component={ListecommandesScreen}
        options={{
          tabBarButton: (props) => <CustomButtonCommand {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default navbar;
{
  /*const ListemarchandsRoute = () => <Listemarchands />;

const ClientaccountRoute = () => <Clientaccount />;

const ListecommandesRoute = () => <Listecommandes />;

const navbar = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {
      key: "Listemarchands",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../../assets/assets/user.png")}
          style={{ width: 26, height: 26, tintColor: tintColor }}
        />
      ),
    },
    { key: "Clientaccount", icon: "album" },
    { key: "Listecommandes", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Listemarchands: ListemarchandsRoute,
    Clientaccount: ClientaccountRoute,
    Listecommandes: ListecommandesRoute,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "white" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default navbar;
*/
}
