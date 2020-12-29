// Libraries
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableFooter,
  TableCell,
  TableRow,
} from "@material-ui/core";
// Components (Common)
import MaterialPagination from "./paginations/MaterialPagination";

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

const MaterialTable = (props: IProps) => {
  const headings = Object.keys(props.rows[0]);
  return (
    <TableContainer id="MaterialTable">
      <Table>
        <TableHead>
          <TableRow>
            {headings.map((heading) => (
              <TableCell key={heading}>{heading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row[headings[0]]}>
              {headings.map((heading, index) => (
                <TableCell key={`${index}-${row[headings[0]]}-${row[heading]}`}>
                  {row[heading]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <MaterialPagination
              rows={props.rows}
              rowsPerPage={props.rowsPerPage}
              page={props.page}
              handleChangePage={props.handleChangePage}
              handleChangeRowsPerPage={props.handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
