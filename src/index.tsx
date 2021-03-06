import React, { FC } from 'react';
import './index.css';

interface PaginateProps {
  maxPage: number;
  onClickAction: (page: number) => void;
  page: number;
}

const ReactSimplePagination: FC<PaginateProps> = (props: PaginateProps) => {
  const range = (start: number, end: number): number[] => {
    return Array.from({ length: end - start + 1 }, (v, k) => k + start)
  };
  const getPages = () => {
    const maxPage = props.maxPage || 5;
    const page = props.page || 1;
    if (maxPage > 0 && maxPage <= 5) {
      return range(1, maxPage)
    }
    if (page - 3 <= 0) {
      return range(1, 5)
    }
    const tmpPages: number[] = [];
    const iterater = [-2, -1, 0, 1, 2];
    iterater.forEach(i => {
      const tmpPage = page + i;
      if (tmpPage > maxPage) {
        return true
      }
      tmpPages.push(tmpPage)
    });

    return tmpPages
  };

  const pages = getPages();

  return (
    <div className={"paginate-area"}>
      <ul className="paginate">
        {(props.page > 1) && (
          <li onClick={() => props.onClickAction(props.page - 1) }>
            &lt;
          </li>
        )}
        {pages.map(i => {
          return (
            <li
              key={i}
              className={props.page === i ? 'current' : ''}
              onClick={() => props.onClickAction(i) }
            >
              {i}
            </li>
          )
        })}
        {(props.page < props.maxPage) && (
          <li onClick={() => props.onClickAction(props.page + 1) }>
            &gt;
          </li>
        )}
      </ul>
    </div>
  )
};

export default ReactSimplePagination;
