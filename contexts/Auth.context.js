import React, { createContext, useState, useEffect } from "react";
import authService from "../services/Auth";
import jwtDecode from "jwt-decode";
import storage from "../utils/Storage";
import AppLoading from "expo-app-loading";
import commonService from "../services/Common";
import { role } from "../constants/Strings";

// Logout
//storage.removeToken();

export const Context = createContext();

const globalState = {
  order: [],
};

const AuthContext = ({ children }) => {
  //let order= [];
  console.log("render from context");

  const [merchantsList, setMerchantsList] = useState([]);
  const [currentMerchant, setCurrentMerchant] = useState(null);
  const [ardoiseList, setArdoiseList] = useState([]);
  const [ardoiseListMerchant, setArdoiseListMerchant] = useState([]);
  const [orders, setOrders] = useState([]);

  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await storage.getToken();

    if (!token) return;

    if (jwtDecode(token).exp < Date.now() / 1000) storage.removeToken();
    else {
      setUser(jwtDecode(token));
      return jwtDecode(token);
    }
  };

  const getOrdersByArdoiseId = async (ardoiseId) => {
    const response = await commonService.getOrders(ardoiseId);
    if (response.ok) console.log(response.data);
    else console.log(response.problem);
  };

  const getOrders = async () => {
    const response = await commonService.getOrders();
    if (response.ok) response.data && setOrders(response.data);
    else console.log(response.problem);
  };

  // useEffect(() => {

  //   const getArdoise = async()=>{
  //     const response = await clientService.getArdoise();
  //     if(response.ok)
  //     {
  //       console.log('*****************************************************arodoise')
  //       response.data && setArdoiseList(response.data);
  //       //console.log(response.data);
  //     }
  //     else
  //      console.log(response.problem)

  //    }

  //    user && user.role && getArdoise();

  //    //(user && user.role === role.CLIENT) && getArdoise();
  // }, [user])

  const getArdoise = async () => {
    const response = await commonService.getArdoise();
    if (response.ok) response.data && setArdoiseList(response.data);
    //console.log(response.data);
    else console.log(response.problem);
  };

  // useEffect(()=>{
  //   if(user)
  //     getArdoise();
  // }
  // ,[user])

  const [isReady, setIsReady] = useState(false);

  const onAppStarting = async () => {
    const user = await restoreToken();
    user &&
      (user.role === role.CLIENT || user.role === role.MERCHANT) &&
      (await getArdoise());

    user &&
      (user.role === role.CLIENT || user.role === role.MERCHANT) &&
      (await getOrders());
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={onAppStarting}
        onError={() => console.warn}
        onFinish={() => setIsReady(true)}
      />
    );

  const refreshToken = (newToken) => {
    storage.storeToken(newToken);
    setUser(jwtDecode(newToken));
  };

  const signIn = async (v) => {
    //const v = {userName: "JK267",password:"b2IKmJmwVM"};

    console.log("valuestt: ", v);

    const result = await authService.signIn(v);

    if (result.ok) {
      const { token } = result.data;
      storage.storeToken(token);
      setUser(jwtDecode(token));
    }
  };

  const logout = () => {
    storage.removeToken();
    setUser();
  };

  return (
    <Context.Provider
      value={{
        user,
        refreshToken,
        signIn,
        logout,
        merchantsList,
        setMerchantsList,
        currentMerchant,
        setCurrentMerchant,
        ardoiseList,
        setArdoiseList,
        globalState,
        getOrdersByArdoiseId,
        getOrders,
        ardoiseListMerchant,
        setArdoiseListMerchant,
        orders,
        setOrders,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
