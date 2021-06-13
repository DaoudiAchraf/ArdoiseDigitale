import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/bottom-tabs";
import { w, h } from "../../utils/Size";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignIn from "../../screens/SignIn";
import SignUp_Trader from "../../screens/SignUp_Trader";
import SignUp_Client from "../../screens/SignUp_Client";
import SignUp from "../../screens/SignUp";
import ProductsCategory from "../../screens/ProductsCategory";
import AddProduct from "../../screens/AddProduct";
import Notification from "../../screens/Notification";
import ConsulterCompteMarchand from "../../screens/ConsulterCompteMarchand";
import MapScreen from "../../screens/MapScreen";
import test_components from "../../screens/test_components";
import ProductsCatalog from "../../screens/ProductsCatalog";
import TraderFirstConnection from "../../screens/TraderFirstConnection";
import HistoriquePaiements from "../../screens/HistoriquePaiements";
import DetailsTransaction from "../../screens/DetailsTransaction";
import ProfilMarchand from "../../screens/ProfilMarchand";
import ConsulterArdoiseFermee from "../../screens/ConsulterArdoiseFermee";
import OffrePrixCommande from "../../screens/OffrePrixCommande";
import NouvelleCommande from "../../screens/NouvelleCommande";

//Merchant Screens
import MerchantAccount from "../../screens/MerchantAccount";
import MerchantClientList from "../../screens/MerchantClientList";
import MerchantClientOrder from "../../screens/MerchantClientOrder";
import MerchantClientsOrdersList from "../../screens/MerchantClientsOrdersList";
import MerchantNotifications from "../../screens/MerchantNotifications";
import MerchantCatalogueModification from "../../screens/MerchantCatalogueModification";
import MerchantProfilClient from "../../screens/MerchantProfilClient";

import Listemarchands from "../../screens/Liste-marchands";
import Clientaccount from "../../screens/Client-account";
import ListeDesCommandes from "../../screens/ListeDesCommandes";

const Stack = createStackNavigator();
const StackNavigator = ({ initScr }) => {
  return (
    <Stack.Navigator
      initialRouteName={initScr}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="MerchantProfilClient"
        component={MerchantProfilClient}
      />

      <Stack.Screen name="MerchantAccount" component={MerchantAccount} />
      <Stack.Screen name="MerchantClientList" component={MerchantClientList} />
      <Stack.Screen
        name="MerchantClientOrder"
        component={MerchantClientOrder}
      />
      <Stack.Screen
        name="MerchantClientsOrdersList"
        component={MerchantClientsOrdersList}
      />
      <Stack.Screen
        name="MerchantNotifications"
        component={MerchantNotifications}
      />
      <Stack.Screen
        name="MerchantCatalogueModification"
        component={MerchantCatalogueModification}
      />

      <Stack.Screen name="NouvelleCommande" component={NouvelleCommande} />
      <Stack.Screen name="ProfilMarchand" component={ProfilMarchand} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp_Trader" component={SignUp_Trader} />
      <Stack.Screen name="SignUp_Client" component={SignUp_Client} />
      <Stack.Screen name="ProductsCategory" component={ProductsCategory} />
      <Stack.Screen name="ProductsCatalog" component={ProductsCatalog} />
      <Stack.Screen name="Listemarchands" component={Listemarchands} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="test_components" component={test_components} />
      <Stack.Screen name="add" component={AddProduct} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Clientaccount" component={Clientaccount} />
      <Stack.Screen name="ListeDesCommandes" component={ListeDesCommandes} />

      <Stack.Screen name="OffrePrixCommande" component={OffrePrixCommande} />

      <Stack.Screen
        name="ConsulterCompteMarchand"
        component={ConsulterCompteMarchand}
      />
      <Stack.Screen
        name="TraderFirstConnection"
        component={TraderFirstConnection}
      />
      <Stack.Screen
        name="HistoriquePaiements"
        component={HistoriquePaiements}
      />
      <Stack.Screen name="DetailsTransaction" component={DetailsTransaction} />

      <Stack.Screen
        name="ConsulterArdoiseFermee"
        component={ConsulterArdoiseFermee}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const CustomButton = ({ onPress, merchant }) => {
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
          source={
            merchant
              ? require("../../assets/assets/user.png")
              : require("../../assets/assets/user2.png")
          }
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

function navbar({ merchant }) {
  return (
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen
        name="Merchant"
        options={{
          tabBarButton: (props) => <CustomButtonMerchant {...props} />,
        }}
      >
        {(props) => (
          <StackNavigator
            initScr={merchant ? "MerchantClientList" : "Listemarchands"}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Account"
        options={{
          tabBarButton: (props) => <CustomButton merchant {...props} />,
        }}
      >
        {(props) => (
          <StackNavigator
            initScr={merchant ? "MerchantAccount" : "Clientaccount"}
            {...props}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Command"
        options={{
          tabBarButton: (props) => <CustomButtonCommand {...props} />,
        }}
      >
        {(props) => (
          <StackNavigator
            initScr={
              merchant ? "MerchantClientsOrdersList" : "ListeDesCommandes"
            }
            {...props}
          />
        )}
      </Tab.Screen>
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
