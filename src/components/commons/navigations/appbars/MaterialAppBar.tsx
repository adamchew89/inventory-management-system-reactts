// Libraries
import { AppBar } from "@material-ui/core";

interface IProps {
  children: any;
}

const MaterialAppBar = (props: IProps) => {
  return <AppBar position="relative">{props.children}</AppBar>;
};

export default MaterialAppBar;
