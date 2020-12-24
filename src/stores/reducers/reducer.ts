// Libraries
import { combineReducers } from "redux";
// Reducers
import reducerProduct from "./reducer-product";

const reducer = combineReducers({ productStore: reducerProduct });

export default reducer;
