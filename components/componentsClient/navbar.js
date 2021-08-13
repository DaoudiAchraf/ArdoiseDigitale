import * as React from "react";
import { Image, View, TouchableOpacity} from "react-native";
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

import MerchantCharts from "../../screens/MerchantCharts";

import EditAccount from "../../screens/EditAccount";

import MerchantProfilClient from "../../screens/MerchantProfilClient";

import Listemarchands from "../../screens/Liste-marchands";
import Clientaccount from "../../screens/Client-account";
import ListeDesCommandes from "../../screens/ListeDesCommandes";

import { Context } from "../../contexts/Auth.context";
import Catalog from "../../screens/Catalog";
import ProductDetails from "../../screens/Client_Catalog/ProductDetails";
import OrderDetails from "../../screens/OrderDetails";

//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Cart from '../../assets/svgr/Cart';
import Group from '../../assets/svgr/group';
import NotificationSVG from '../../assets/svgr/Notification';
import Map from '../../assets/svgr/Map';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import commonService from '../../services/Common';
import { RFValue } from "react-native-responsive-fontsize";
import ProfileScreen from "../../screens/ProfileScreen";

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

      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
      />
      
      <Stack.Screen
        name="MerchantCharts"
        component={MerchantCharts}
      />
      <Stack.Screen
        name="myAccount"
        component={ProfileScreen}
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
 
      <Stack.Screen name="OrderDetails" component={OrderDetails} />

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

      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
      />

      <Stack.Screen
        name="myAccount"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const CustomButton = ({ onPress, merchant }) => {
  return (
    <View style={{flexDirection: 'column'}}>
    <TouchableOpacity style={{ position: 'absolute',left:w(40),bottom:'40%'}} onPress={onPress}>
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
    </View>
  );
};

const CustomButtonCommand = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ position: 'absolute',bottom:13,right:'7%',alignSelf:'center' }}
      onPress={onPress}
    >
      <Cart
        width={w(7.3)}
        height={w(7.3)}
      />

    </TouchableOpacity>
  );
};


const  CustomButtonNotification = ({ onPress }) => {
  const { logout } = React.useContext(Context);

  return (
    <TouchableOpacity
      style={{ position: 'absolute',bottom:13,left:'7%',alignSelf:'center' }}
      onPress={onPress}
    >
      <NotificationSVG
        width={w(7)}
        height={w(7)}
      />

    </TouchableOpacity>
  );
}; 

const  CustomButtonMap = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ position: 'absolute',bottom:13,right:'25%',alignSelf:'center' }}
      onPress={onPress}
    >
      <Map
        width={w(7)}
        height={w(7)}
      />

    </TouchableOpacity>
  );
}; 

const CustomButtonCatalog = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ position: 'absolute',bottom:13,left:'25%',alignSelf:'center'  }}
      onPress={onPress}
    >
        <Image
         source={require("../../assets/assets/icons/marchand-fond-btn-catalogue.png")}
         width={50}
         height={50}
        />

    </TouchableOpacity>
  );
};


const CustomButtonMerchant = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ position: 'absolute',bottom:13,left:'25%',alignSelf:'center'  }}
      onPress={onPress}
    >
      <Group
        width={w(7)}
        height={w(7)}
      />

    </TouchableOpacity>
  );
};

function navbar({ merchant }) {

  const registerForPushNotificationsAsync =async() =>{

    try{
      const permission = await Notifications.getPermissionsAsync();
      if(!permission.granted)  return;

      const expoToken = await Notifications.getExpoPushTokenAsync();

      commonService.refreshPushToken(expoToken);
    
    }
    catch(error){
      console.log('error getting push notification',error);
    }

  }

  React.useEffect(()=>{
    registerForPushNotificationsAsync();
  },[])

  return (
    //<StackNavigator/>
    
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen
        name="Notification"
        options={{
          tabBarButton: (props) => <CustomButtonNotification {...props} />,
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
        name="Map"
        options={{
          tabBarButton: (props) => merchant ? (<CustomButtonMap {...props} />):(<CustomButtonCatalog/>),
        }}
      >
        {(props) =>
          merchant ? (
            <StackNavigatorM initScr={"MerchantClientsOrdersList"} {...props} />
          ) : (
            <StackNavigator initScr={"MapScreen"} {...props} />
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



      {/* <Tab.Screen
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
      </Tab.Screen> */}
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
