// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target, { Products as TargetDC, IProps, isIProps } from "./Products";
// Stores
import baseStore from "../stores/store";

describe("Unit Test:", () => {
  // Base Props
  const baseProps: IProps = {
    getProductList: jest.fn(),
    productStore: { dummy: "test" },
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<TargetDC {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Products")).toHaveLength(1);
  });

  it("should execute componentDidMount lifecycle methods.", () => {
    expect(baseProps.getProductList).toHaveBeenCalled();
  });
});

describe("Type Checking:", () => {
  // Base Props
  const baseProps: IProps = {
    getProductList: () => {},
    productStore: { dummy: "test" },
  };
  it("should validate if type requirement is fulfilled.", () => {
    expect(isIProps(baseProps)).toBeTruthy();
  });

  it("should invalidate if type requirement is not fulfilled.", () => {
    // Clone the baseProps
    const faultyBaseProps1 = { ...baseProps };
    const faultyBaseProps2 = { ...baseProps };
    // Remove a required property from baseProps clone
    delete faultyBaseProps1.getProductList;
    delete faultyBaseProps2.productStore;
    expect(isIProps(faultyBaseProps1)).toBeFalsy();
    expect(isIProps(faultyBaseProps2)).toBeFalsy();
  });
});

describe("Integration Test:", () => {
  let wrapper: any = undefined;
  beforeEach(() => {
    wrapper = shallow(<Target store={baseStore} />);
  });

  it("should fulfil interface requirement.", () => {
    // Dive inner layer as root node is context giver for redux
    expect(isIProps(wrapper.props().children.props)).toBeTruthy();
  });
});
