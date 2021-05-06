import React from 'react';
import SignIn from './screens/SignIn';
import SignUp_Trader from './screens/SignUp_Trader';
import SignUp_Client from './screens/SignUp_Client';
import SignUp from './screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => (

  <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp_Trader" component={SignUp_Trader} />
      <Stack.Screen name="SignUp_Client" component={SignUp_Client} />
  </Stack.Navigator>
)

export default function App() {
  return (

    <NavigationContainer>
       <StackNavigator/>
    </NavigationContainer>
   
  );
}

