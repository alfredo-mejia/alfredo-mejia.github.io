import React from "react";
import ArticleNav from "./ArticleNav";
import ArticleTable from "./ArticleTable";

const CommonPage = (props) => {
    const pageType = props.pageType;

    return (
        <div className="columns">
            <div className="column">
                <ArticleNav page={pageType} />
                <ArticleTable page={pageType} />
            </div>
        </div>
    );
}

export default CommonPage;