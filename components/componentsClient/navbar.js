import * as React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { w, h } from "../../utils/Size";
import { Button, Text } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Notification from "../../screens/Notification";
import ConsulterCompteMarchand from "../../screens/ConsulterCompteMarchand";
import MapScreen from "../../screens/MapScreen";
import test_components from "../../screens/test_components";
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

import { Context } from "../../contexts/Auth.context";
import Catalog from "../../screens/Catalog";
import ProductDetails from "../../screens/Client_Catalog/ProductDetails";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const StackNavigatorM = ({ initScr }) => {
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
    </Stack.Navigator>
  );
};
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }}
const StackNavigator = ({ initScr }) => {

  return (

    <Stack.Navigator
      initialRouteName={initScr}
      screenOptions={{ headerShown: false,
      
       }}
  
    >
      <Stack.Screen name="NouvelleCommande" component={NouvelleCommande} />
      <Stack.Screen name="ProfilMarchand" component={ProfilMarchand} />

      <Stack.Screen name="Listemarchands" component={Listemarchands} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="test_components" component={test_components} />

      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Clientaccount" component={Clientaccount} />
      <Stack.Screen name="ListeDesCommandes" component={ListeDesCommandes} />

      <Stack.Screen name="OffrePrixCommande" component={OffrePrixCommande} />

      <Stack.Screen name="MerchantCatalog" component={Catalog} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
 
  
      

      <Stack.Screen
        name="ConsulterCompteMarchand"
        component={ConsulterCompteMarchand}
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
  const { logout } = React.useContext(Context);

  return (
    //<StackNavigator/>
    
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen
        name="Merchant"
        options={{
          tabBarButton: (props) => <CustomButtonMerchant {...props} />,
        }}
      >
        {(props) =>
          merchant ? (
            <StackNavigatorM initScr={"MerchantClientList"} {...props} />
          ) : (
            <StackNavigator initScr={"Listemarchands"} {...props} />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Account"
        options={{
          tabBarButton: (props) => <CustomButton merchant {...props} />,
        }}
      >
        {(props) =>
          merchant ? (
            <StackNavigatorM initScr={"MerchantAccount"} {...props} />
          ) : (
            <StackNavigator initScr={"Clientaccount"} {...props} />
          )
        }
      </Tab.Screen>

      <Tab.Screen
        name="Command"
        options={{
          tabBarButton: (props) => <CustomButtonCommand {...props} />,
        }}
      >
        {(props) =>
          merchant ? (
            <StackNavigatorM initScr={"MerchantClientsOrdersList"} {...props} />
          ) : (
            <StackNavigator initScr={"ListeDesCommandes"} {...props} />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Commandd"
        options={{
          tabBarButton: (props) => (
            <Button
              icon="logout"
              mode="contained"
              color="#324B3E"
              onPress={() => logout()}
            />
          ),
        }}
      >
        {(props) =>
          merchant ? (
            <StackNavigatorM initScr={"MerchantClientsOrdersList"} {...props} />
          ) : (
            <StackNavigator initScr={"ListeDesCommandes"} {...props} />
          )
        }
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
