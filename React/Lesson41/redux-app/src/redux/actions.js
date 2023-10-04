export const incrementClickCount = () => ({
    type: 'INCREMENT_CLICK_COUNT',
  });
  
  export const toggleCreateForm = () => ({
    type: 'TOGGLE_CREATE_FORM',
  });
  
  export const setProductsData = (data) => ({
    type: 'SET_PRODUCTS_DATA',
    payload: data,
  });
  
  export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });
  
  export const incrementCartItemCount = () => ({
    type: 'INCREMENT_CART_ITEM_COUNT',
  });
  