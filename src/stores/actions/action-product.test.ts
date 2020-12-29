// Libraries
import AxiosMockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// Target
import * as ProductActions from "./action-product";
// Constants
import * as actionTypes from "../action-types";
// HTTPs
import httpProduct from "../https/http-product";
// Setup
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Unit Test:", () => {
  let http: any;
  let store: any;
  beforeEach(() => {
    http = new AxiosMockAdapter(httpProduct);
    store = mockStore({});
  });

  it(`should return action type: ${actionTypes.PRODUCT_START}`, () => {
    expect(ProductActions.startProductLoad()).toMatchObject({
      type: actionTypes.PRODUCT_START,
    });
  });

  it(`should return action type: ${actionTypes.PRODUCT_STOP}`, () => {
    expect(ProductActions.stopProductLoad()).toMatchObject({
      type: actionTypes.PRODUCT_STOP,
    });
  });

  it(`should return action type: ${actionTypes.PRODUCT_GET_LIST_SUCCEED}`, () => {
    expect(ProductActions.updateProducts([])).toMatchObject({
      type: actionTypes.PRODUCT_GET_LIST_SUCCEED,
      payload: [],
    });
  });

  it(`should return action type: ${actionTypes.PRODUCT_GET_LIST_FAILED}`, () => {
    expect(ProductActions.clearProducts("test")).toMatchObject({
      type: actionTypes.PRODUCT_GET_LIST_FAILED,
      payload: "test",
    });
  });

  it("should trigger multiple actions on getProductList call on success", () => {
    const mockResponse = { test: "test" };
    http.onGet("/").reply(200, mockResponse);
    return store.dispatch(ProductActions.getProductList()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: actionTypes.PRODUCT_START,
      });
      expect(store.getActions()[1]).toEqual({
        type: actionTypes.PRODUCT_GET_LIST_SUCCEED,
        payload: mockResponse,
      });
      expect(store.getActions()[2]).toEqual({
        type: actionTypes.PRODUCT_STOP,
      });
    });
  });

  it("should trigger multiple actions on getProductList call on failure", () => {
    http.onGet("/").reply(500);
    return store.dispatch(ProductActions.getProductList()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: actionTypes.PRODUCT_START,
      });
      expect(store.getActions()[1]).toEqual({
        type: actionTypes.PRODUCT_GET_LIST_FAILED,
        payload: "Request failed with status code 500",
      });
      expect(store.getActions()[2]).toEqual({
        type: actionTypes.PRODUCT_STOP,
      });
    });
  });
});
