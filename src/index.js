import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Body />
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
