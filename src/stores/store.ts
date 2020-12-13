// Libraries
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Reducers
import reducer from "./reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
