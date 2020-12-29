// Libraries
// Target
import ProductReducers, { initialState } from "./reducer-product";
// Constants
import * as actionTypes from "../action-types";

describe("Unit Test:", () => {
  const getProductListPayloadSuccess = {
    _embedded: { products: ["test"] },
    page: { test: "test" },
  };
  const getProductListPayloadFailure = "Error";

  it("should return default state.", () => {
    const action = { type: "" };
    const state = ProductReducers(undefined, action);
    expect(state).toMatchObject(initialState);
  });

  it(`should set loading state to true when action type: ${actionTypes.PRODUCT_START}.`, () => {
    const action = { type: actionTypes.PRODUCT_START };
    const state = ProductReducers(undefined, action);
    expect(state.loading).toBeTruthy();
  });

  it(`should set loading state to false when action type: ${actionTypes.PRODUCT_STOP}.`, () => {
    const action = { type: actionTypes.PRODUCT_STOP };
    const state = ProductReducers(undefined, action);
    expect(state.loading).toBeFalsy();
  });

  it(`should set errorMessage and clear products when action type: ${actionTypes.PRODUCT_GET_LIST_FAILED}.`, () => {
    const action = {
      type: actionTypes.PRODUCT_GET_LIST_FAILED,
      payload: getProductListPayloadFailure,
    };
    const state = ProductReducers(undefined, action);
    expect(state.products).toMatchObject([]);
    expect(state.errorMessage.length).toBeGreaterThan(0);
  });

  it(`should set products and clear errorMessage when action type: ${actionTypes.PRODUCT_GET_LIST_SUCCEED}.`, () => {
    const action = {
      type: actionTypes.PRODUCT_GET_LIST_SUCCEED,
      payload: getProductListPayloadSuccess,
    };
    const state = ProductReducers(undefined, action);
    expect(state.products).toMatchObject(
      getProductListPayloadSuccess._embedded.products
    );
    expect(state.page).toMatchObject(getProductListPayloadSuccess.page);
    expect(state.errorMessage.length).toBe(0);
  });
});
