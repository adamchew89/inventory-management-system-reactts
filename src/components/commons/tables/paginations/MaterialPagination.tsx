// Libraries
import { TablePagination } from "@material-ui/core";
// Components (Common)
import MaterialPaginationAction from "./MaterialPaginationAction";

export interface IProps {
  rows: any[];
  rowsPerPage: number;
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const MaterialPagination = (props: IProps) => {
  return (
    <TablePagination
      rowsPerPageOptions={[1, 5, 10, 25, { label: "All", value: -1 }]}
      colSpan={Object.keys(props.rows[0]).length}
      count={props.rows.length}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onChangePage={props.handleChangePage}
      onChangeRowsPerPage={props.handleChangeRowsPerPage}
      ActionsComponent={MaterialPaginationAction}
    />
  );
};

export default MaterialPagination;
