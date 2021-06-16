import React ,{ createContext, useState} from 'react';
import authService from '../services/Auth';
import jwtDecode from 'jwt-decode';
import storage from '../utils/Storage';
import AppLoading from 'expo-app-loading';


export const Context = createContext();


 const  SignInContext  = ({children}) => {
  const [user,setUser] = useState();

   const restoreToken = async() =>{
    const token = await storage.getToken();
    

    if(!token) return;

    setUser(jwtDecode(token));

  }

  const [isReady,setIsReady] = useState(false);

  if(!isReady)
     return (
        <AppLoading startAsync={restoreToken} 
          onError={()=>console.warn}
          onFinish={()=> setIsReady(true)}
        />
     );

  const signIn = async(v)=>{
      //const v = {userName: "JK267",password:"b2IKmJmwVM"};

      console.log('valuestt: ',v);

      const result = await authService.signIn(v);

      if(result.ok)
      {
        const { token } = result.data;
        storage.storeToken(token);
        setUser(jwtDecode(token));
      }

    
  }
    // Logout
    
    //storage.removeToken();

    return (
      <Context.Provider value={{user,signIn}} >
         {children}
      </Context.Provider>
    )
}

export default SignInContext;
