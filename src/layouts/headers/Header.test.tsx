// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target from "./Header";

describe("Unit Test:", () => {
  const baseProps = { children: <div>test</div> };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Header")).toHaveLength(1);
  });
});
