// Libraries
// ActionTypes
import * as actionTypes from "../action-types";

export const initialState = {
  loading: false,
  products: [],
  errorMessage: "",
};

interface ActionObject {
  type?: string;
  payload?: any;
  error?: string;
}

const reducerProduct = (state = initialState, action: ActionObject) => {
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
      newState.errorMessage = "";
      break;
    default:
      break;
  }
  return newState;
};

export default reducerProduct;
