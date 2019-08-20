import React from 'react';
import './index.css';

const pages = [1, 2, 3, 4, 5];

const ReactSimplePagination = () => (
  <div className={"paginate-area"}>
    <ul className="paginate">
      {pages.map(i => {
        return (
          <li
            key={i}
            className={i === 1 ? 'current' : ''}
          >
            {i}
          </li>
        )
      })}
    </ul>
  </div>
);
export default ReactSimplePagination;
