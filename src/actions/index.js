export const selectProduct = product => {
  return {
    type: "PRODUCT_SELECTED",
    product
  };
};

export const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    product
  };
};

export const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    product
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};

export const incrementProductQuantity = product => {
  return {
    type: "INCREMENT_PRODUCT_QUANTITY",
    product
  };
};

export const decrementProductQuantity = product => {
  return {
    type: "DECREMENT_PRODUCT_QUANTITY",
    product
  };
};
