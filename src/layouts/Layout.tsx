// Libraries
import { Box } from "@material-ui/core";
// Styles
import classes from "./Layout.module.css";
// Components (Layouts)
import Header from "./headers/Header";
import Footer from "./footers/Footer";
import Navigation from "./navigations/Navigation";

export interface IProps {
  children: Object;
  routes: IRoute[];
}

const Layout = (props: IProps) => {
  return (
    <Box id="Layout" className={classes.Layout}>
      <Header>
        <nav>
          <ul>
            <Navigation routes={props.routes} />
          </ul>
        </nav>
      </Header>
      <Box id="Content" className={classes.Content}>
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
