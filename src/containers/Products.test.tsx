// Libraries
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// Target
import Target, { Products as TargetDC } from "./Products";

const mockStore = configureMockStore([thunk]);

describe("Unit Test:", () => {
  let baseProps = undefined;
  let target: any = undefined;
  beforeEach(() => {
    baseProps = { getProductList: jest.fn() };
    target = shallow(<TargetDC {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Products")).toHaveLength(1);
  });
});

describe("Connected Test:", () => {
  let initialState = undefined;
  let store = undefined;
  let target: any = undefined;
  beforeEach(() => {
    initialState = {};
    store = mockStore(initialState);
    target = shallow(
      <Provider store={store}>
        <Target />
      </Provider>
    );
  });
});
