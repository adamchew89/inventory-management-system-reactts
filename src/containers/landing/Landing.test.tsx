// Libraries
import React from "react";
import { shallow } from "enzyme";
// Target
import Target, { IProps, isIProps } from "./Landing";

describe("Unit Test:", () => {
  const baseProps = {
    children: <div>test</div>,
  };
  let target: any = undefined;
  beforeEach(() => {
    target = shallow(<Target {...baseProps} />);
  });

  it("should render without crashing.", () => {
    expect(target.find("#Landing")).toHaveLength(1);
  });
});

describe("Type Checking:", () => {
  // Base Props
  const baseProps: IProps = {};
  it("should validate if type requirement is fulfilled.", () => {
    expect(isIProps(baseProps)).toBeTruthy();
  });
});
