//Action creator

export const selectProduct = product => {
  //Retun an action
  console.log(product);

  return {
    type: "PRODUCT_SELECTED",
    product
  };
};
