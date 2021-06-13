import * as SecureStore from 'expo-secure-store';

const key = "authToken";

export const storeToken = async authToken =>{
    try
    {
       return SecureStore.setItemAsync(key, authToken)
    }
    catch(error)
    {
        console.log('error setToken',error);
    }
}


export const getToken = async() =>{
    try
    {
        return  await SecureStore.getItemAsync(key) 
    }
    catch(error)
    {
        console.log('error getToken',error);
    }
}

export const removeToken = async () =>{
    try
    {
        await SecureStore.deleteItemAsync(key)
    }
    catch(error)
    {
        console.log('error removeToken',error); 
    }
}


export default {
    getToken ,
    removeToken,
    storeToken
}