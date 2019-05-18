import React from "react";
import sanity from "../lib/sanity";

export default class IndexPage extends React.Component {
    static async getInitialProps({ query: { page = 1 } }) {
        return {
            posts: await sanity.fetch(`{
                'count': count(*[_type == "post"]),
                'items': *[_type == "post"][${(page - 1) * 2}..${page * 2 - 1}]
            }`),
            page: parseInt(page, 10)
        };
    }

    render() {
        const {
            posts: { items }
        } = this.props;

        return (
            <div>
                {items.map((item, i) => {
                    return (
                        <div key={i}>
                            <h1>{item.title}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}
