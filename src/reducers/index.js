import { combineReducers } from "redux";

import { detailProduct } from "../data";
import { storeProducts } from "../data";

const storeProductsReducer = (state = storeProducts, action) => {
  const replaceProduct = productToReplace =>
    state.map(product =>
      product.id === productToReplace.id ? productToReplace : product
    );

  switch (action.type) {
    case "ADD_TO_CART": {
      const addedProduct = {
        ...action.product,
        inCart: true,
        count: ++action.product.count,
        total: action.product.price * action.product.count
      };
      const updatedStoreProducts = replaceProduct(addedProduct);
      return updatedStoreProducts;
    }
    case "REMOVE_FROM_CART": {
      const removedProduct = {
        ...action.product,
        inCart: false,
        count: --action.product.count,
        total: action.product.price * action.product.count
      };
      const updatedStoreProducts = state.filter(
        product => product.id !== removedProduct.id
      );
      return updatedStoreProducts;
    }
    case "CLEAR_CART": {
      return storeProducts;
    }
    case "INCREMENT_PRODUCT_QUANTITY": {
      const updatedProduct = {
        ...action.product,
        count: ++action.product.count,
        total: action.product.price * action.product.count
      };
      const updatedStoreProducts = replaceProduct(updatedProduct);
      return updatedStoreProducts;
    }
    case "DECREMENT_PRODUCT_QUANTITY": {
      const updatedProduct = {
        ...action.product,
        count: --action.product.count,
        total: action.product.price * action.product.count
      };
      const updatedStoreProducts = replaceProduct(updatedProduct);
      return updatedStoreProducts;
    }
    default:
      return state;
  }
};

const selectedProductReducer = (state = detailProduct, action) => {
  if (action.type === "PRODUCT_SELECTED") {
    return action.product;
  }
  return state;
};

export default combineReducers({
  selectedProduct: selectedProductReducer,
  storeProducts: storeProductsReducer
});
