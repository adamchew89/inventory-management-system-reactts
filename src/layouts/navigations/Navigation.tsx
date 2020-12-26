// Libraries
import { Link } from "react-router-dom";

export interface IProps {
  routes: IRoute[];
}

const Navigation = (props: IProps) => {
  return (
    <ul id="Navigation">
      {props.routes.map((route) => (
        <li>
          <Link to={route.link}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
