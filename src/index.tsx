import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export interface PaginateStateProps {
  page: number;
  maxPage: number;
}
export interface PaginateDispatchProps {
  fetchPosts: (page: number) => void;
}
export interface PaginateProps extends PaginateStateProps {}

const ReactSimplePagination: React.FC<PaginateProps> = (props: PaginateProps) => {
  const range = (start: number, end: number): number[] => {
    return Array.from({ length: end - start + 1 }, (v, k) => k + start)
  };
  const getPages = () => {
    const maxPage = props.maxPage | 5;
    const page = props.page | 1;
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
        <li>
          <FontAwesomeIcon icon={faChevronLeft} />
        </li>
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
        <li>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
    </div>
  )
};

export default ReactSimplePagination;
