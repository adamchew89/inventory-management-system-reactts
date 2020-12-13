// Libraries
// ActionTypes
import * as actionTypes from "../action-types";

const initialState = {
  loading: false,
  products: [],
  errorMessage: undefined,
};

const reducerProduct = (state = initialState, action) => {
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
      newState.errorMessage = "Unable to retrieve product list.";
      break;
    case actionTypes.PRODUCT_GET_LIST_SUCCEED:
      newState.products = action.payload;
      newState.errorMessage = undefined;
      break;
    default:
      break;
  }
  return newState;
};

export default reducerProduct;
