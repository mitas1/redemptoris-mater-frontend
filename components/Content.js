import React from "react";

const Content = ({ children, className }) => (
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
);

export default Content;
