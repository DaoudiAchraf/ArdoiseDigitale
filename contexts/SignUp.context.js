import React ,{ createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import authService from '../services/Auth';

export const Context = createContext();
export const phoneId = uuidv4();

const data = new FormData();
let initialState = {}

const  SignUpContext  = (props) => {

  const addInfos = (infos)=>{
    initialState =
     {...initialState,
      ...infos};
    
    }

  const signUp = async()=>{

    const keys = Object.keys(initialState);
    keys.forEach((key) => data.append(key, initialState[key]));
   // console.log(data);

    console.log('signup');
    console.log('****from signup',initialState);

    
    initialState = {};
    const a = await authService.merchantRegister(data).then(res=>console.log(res));
     
   }
  
const signUpClient = async()=>{

    const keys = Object.keys(initialState);
    keys.forEach((key) => data.append(key, initialState[key]));
   // console.log(data);
    console.log('****from signup',initialState);

    const a = await authService.clientRegister(data).then(res=>console.log(res));
     
   }

    return (
      <Context.Provider value={{initialState,addInfos,signUp,signUpClient}} >
         {props.children}
      </Context.Provider>
    )
}

export default SignUpContext;
