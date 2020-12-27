// Libraries
import { Box, AppBar } from "@material-ui/core";

interface IProps {
  children: any;
}

const MaterialAppBar = (props: IProps) => {
  return (
    <Box id="MaterialAppBar">
      <AppBar position="relative">{props.children}</AppBar>
    </Box>
  );
};

export default MaterialAppBar;
