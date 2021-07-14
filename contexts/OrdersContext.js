import React, { createContext, useState } from "react";

export const Contextorder = createContext();

const OrdersContext = (props) => {
 
  const [order,setOrder] = useState();

  return (
    <Contextorder.Provider value={{ order,setOrder}}>
      {props.children}
    </Contextorder.Provider>
  );
};

export default OrdersContext;
