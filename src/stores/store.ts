// Libraries
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// Reducers
import reducer from "./reducers/reducer";

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
