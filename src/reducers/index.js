import { combineReducers } from "redux";

import { detailProduct } from "../data";

const selectedProductReducer = (state = detailProduct, action) => {
  if (action.type === "PRODUCT_SELECTED") {
    return action.product;
  }
  return state;
};

export default combineReducers({
  selectedProduct: selectedProductReducer
});
