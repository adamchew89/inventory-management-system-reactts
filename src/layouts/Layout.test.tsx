// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./Layout";

describe("Unit Test:", () => {
  const baseProps = {
    children: <div>test</div>,
    routes: [],
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Layout")).toHaveLength(1);
  });
});
