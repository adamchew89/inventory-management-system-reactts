// Libraries
// Target
import ProductReducers, { initialState } from "./reducer-product";
// Constants
import * as actionTypes from "../action-types";

describe("Unit Test:", () => {
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
    const action = { type: actionTypes.PRODUCT_GET_LIST_FAILED, error: "Error" };
    const state = ProductReducers(undefined, action);
    expect(state.products).toMatchObject([]);
    expect(state.errorMessage.length).toBeGreaterThan(0);
  });

  it(`should set products and clear errorMessage when action type: ${actionTypes.PRODUCT_GET_LIST_SUCCEED}.`, () => {
    const payload = ["test"];
    const action = { type: actionTypes.PRODUCT_GET_LIST_SUCCEED, payload };
    const state = ProductReducers(undefined, action);
    expect(state.products).toMatchObject(payload);
    expect(state.errorMessage.length).toBe(0);
  });
});
