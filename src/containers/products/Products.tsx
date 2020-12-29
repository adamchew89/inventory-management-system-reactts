// Libraries
import { Component, MouseEvent, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// ActionCreators
import * as actionProduct from "../../stores/actions/action-product";
// Components
import MaterialTable from "../../components/commons/tables/MaterialTable";

export interface IProps {
  // Styles
  classes: any;
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

const styles = {
  root: {
    width: "100%",
  },
};

export class Products extends Component<IProps> {
  state = { rowsPerPage: 1, page: 0 };

  componentDidMount() {
    this.props.getProductList();
  }

  handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10), page: 0 });
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
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  };

  render() {
    return (
      <Box id="Products" className={this.props.classes.root}>
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
  return { getProductList: () => dispatch(actionProduct.getProductList()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Products));
