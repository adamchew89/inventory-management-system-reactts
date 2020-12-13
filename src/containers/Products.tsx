// Libraries
import { Component } from "react";
import { connect } from "react-redux";
// ActionCreators
import * as actionProduct from "../stores/actions/action-product";

interface IProductsProps {
  // ActionCreators
  getProductList: Function;
  // Props
}

interface IProductsState {}

export class Products extends Component<IProductsProps, IProductsState> {
  componentDidMount() {
    this.props.getProductList();
  }

  render() {
    return <div id="Products">test</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { productstore: state.productStore };
};

const mapDispatchToProps = (dispatch: any) => {
  return { getProductList: () => dispatch(actionProduct.getProductList()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
