// Libraries
import { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
// ActionCreators
import * as actionProduct from "../../stores/actions/action-product";
// Components
import MaterialTable from "../../components/commons/tables/MaterialTable";

export interface IProps {
  // Stores
  store?: Object;
  productStore: IProductStore;
  // ActionCreators
  getProductList: Function;
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

  generateTable = () => {
    // Return not found message
    if (this.props.productStore.products.length === 0) {
      return <Typography id="ProductNotAvailable">No products available.</Typography>;
    }
    // Remove unwanted attributes from IProduct for display
    const products = this.props.productStore.products.map((p) => {
      const { _links, ...product } = p;
      return product;
    });
    // Return generated table
    return <MaterialTable rows={products} />;
  };

  render() {
    return (
      <div id="Products">
        <Typography variant="h1">Products</Typography>
        {this.generateTable()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { productStore: state.productStore };
};

const mapDispatchToProps = (dispatch: any) => {
  return { getProductList: () => dispatch(actionProduct.getProductList()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
