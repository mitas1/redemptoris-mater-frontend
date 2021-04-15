import { FC } from 'react';

export interface ListWrapperProps {
  className?: string
}

export const ListWrapper: FC<ListWrapperProps> = ({ children, className }) => (
  <div
    className={className ? `${className} article-content` : "article-content"}
  >
    {children}
    <style jsx>{`
      .article-content {
        width: 1100px;
        margin: 0 auto;
      }
      @media screen and (max-width: 992px) {
        .article-content {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export const Wrapper = ({ children }) => (
  <div className="preamble-wrapper">
    {children}
    <style jsx>{`
      .preamble-wrapper {
        margin: 80px auto 0 auto;
        width: 600px;
        text-align: center;
      }
      @media screen and (max-width: 992px) {
        .preamble-wrapper {
          width: 100%;
          margin: 0 0 24px;
          box-sizing: border-box;
          text-align: left;
        }
      }
    `}</style>
  </div>
)
