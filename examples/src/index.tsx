import React, { FC, useState } from 'react';
import { render } from 'react-dom'
import ReactSimplePagination from '../../src'

const App: FC<{}> = () => {
  const [Page, setPage] = useState(1);

  return (
    <>
      <h1>React Simple Pagination Componnet</h1>
      <h2>Simple Usage</h2>
      <ReactSimplePagination 
        page={Page}
        maxPage={5}
        onClickAction={(page: number) => setPage(page)}
      />
      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>page</td>
            <td>Number</td>
            <td>Current page number.</td>
          </tr>
          <tr>
            <td>maxPage</td>
            <td>Number</td>
            <td>Max number of pages.</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

render(<App />, document.getElementById('root'));
