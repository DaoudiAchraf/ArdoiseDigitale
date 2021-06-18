import React ,{ createContext, useContext, useState } from 'react';
import traderService from '../services/Trader';
import { days } from "../constants/Arrays";
import { Context as soukiContext } from '../contexts/Auth.context';
import jwtDecode from 'jwt-decode';
import { setAlert } from '../components/Alert';

export const Context = createContext();

const data = new FormData();

let currentState = {
    traderPhoto: null,
    storePhoto: null,
    calender: days,
    categories: null,
    catalog: {}
}

const  ProfileContext  = (props) => {

  const { refreshToken } = useContext(soukiContext);

  const addInfos = (infos)=>{
      currentState = {
        ...currentState,
        ...infos};
        console.log('curr',currentState);
    }

  const submitProfile= async()=>{


    const response = await traderService.traderCompleteProfile(currentState);
    if(response.ok)
    {
      const { token } = response.data.refreshToken;
      refreshToken(token);
    }
  
     
      
   }
  

    return (
      <Context.Provider value={{currentState,addInfos,submitProfile}} >
         {props.children}
      </Context.Provider>
    )
}

export default ProfileContext;
