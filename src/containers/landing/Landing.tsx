// Libraries
import { Component } from "react";
// Components (Common)

export interface IProps {
  // Stores
  store?: Object;
}

export const isIProps = (arg: any): arg is IProps => {
  return true;
};

export class Landing extends Component<IProps> {
  render() {
    return <div id="Landing">Landing</div>;
  }
}

export default Landing;
