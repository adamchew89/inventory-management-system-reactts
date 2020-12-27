// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./MaterialTable";

describe("Unit Test:", () => {
  const baseProps = {
    rows: [{ id: 1, name: "test" }],
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#MaterialTable")).toHaveLength(1);
  });
});
