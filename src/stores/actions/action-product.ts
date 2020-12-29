// Libraries
import { Dispatch } from "redux";
// ActionTypes
import * as actionTypes from "../action-types";
// HTTPs
import httpProduct from "../https/http-product";

const getProductList = () => (dispatch: Dispatch) => {
  dispatch(startProductLoad());
  return httpProduct
    .get("/")
    .then((response) =>
      dispatch(updateProducts(response.data))
    )
    .catch((error) => dispatch(clearProducts(error.message)))
    .finally(() => dispatch(stopProductLoad()));
};

const startProductLoad = () => ({ type: actionTypes.PRODUCT_START });

const stopProductLoad = () => ({ type: actionTypes.PRODUCT_STOP });

const updateProducts = (products: IProduct[]) => ({
  type: actionTypes.PRODUCT_GET_LIST_SUCCEED,
  payload: products,
});

const clearProducts = (message: string) => ({
  type: actionTypes.PRODUCT_GET_LIST_FAILED,
  payload: message,
});

export {
  startProductLoad,
  stopProductLoad,
  updateProducts,
  getProductList,
  clearProducts,
};
