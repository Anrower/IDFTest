import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../../hooks/redux';
import { getObjectValuesToString } from '../../helpers/getObjectValueToStirng';
import { screenInnerWidth } from '../../helpers/consts';

export default function CustomPaginationActionsTable() {

  const data = useAppSelector(store => store.userInfoReducer)

  function createData(name: string, value: string) {
    return { name, value };
  }

  const styleTableCel = {
    maxWidth: 'auto',
    padding: 10
  }

  const rows = [
    createData('First Name:', data.firstName),
    createData('Last Name:', data.lastName),
    createData('Email:', data.email),
    createData('Mobile Phone:', data.tel),
    createData('Password:', data.password),
    createData('Sex:', data.sex),
    createData('Birthday:', `${data.birthday.day}.${data.birthday.month}.${data.birthday.year}`),
    createData('Favorite Ocean:', data.favoriteOcean),
    createData('Hobby:', getObjectValuesToString(data.hobby)),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 2 }}
    >
      <Table
        sx={{ minWidth: '100%' }}
        aria-label="custom pagination table"
      >
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                style={screenInnerWidth < 480 ? styleTableCel : undefined}
              >
                {row.name}
              </TableCell>
              <TableCell
                style={screenInnerWidth < 480 ? styleTableCel : undefined}
                align="right"
              >
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}