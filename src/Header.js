import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './styles/bulma.css';
import './styles/fontawesome.css'
import "./styles/style.css"

const Header = () => {
    const [isSideNavActive, setIsSideNavActive] = useState(false);

    return (
        <header>

            {/* Nav bar */}
            <nav className="navbar my-primary">

                {/* This is the left side of the navbar */}
                <div className="navbar-brand">

                    {/* Hamburger menu for touch devices. Span creates the horizontal lines */}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a role="button" className={isSideNavActive ? "navbar-burger is-active" : "navbar-burger" }
                       aria-label="menu" aria-expanded="false" onClick={() => setIsSideNavActive(!isSideNavActive)}>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
                {/*End of side navbar*/}

                {/*Navbar menu*/}
                <div className={isSideNavActive ? "navbar-menu is-active" : "navbar-menu"}>

                    {/*Items will appear on the left*/}
                    <div className="navbar-start is-family-code"></div>

                    {/*Items will appear on the right*/}
                    <div className="navbar-end">

                        {/*Home*/}
                        <Link to="/" className="nav-link navbar-item is-size-5 mx-3 is-family-code">
                            <span className="icon-text">
                                <span className="icon">
                                    <i className="fas fa-home"/>
                                </span>
                                <span>Home</span>
                            </span>
                        </Link>

                        {/*Projects*/}
                        <Link to="/" className="nav-link navbar-item is-size-5 mx-3 is-family-code">
                        {/*<Link to="/projects" className="nav-link navbar-item is-size-5 mx-3 is-family-code">*/}
                            <span className="icon-text">
                                <span className="icon">
                                    <i className="fas fa-code"/>
                                </span>
                                {/*<span>Projects</span>*/}
                                <span><strike>Projects</strike></span>
                            </span>
                        </Link>

                        {/*Blog*/}
                        <Link to="/" className="nav-link navbar-item is-size-5 mx-3 is-family-code">
                        {/*<Link to="/blog" className="nav-link navbar-item is-size-5 mx-3 is-family-code">*/}
                            <span className="icon-text">
                                <span className="icon">
                                    <i className="fas fa-newspaper"/>
                                </span>
                                {/*<span>Blog</span>*/}
                                <span><strike>Blog</strike></span>
                            </span>
                        </Link>

                        {/*Wiki*/}
                        <Link to="/" className="nav-link navbar-item is-size-5 mx-3 is-family-code">
                        {/*<Link to="/wiki" className="nav-link navbar-item is-size-5 mx-3 is-family-code">*/}
                            <span className="icon-text">
                                <span className="icon">
                                    <i className="fas fa-book-reader"/>
                                </span>
                                {/*<span>Wiki</span>*/}
                                <span><strike>Wiki</strike></span>
                            </span>
                        </Link>

                        {/*Contact*/}
                        <Link to="/" className="nav-link navbar-item is-size-5 mx-3 is-family-code">
                        {/*<Link to="/contact" className="nav-link navbar-item is-size-5 mx-3 is-family-code">*/}
                            <span className="icon-text">
                                <span className="icon">
                                    <i className="fas fa-address-book"/>
                                </span>
                                {/*<span>Contact</span>*/}
                                <span><strike>Contact</strike></span>
                            </span>
                        </Link>

                    </div>
                    {/*End of nav bar right end*/}

                </div>
                {/*End of nav menu*/}

            </nav>
            {/*End of nav*/}

        </header>
    );
};

export default Header;