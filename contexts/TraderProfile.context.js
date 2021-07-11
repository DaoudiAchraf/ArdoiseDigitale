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
        //console.log('curr',currentState);
    }

  const submitProfile= async()=>{
    const data = new FormData();

    const keys = Object.keys(currentState);
    keys.forEach((key) => {

      if(key == 'calender' )
         data.append('calender',JSON.stringify(currentState[key])); 
      else if(key == 'products')
        {
          for (const item of currentState[key]) {
            item.photo && data.append("productsIMG",{...item.photo,name:item._id} );
         }

         data.append(key,JSON.stringify(currentState[key]));
        }
      else
      if(key!="categories" && key!= "catalog" && key!= "products" && key!= "calender" )
        data.append(key, currentState[key]);
    }) 


    const response = await traderService.traderCompleteProfile(data);
    console.log(response);
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
