import React, { FC, PropsWithChildren } from 'react';

export interface ContectProps extends PropsWithChildren {
  className?: string
}

const Content: FC<ContectProps> = ({ children, className }) => (
  <div className={className ? `${className} content` : "content"}>
    {children}
    <style jsx>{`
      .content {
        width: 1150px;
        margin: 0 auto;
      }
      @media screen and (max-width: 992px) {
        .content {
          width: 100%;
          padding: 0 24px;
          box-sizing: border-box;
        }
      }
    `}</style>
  </div>
)

export default Content
