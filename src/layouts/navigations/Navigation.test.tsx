// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./Navigation";

describe("Unit Test:", () => {
  const baseProps = { routes: [] };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Navigation")).toHaveLength(1);
  });
});
