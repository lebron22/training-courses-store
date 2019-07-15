import {
  PRODUCT_SELECTED,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY
} from "./types";

export const selectProduct = product => {
  return {
    type: PRODUCT_SELECTED,
    payload: { product }
  };
};

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: { product }
  };
};

export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: { product }
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const incrementProductQuantity = product => {
  return {
    type: INCREMENT_PRODUCT_QUANTITY,
    payload: { product }
  };
};

export const decrementProductQuantity = product => {
  return {
    type: DECREMENT_PRODUCT_QUANTITY,
    payload: { product }
  };
};
