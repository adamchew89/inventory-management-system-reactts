// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./Footer";

describe("Unit Test:", () => {
  const baseProps = {};
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Footer")).toHaveLength(1);
  });
});
