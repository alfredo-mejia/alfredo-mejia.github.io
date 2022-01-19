import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import jsonDataProjects from "../data/projects.json";
import jsonDataBlogs from "../data/blogArticles.json";
import jsonDataWiki from "../data/wikiArticles.json";

const SingleArticle = (props) => {
    const pageType = props.pageType;
    const {urlID} = useParams();
    const articleID = parseInt(urlID.split("+")[1]);
    const [article, setArticle] = useState({});

    useEffect(() => {
        if (pageType === "projects"){
            const articleInfo = jsonDataProjects.articles.find(obj => obj.id === articleID);
            setArticle(articleInfo)
        }

        else if (pageType === "blog"){
            const articleInfo = jsonDataBlogs.articles.find(obj => obj.id === articleID);
            setArticle(articleInfo)
        }

        else{
            const articleInfo = jsonDataWiki.articles.find(obj => obj.id === articleID);
            setArticle(articleInfo)
        }

    }, []);


    return (
        <div className="columns">
            <div className="column">
                <div className="card is-family-code m-4">

                    {/* Card content for Article */}
                    <div className="card-content">

                        {/* Content */}
                        <div className="content">
                            <h1 className="is-size-2 has-text-centered has-text-info">{article.title}</h1>
                            <p className="mb-3 is-size-4" style={{textAlign: "center"}}>By: {article.author}</p>
                            <p className="mb-1" style={{textAlign: "center"}}>Date Created: {article.datecreated2}</p>
                            {/*<p className="mb-1" style={{textAlign: "center"}}>Last Modified: {article.lastmodified}</p>*/}
                            {pageType === "projects" ? (<p className="mb-1" style={article.status === "Open" ? {color: "hsl(141, 71%, 48%)", textAlign: "center"} : (article.status === "Closed" ? {color: "hsl(348, 100%, 61%)", textAlign: "center"} : {color: "hsl(48, 100%, 67%)", textAlign: "center"})}>Status: {article.status}</p>) : null}
                            <div className="my-4 article-links" style={{textAlign: "center"}}>

                                {
                                    pageType === "projects" ? (
                                        <a href={article.githublink} className="mx-2" target="_blank">
                                            <span className="icon is-medium">
                                                <i className="fab fa-2x fa-github"/>
                                            </span>
                                        </a>
                                    ) : null
                                }

                                <a href={article.pdflink} className="mx-2" target="_blank">
                                    <span className="icon is-medium">
                                        <i className="fas fa-2x fa-file-pdf"/>
                                    </span>
                                </a>
                            </div>

                            <div>
                                <h2>{article.header1}</h2>
                                <p>{article.subcontent1}</p>
                                {article.image1 === "" ? null : (
                                    <figure className="image is-128x128">
                                        <img src={article.image1} />
                                    </figure>
                                )}
                                <h2>{article.header2}</h2>
                                <p>{article.subcontent2}</p>
                                {article.image2 === "" ? null : (
                                    <figure className="image is-128x128">
                                        <img src={article.image1} />
                                    </figure>
                                )}
                                <h2>{article.header3}</h2>
                                <p>{article.subcontent3}</p>
                                {article.image3 === "" ? null : (
                                    <figure className="image is-128x128">
                                        <img src={article.image2} />
                                    </figure>
                                )}
                                <h2>{article.header4}</h2>
                                <p>{article.subcontent4}</p>
                                {article.image4 === "" ? null : (
                                    <figure className="image is-128x128">
                                        <img src={article.image3} />
                                    </figure>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SingleArticle;