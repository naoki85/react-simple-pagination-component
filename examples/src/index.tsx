import React from 'react';
import { render } from 'react-dom'
import ReactSimplePagination from '../../src'

const App: React.FC<{}> = () => (
  <>
    <h1>React Simple Pagination Componnet</h1>
    <h2>Simple Usage</h2>
    <ReactSimplePagination page={1} maxPage={5} />
    <h2>Props</h2>
    <table>
      <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
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

render(<App />, document.getElementById('root'));
