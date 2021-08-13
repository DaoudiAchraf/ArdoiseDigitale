import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import authService from "../services/Auth";

export const Context = createContext();
export const phoneId = uuidv4();

var data = new FormData();
let initialState = {};

const SignUpContext = (props) => {
  const [merchantsList, setMerchantsList] = useState([]);

  return (
    <Context.Provider value={{ initialState, addInfos, signUp }}>
      {props.children}
    </Context.Provider>
  );
};

export default SignUpContext;
