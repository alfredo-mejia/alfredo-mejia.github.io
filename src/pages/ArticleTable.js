import React from "react";
import jsonDataProjects from "../data/projects.json";
import jsonDataBlogs from "../data/blogArticles.json";
import jsonDataWiki from "../data/wikiArticles.json";
import {capitalize} from "../helper/helper-functions";
import {Link} from "react-router-dom";

const ArticleTable = (props) => {
    const pageType = props.page;
    let tableHeaders = [];
    let articles = [];

    if (pageType === "projects") {
        // tableHeaders = ["Title", "Subject", "Languages", "Date Created", "Status", "Summary"];
        tableHeaders = ["Title", "Languages", "Type", "Date Created", "Status", "Summary"];
        articles = jsonDataProjects.articles;
    }

    else if (pageType === "blog") {
        tableHeaders = ["Title", "Subject", "Field", "Date Created", "Summary"];
        articles = jsonDataBlogs.articles;
    }

    else {
        tableHeaders = ["Title", "Subject", "Field", "Languages", "Summary"];
        articles = jsonDataWiki.articles;
    }

    return (
        <div className="card is-family-code m-4">
            <div className="card-content">
                <div className="content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                {
                                    tableHeaders.map((header, index) => {
                                        return (
                                            <th key={header}>{header}</th>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                articles.map((obj, index) => {
                                    return (
                                        <tr key={obj.id} className="row">
                                            {/* First cell */}
                                            <td>
                                                <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                                    <strong>{index + 1}</strong>
                                                </Link>
                                            </td>

                                            {/* Second cell */}
                                            <td>
                                                <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                                    {obj.title}
                                                </Link>
                                            </td>

                                            {/* Third cell */}
                                            <td>
                                                <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                                    {pageType === "projects" ? capitalize(obj.languages.join(" "), "Tab 63") : capitalize(obj.subject, "Tab 68")}
                                                </Link>
                                            </td>

                                            {/* Fourth cell */}
                                            <td>
                                                <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                                    {pageType === "projects" ? capitalize(obj.type, "Tab 68") : capitalize(obj.field, "Tab 68")}
                                                </Link>
                                            </td>

                                            {/* Fifth cell */}
                                            <td>
                                                <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                                    {pageType === "wiki" ? capitalize(obj.languages.join(" "), "Tab 74") : obj.datecreated1}
                                                </Link>
                                            </td>

                                            {pageType === "projects" ?
                                                (<td style={capitalize(obj.status) === "Open" ? {color: "hsl(141, 71%, 48%)"} : (capitalize(obj.status) === "Closed" ? {color: "hsl(348, 100%, 61%)"} : {color: "hsl(48, 100%, 67%)"})}> <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>{capitalize(obj.status)} </Link></td>)
                                                : null}

                                            <td>
                                                <Link to={`/${pageType}/${obj.title}+${obj.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                                    {obj.subcontent1.length > 150 ? obj.subcontent1.substring(0, 150) + "..." : obj.subcontent1}
                                                </Link>
                                            </td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ArticleTable;

