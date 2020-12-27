// Libraries
import { Box } from "@material-ui/core";
// Styles
import classes from "./Footer.module.css";
// Components (Common)
import MaterialAppBar from "../../components/commons/navigations/appbars/MaterialAppBar";

export interface IProps {}

const Footer = (props: IProps) => {
  return (
    <MaterialAppBar>
      <Box id="Footer" className={classes.Footer}>Footer</Box>
    </MaterialAppBar>
  );
};

export default Footer;
