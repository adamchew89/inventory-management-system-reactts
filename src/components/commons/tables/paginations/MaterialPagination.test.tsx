// Libraries
import React from "react";
import {TablePagination} from "@material-ui/core";
import { shallow } from "enzyme";
// Target
import Target from "./MaterialPagination";

describe("Unit Test:", () => {
  const baseProps = {
    rows: [{ id: 1, name: "test" }],
    rowsPerPage: 1,
    page: 0,
    handleChangePage: jest.fn(),
    handleChangeRowsPerPage: jest.fn(),
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find(TablePagination)).toHaveLength(1);
  });
});
