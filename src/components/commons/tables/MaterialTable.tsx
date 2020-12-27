// Libraries
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

export interface IProps {
  rows: any[];
}

const MaterialTable = (props: IProps) => {
  const { rows } = props;
  const headings = Object.keys(rows[0]);
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
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
