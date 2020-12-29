// Libraries
// ActionTypes
import * as actionTypes from "../action-types";

export const initialState = {
  loading: false,
  products: [],
  errorMessage: "",
  page: {},
};

const reducerProduct = (state = initialState, action: IActionObject) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.PRODUCT_START:
      newState.loading = true;
      break;
    case actionTypes.PRODUCT_STOP:
      newState.loading = false;
      break;
    case actionTypes.PRODUCT_GET_LIST_FAILED:
      newState.products = [];
      newState.page = {};
      newState.errorMessage = action.payload;
      break;
    case actionTypes.PRODUCT_GET_LIST_SUCCEED:
      newState.products = action.payload._embedded.products;
      newState.page = action.payload.page;
      newState.errorMessage = "";
      break;
    default:
      break;
  }
  return newState;
};

export default reducerProduct;
