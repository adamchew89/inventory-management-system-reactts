// Libraries
import { Component } from "react";
import { connect } from "react-redux";
// ActionCreators
import * as actionProduct from "../stores/actions/action-product";

export interface IProps {
  // ActionCreators
  getProductList: Function;
  // Stores
  productStore: Object;
}

export const isIProps = (arg: any): arg is IProps => {
  if (!(arg.getProductList instanceof Function)) return false;
  if (!(arg.productStore instanceof Object)) return false;
  return true;
};

export class Products extends Component<IProps> {
  componentDidMount() {
    this.props.getProductList();
  }

  render() {
    return <div id="Products">test</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { productStore: state.productStore };
};

const mapDispatchToProps = (dispatch: any) => {
  return { getProductList: () => dispatch(actionProduct.getProductList()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
