import { FC } from "react";

import { Link } from "../";

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

function range(from: number, to: number) {
  return [...Array(to - from).keys()].map((i) => i + from);
}

const Pagination: FC<PaginationProps> = ({
  pageCount,
  currentPage,
  hasNext,
  hasPrev,
}) => {
  const offset = 3;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const start = Math.max(currentPage - offset, 1);
  const stop = Math.min(currentPage + offset, pageCount);

  console.log(start, stop);

  return (
    <ul className="flex space-x-3">
      {hasPrev && (
        <li>
          <Link href={`?page=${prevPage}`}>Prev</Link>
        </li>
      )}
      {currentPage - offset > 1 && (
        <li>
          <span>&hellip;</span>
        </li>
      )}
      {range(start, stop + 1).map((i) => {
        const isActive = i === currentPage;

        return (
          <li key={`page-${i}`}>
            {isActive ? (
              <a href="#" aria-current="page">
                {i}
              </a>
            ) : (
              <Link href={`?page=${i}`}>{i}</Link>
            )}
          </li>
        );
      })}
      {pageCount > currentPage + offset && (
        <li>
          <span>&hellip;</span>
        </li>
      )}
      {hasNext && (
        <li>
          <Link href={`?page=${nextPage}`}>Next</Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
