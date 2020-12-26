// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./MaterialAppBar";

describe("Unit Test:", () => {
  const baseProps = {
    children: <div>test</div>,
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#MaterialAppBar")).toHaveLength(1);
  });
});
