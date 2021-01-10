// Libraries
import { Component, MouseEvent, ChangeEvent } from "react";
import { connect } from "react-redux";
import { AxiosRequestConfig } from "axios";
import { Box, Typography } from "@material-ui/core";
// Styles
import classes from "./Product.module.css";
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
  state = { rowsPerPage: 1, page: 0, sort: "product,asc" };

  componentDidMount() {
    this.handleRefreshTable();
  }

  handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    this.setState({ page: newPage }, this.handleRefreshTable);
  };

  handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState(
      { rowsPerPage: parseInt(event.target.value, 10), page: 0 },
      this.handleRefreshTable
    );
  };

  handleRefreshTable = () => {
    const { page, sort, rowsPerPage: size } = this.state;
    const options = { params: { page, sort, size } };
    this.props.getProductList(options);
  };

  generateTable = () => {
    // Return not found message
    if (this.props.productStore.products.length === 0) {
      return (
        <Typography id="ProductNotAvailable">No products available.</Typography>
      );
    }
    // Remove unwanted attributes from IProduct for display
    const products = this.props.productStore.products.map((p) => {
      const { _links, ...product } = p;
      return product;
    });
    // Return generated table
    return (
      <MaterialTable
        rows={products}
        rowsPerPage={this.state.rowsPerPage}
        page={this.state.page}
        count={this.props.productStore.page.totalElements}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  };

  render() {
    return (
      <Box id="Products" className={classes.Product}>
        <Typography variant="h1">Products</Typography>
        {this.generateTable()}
      </Box>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { productStore: state.productStore };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProductList: (options: AxiosRequestConfig | undefined) =>
      dispatch(actionProduct.getProductList(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
