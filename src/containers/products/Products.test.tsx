// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target, { Products as TargetDC, IProps, isIProps } from "./Products";
// Stores
import baseStore from "../../stores/store";
import { initialState } from "../../stores/reducers/reducer-product";
// Components (Common)
import MaterialTable from "../../components/commons/tables/MaterialTable";

describe("Unit Test:", () => {
  // Base Props
  const baseProps: IProps = {
    getProductList: jest.fn(),
    productStore: initialState,
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

  it("should return #ProductNotAvailable element if 'products' is empty.", () => {
    expect(target.find("#ProductNotAvailable")).toHaveLength(1);
  });

  it("should return MaterialTable element if 'products' is not empty.", () => {
    const modifiedProps = { ...baseProps };
    modifiedProps.productStore.products = [
      {
        product: "Yoga Pants",
        detail: "Yoga pants for ladies.",
        cost: 19.9,
        retail: 79.9,
        width: 0.2,
        depth: 0.2,
        height: 0.05,
        weight: 0.3,
        _links: {},
      },
    ];
    target = shallow(<TargetDC {...modifiedProps} />);
    expect(target.find(MaterialTable)).toHaveLength(1);
  });

  it("should update 'page' when handleChangePage is triggered.", () => {
    const mockPage = 10;
    target.find(MaterialTable).props().handleChangePage(null, mockPage);
    expect(target.state("page")).toBe(mockPage);
  });

  it("should update 'rowsPerPage' when handleChangeRowsPerPage is triggered.", () => {
    const mockEvent = { target: { value: 10 } };
    target.find(MaterialTable).props().handleChangeRowsPerPage(mockEvent);
    expect(target.state("rowsPerPage")).toBe(mockEvent.target.value);
  });
});

describe("Type Checking:", () => {
  // Base Props
  const baseProps: IProps = {
    getProductList: () => {},
    productStore: initialState,
  };
  it("should validate if type requirement is fulfilled.", () => {
    expect(isIProps(baseProps)).toBeTruthy();
  });

  it("should invalidate if type requirement is not fulfilled.", () => {
    const faultyProps: any = {
      getProductList: () => {},
      productStore: initialState,
    };
    // Clone the baseProps
    const faultyBaseProps1 = { ...faultyProps };
    const faultyBaseProps2 = { ...faultyProps };
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
