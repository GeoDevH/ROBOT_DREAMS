const initialState = {
  clickCount: 0,
  productsData: [],
  showCreateForm: false,
  cartItemCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CLICK_COUNT':
      return {
        ...state,
        clickCount: state.clickCount + 1,
      };
    case 'TOGGLE_CREATE_FORM':
      return {
        ...state,
        showCreateForm: !state.showCreateForm,
      };
    case 'SET_PRODUCTS_DATA':
      return {
        ...state,
        productsData: action.payload,
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        productsData: [...state.productsData, action.payload],
      };
    case 'INCREMENT_CART_ITEM_COUNT':
      return {
        ...state,
        cartItemCount: state.cartItemCount + 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
