// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./Navigation";

describe("Unit Test:", () => {
  const baseProps = {
    routes: [{ name: "Test", link: "/test", label: "Test" }],
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Navigation")).toHaveLength(1);
  });

  it("should render one list item.", () => {
    expect(target.find("li")).toHaveLength(1);
  });
});
