// Libraries
import { Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
// Layouts
import Layout from "./layouts/Layout";
// Containers
import Landing from "./containers/landing/Landing";
import Products from "./containers/products/Products";

const App = () => {
  const routes = [
    { name: "Landing", link: "/", label: "Home" },
    { name: "Products", link: "/products", label: "Products" },
  ];
  return (
    <Box id="App">
      <Layout routes={routes}>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Layout>
    </Box>
  );
};

export default App;
