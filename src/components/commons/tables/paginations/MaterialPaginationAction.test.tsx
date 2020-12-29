// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./MaterialPaginationAction";

describe("Unit Test:", () => {
  const baseProps = {
    count: 1,
    rowsPerPage: 1,
    page: 0,
    onChangePage: jest.fn(),
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#MaterialPaginationAction")).toHaveLength(1);
  });

  it("should trigger 'onChangePage' when onClick is triggered.", () => {
    target.find("#FirstPageButton").simulate('click', null);
    expect(baseProps.onChangePage).toBeCalledTimes(1);
    target.find("#PreviousPageButton").simulate('click', null);
    expect(baseProps.onChangePage).toBeCalledTimes(2);
    target.find("#NextPageButton").simulate('click', null);
    expect(baseProps.onChangePage).toBeCalledTimes(3);
    target.find("#LastPageButton").simulate('click', null);
    expect(baseProps.onChangePage).toBeCalledTimes(4);
  });
});
