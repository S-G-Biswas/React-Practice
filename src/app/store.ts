import { createStore } from "redux";

interface CartData {
  id?: string;
  brand: string;
  img: string;
  price: number;
  category: string;
  details: string;
}

interface Action {
  type: string;
  payload: CartData | string;
}

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product: CartData) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});


export interface State {
  cart: CartData[]; 
}

const initialState: State = {
  cart: [], 
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productToAdd = action.payload as CartData;
      const isProductInCart = state.cart.some((item) => item.id === productToAdd.id);
      if (isProductInCart) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, productToAdd],
      };
    }
    case REMOVE_FROM_CART: {
      const productIdToRemove = action.payload as string;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== productIdToRemove),
      };
    }
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);


export default store;
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

declare global {
  interface Window {
    Cypress: object | undefined;
    store: object;
  }
}
if (window.Cypress) {
  window.store = store;
}
