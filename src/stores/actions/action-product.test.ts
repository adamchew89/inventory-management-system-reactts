// Libraries
// Target
import * as ProductActions from "./action-product";
// Constants
import * as actionTypes from "../action-types";

describe("Unit Test:", () => {
  it(`should return action type: ${actionTypes.PRODUCT_GET_LIST_FAILED}`, () => {
    expect(ProductActions.getProductList()).toMatchObject({
      type: actionTypes.PRODUCT_GET_LIST_FAILED,
    });
  });
});
