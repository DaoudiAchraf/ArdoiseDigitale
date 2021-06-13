import React ,{ createContext, useState } from 'react';
import traderService from '../services/Trader';
import { days } from "../constants/Arrays";

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

  const addInfos = (infos)=>{
      currentState = {
        ...currentState,
        ...infos};
        console.log('curr',currentState);
    }

  const submitProfile= async()=>{


    const a = await traderService.traderCompleteProfile(currentState).then(res=>console.log(res));
      console.log(a);
   }
  

    return (
      <Context.Provider value={{currentState,addInfos,submitProfile}} >
         {props.children}
      </Context.Provider>
    )
}

export default ProfileContext;
