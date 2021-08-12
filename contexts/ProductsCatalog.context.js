  
import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './reducers/catalogReducer';

// Initial State
const initialState = {
  products: [],
  newOrders: null
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [modifiedProds, setModifiedProds] = useState([])
  const [deletedProds, setDeletedProds] = useState([])
  const [addedProds, setAddedProds] = useState([])



  // Actions
  const removeproduct = (id) => {
    dispatch({
      type: 'REMOVE_product',
      payload: id
    })
  }

  const addproduct = (product) => {
    dispatch({
      type: 'ADD_product',
      payload: product
    })
  }
  
  const setProducts = (products) => {
    dispatch({
      type: 'SET_products',
      payload: products
    })
  }

  const editproduct = (product) => {
    dispatch({
      type: 'EDIT_product',
      payload: product
    })
  }

  const newOrder = (order) => {
    dispatch({
      type: 'NEW_order',
      payload: order
    })
  }

  return (
    <GlobalContext.Provider value={{
      products: state.products,
      removeproduct,
      addproduct,
      setProducts,
      editproduct,
      newOrders: state.newOrders,
      newOrder,
      modifiedProds,
      setModifiedProds, deletedProds, setDeletedProds, addedProds, setAddedProds
    }}>
      {children}
    </GlobalContext.Provider>
  )
}