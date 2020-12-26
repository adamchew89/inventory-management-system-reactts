// Libraries
import { Box } from "@material-ui/core";
// Styles
import classes from "./Header.module.css";
// Components (Commons)
import MaterialAppBar from "../../components/commons/navigations/appbars/MaterialAppBar";

export interface IProps {
  children: Object;
}

const Header = (props: IProps) => {
  return (
    <MaterialAppBar>
      <Box id="Header" className={classes.Header}>
        {props.children}
      </Box>
    </MaterialAppBar>
  );
};

export default Header;
