// Libraries
import { Link, Switch, Route } from "react-router-dom";
// Containers
import Landing from "./containers/landing/Landing";
import Products from "./containers/products/Products";

const App = () => {
  return (
    <div id="App" className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
