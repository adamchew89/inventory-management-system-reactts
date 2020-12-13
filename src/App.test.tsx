// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./App";

describe("Unit Test:", () => {
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#App")).toHaveLength(1);
  });
});
