  
import React, { createContext, useReducer } from 'react';
import AppReducer from './reducers/catalogReducer';

// Initial State
const initialState = {
  products: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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

  const editproduct = (product) => {
    dispatch({
      type: 'EDIT_product',
      payload: product
    })
  }

  return (
    <GlobalContext.Provider value={{
      products: state.products,
      removeproduct,
      addproduct,
      editproduct
    }}>
      {children}
    </GlobalContext.Provider>
  )
}