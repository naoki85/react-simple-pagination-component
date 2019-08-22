import React, { FC, useState } from 'react';
import { render } from 'react-dom';
import ReactSimplePagination from '../../src';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const App: FC<{}> = () => {
  const [Page, setPage] = useState(1);
  const maxPage = 5;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h4"
        >
          React Simple Pagination Componnet
        </Typography>
        <Typography
          component="h2"
          variant="h5"
        >
          Simple Usage
        </Typography>
        <ReactSimplePagination 
          page={Page}
          maxPage={maxPage}
          onClickAction={(page: number) => setPage(page)}
        />
        <Typography
          component="h2"
          variant="h5"
        >
          Props
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Requirement</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>page</TableCell>
              <TableCell>number</TableCell>
              <TableCell>○</TableCell>
              <TableCell>Current page number.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>maxPage</TableCell>
              <TableCell>number</TableCell>
              <TableCell>○</TableCell>
              <TableCell>Max number of pages.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>onClickAction</TableCell>
              <TableCell>(page: number) => void</TableCell>
              <TableCell>○</TableCell>
              <TableCell>Action when button is clicked.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

render(<App />, document.getElementById('root'));
