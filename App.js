import React from 'react';
import SignIn from './screens/SignIn';
import SignUp_Trader from './screens/SignUp_Trader';
import SignUp_Client from './screens/SignUp_Client';
import SignUp from './screens/SignUp';
import OpeningTime from './screens/OpeningTime';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductsCategory from './screens/ProductsCategory';
import AddProduct from './screens/AddProduct';

const Stack = createStackNavigator();

const StackNavigator = () => (

  <Stack.Navigator initialRouteName='ProductsCategory' screenOptions={{headerShown:false}}>
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='SignUp_Trader' component={SignUp_Trader}/>
      <Stack.Screen name='SignUp_Client' component={SignUp_Client}/>
      <Stack.Screen name='OpeningTime' component={OpeningTime}/>
      <Stack.Screen name='ProductsCategory' component={ProductsCategory}/>
      <Stack.Screen name='add' component={AddProduct}/>
  </Stack.Navigator>
)

export default function App() {
  return (

    <NavigationContainer>
       <StackNavigator/>
    </NavigationContainer>
   
  );
}

