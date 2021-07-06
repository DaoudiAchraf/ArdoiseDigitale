import React, { createContext, useState, useEffect } from "react";
import authService from "../services/Auth";
import jwtDecode from "jwt-decode";
import storage from "../utils/Storage";
import AppLoading from "expo-app-loading";
import clientService from '../services/Clientt';
import { role } from "../constants/Strings";

export const Context = createContext();

const AuthContext = ({ children }) => {

  const [merchantsList,setMerchantsList] = useState([]);
  const [currentMerchant , setCurrentMerchant] = useState(null);
  const [ardoiseList,setArdoiseList ] = useState([]);


  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await storage.getToken();

    if (!token) return;

    if (jwtDecode(token).exp < Date.now() / 1000)
      storage.removeToken();
    else 
      setUser(jwtDecode(token));
  };

  useEffect(() => {
    
    const getArdoise = async()=>{
      const response = await clientService.getArdoise();
      if(response.ok)
      {
        console.log('*****************************************************d5alt')
        response.data && setArdoiseList(response.data);
        //console.log(response.data);
      }
      else 
       console.log(response.problem)
        
     }  
     
     user && user.role && getArdoise();

     //(user && user.role === role.CLIENT) && getArdoise();
  }, [user])

  const [isReady, setIsReady] = useState(false);

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
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
  
  // Logout
  //storage.removeToken();

  return (
    <Context.Provider value={{
       user,
       refreshToken, 
       signIn, 
       logout,
       merchantsList,
       setMerchantsList,
       currentMerchant,
       setCurrentMerchant,
       ardoiseList,
       setArdoiseList
       }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
