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

     const fd = new FormData();
      // fd.append('name','tt');
      // fd.append('zza',5);
      // console.log('from signup',fd);

      // fd.append('photo',{
      //   uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540kaspermood%252Fclient/ImagePicker/3d640164-209c-416d-b9cf-39ce46f36bc0.jpg",
      //   name: 'my_photo.jpg',
      //   type: 'image/jpg'
      // })

      //fd.append("ad",'fddfd');

      const a = await authService.merchantRegister(data).then(res=>console.log(res));
     
   }
  

    return (
      <Context.Provider value={{initialState,addInfos,signUp}} >
         {props.children}
      </Context.Provider>
    )
}

export default SignUpContext;
