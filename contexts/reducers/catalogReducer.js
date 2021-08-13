export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_product':
      return {
        ...state,
        products: state.products.filter(product => {
          return product._id !== action.payload;
        })
      }
    case 'ADD_product':
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    case 'EDIT_product':
      const updateproduct = action.payload;

      const updateproducts = state.products.map(product => {
        if (product._id === updateproduct._id) {
          return updateproduct;
        }
        return product;
      })
      return {
        ...state,
        products: updateproducts
      }
    
    case 'NEW_order':
        return {
          ...state,
          newOrders: action.payload
        }
        case 'SET_products':
          return {
            ...state,
            products: action.payload
          }
    default:
      return state;
  }
}