import { combineReducers } from "redux";

import { storeProducts } from "../data";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY
} from "../actions/types";

const storeProductsReducer = (state = storeProducts, action) => {
  const replaceProduct = productToReplace =>
    state.map(product =>
      product.id === productToReplace.id ? productToReplace : product
    );

  switch (action.type) {
    case ADD_TO_CART: {
      const addedProduct = {
        ...action.payload.product,
        inCart: true,
        count: ++action.payload.product.count,
        total: action.payload.product.price * action.payload.product.count
      };
      const updatedStoreProducts = replaceProduct(addedProduct);
      return updatedStoreProducts;
    }
    case REMOVE_FROM_CART: {
      const removedProduct = {
        ...action.payload.product,
        inCart: false,
        count: --action.payload.product.count,
        total: action.payload.product.price * action.payload.product.count
      };
      const updatedStoreProducts = state.filter(
        product => product.id !== removedProduct.id
      );
      return updatedStoreProducts;
    }
    case CLEAR_CART: {
      return storeProducts;
    }
    case INCREMENT_PRODUCT_QUANTITY: {
      const updatedProduct = {
        ...action.payload.product,
        count: ++action.payload.product.count,
        total: action.payload.product.price * action.payload.product.count
      };
      const updatedStoreProducts = replaceProduct(updatedProduct);
      return updatedStoreProducts;
    }
    case DECREMENT_PRODUCT_QUANTITY: {
      const updatedProduct = {
        ...action.payload.product,
        count: --action.payload.product.count,
        total: action.payload.product.price * action.payload.product.count
      };
      const updatedStoreProducts = replaceProduct(updatedProduct);
      return updatedStoreProducts;
    }
    default:
      return state;
  }
};

export default combineReducers({
  storeProducts: storeProductsReducer
});
