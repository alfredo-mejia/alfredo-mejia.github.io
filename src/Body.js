import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CommonPage from "./pages/CommonPage";
import Contact from "./pages/Contact";
import SingleArticle from "./pages/SingleArticle";

const Body = () => {
    return (
        <div style={{background: "#FAFAFA"}}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/*<Route path="/projects" element={<CommonPage pageType="projects"/>} />*/}
                {/*<Route path="/blog" element={<CommonPage pageType="blog"/>} />*/}
                {/*<Route path="/wiki" element={<CommonPage pageType="wiki"/>} />*/}
                {/*<Route path="/contact" element={<Contact/>} />*/}
                {/*<Route path="/projects/:urlID" element={<SingleArticle pageType="projects"/>} />*/}
                {/*<Route path="/blog/:urlID" element={<SingleArticle pageType="blog"/>} />*/}
                {/*<Route path="/wiki/:urlID" element={<SingleArticle pageType="wiki"/>} />*/}
            </Routes>
        </div>
    );
}

export default Body;