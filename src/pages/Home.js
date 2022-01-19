// Imports
import React from "react";
import about from "../data/about.json";
import projects from "../data/projects.json";
import image from "../assets/alfredo.png"
import {Link} from "react-router-dom";

// Component Exported
const Home = () => {

    // Get the skills array
    const skills = Object.keys(about.me.skills);

    // Get the middle index of the skills array to show where to divide it
    const middleIndex = Math.ceil(skills.length/2);

    // Divide the skills into two separate arrays
    const firstHalfSkills = skills.slice(0, middleIndex);
    let secondHalfSkills = [];

    // If it's even or odd, slice it correctly
    if (skills.length % 2 === 0)
        secondHalfSkills = skills.slice(-middleIndex);
    else
        secondHalfSkills = skills.slice(-middleIndex+1);

    // Get the most recent projects
    const mostRecentProjects = projects.articles.slice(0, 4);

    // Return HTML (JSX)
    return (
        <div className="columns is-family-code is-justify-content-center">
            {/*<div className="columns is-family-code">*/}

            {/* Left side column*/}
            <div className="column is-three-quarters">

                {/* Main Card */}
                <div className="card my-4">

                    {/* Card Content */}
                    <div className="card-content">

                        {/* Content */}
                        <div className="content">

                            {/* Make content into columns */}
                            <div className="columns">

                                {/* First column */}
                                <div className="column is-one-fifth">
                                    <figure className="image is-128x128 m-auto">
                                        <img className="is-rounded" src={image}  alt="Alfredo Mejia starring into the camera"/>
                                    </figure>
                                </div>

                                {/* Second column */}
                                <div className="column">
                                    <h1 className="is-size-2 has-text-centered" >{about.me.name}</h1>
                                    <p>{about.me.aboutme1}</p>
                                    <p>{about.me.aboutme2}</p>
                                    <p>{about.me.aboutme3}</p>
                                </div>

                                {/* Third column */ }
                                <div className="column is-one-quarter has-text-centered">

                                    {/* Social media links */}
                                    <div>
                                        <p>Follow me</p>

                                        {/* Facebook */}
                                        <a href={about.me.facebook} target="_blank">
                                            <div className="icon-text has-text-link is-justify-content-center m-1">
                                            <span className="icon">
                                                <i className="fab fa-facebook"/>
                                            </span>
                                                <span>Facebook</span>
                                            </div>
                                        </a>

                                        {/* Instagram */}
                                        <a href={about.me.instagram} target="_blank">
                                            <div className="icon-text is-justify-content-center">
                                            <span className="icon">
                                                <i className="fab fa-instagram" style={{color: "purple"}}/>
                                            </span>
                                                <span style={{color: "purple"}}>Instagram</span>
                                            </div>
                                        </a>

                                        {/*Twitter*/}
                                        <a href={about.me.twitter} target="_blank">
                                            <div className="icon-text has-text-info is-justify-content-center m-1">
                                            <span className="icon">
                                                <i className="fab fa-twitter"/>
                                            </span>
                                                <span>Twitter</span>
                                            </div>
                                        </a>

                                        {/*Youtube*/}
                                        <a href={about.me.youtube} target="_blank">
                                            <div className="icon-text has-text-danger is-justify-content-center">
                                            <span className="icon">
                                                <i className="fab fa-youtube"/>
                                            </span>
                                                <span>YouTube</span>
                                            </div>
                                        </a>

                                        {/*LinkedIn*/}
                                        <a href={about.me.linkedin} target="_blank">
                                            <div className="icon-text has-text-info is-justify-content-center m-1">
                                            <span className="icon">
                                                <i className="fab fa-linkedin"/>
                                            </span>
                                                <span>LinkedIn</span>
                                            </div>
                                        </a>

                                        {/*GitHub*/}
                                        <a href={about.me.github} target="_blank">
                                            <div className="icon-text has-text-black is-justify-content-center">
                                            <span className="icon">
                                                <i className="fab fa-github"/>
                                            </span>
                                                <span>GitHub</span>
                                            </div>
                                        </a>
                                    </div>
                                    {/*End of social media links*/}

                                    {/*Resume*/}
                                    <div className="mt-6">
                                        <p>Resume</p>
                                        <a href={about.me.resumedownload} className="button mb-3 is-info">Download</a>
                                        <br/>
                                        <a href={about.me.resumeview} target="_blank" className="button is-outlined is-info" download>View</a>
                                    </div>

                                </div>
                                {/* End of third column */}

                            </div>
                            {/* End of all columns */}

                        </div>
                        {/* End of content */}

                    </div>
                    {/* End of card content */}

                </div>
                {/* End of main card */}

                {/* Skill Card */}
                <div className="card mb-4">

                    {/* Card Content */}
                    <div className="card-content">

                        {/* Content */}
                        <div className="content">

                            {/*Make content into columns*/}
                            <div className="columns">

                                {/*First column*/}
                                <div className="column is-two-fifths">
                                    <h1 className="is-size-3 has-text-centered">My Skills</h1>
                                    <p>{about.me.skillsummary}</p>
                                </div>
                                {/*End of first column*/}

                                {/*Second column*/}
                                <div className="column">
                                    {
                                        firstHalfSkills.map((skill) => {
                                            return (
                                                <React.Fragment key={skill}>
                                                    <p>{skill}</p>
                                                    <progress className="progress is-info" value={about.me.skills[skill]} max="100" />
                                                </React.Fragment>
                                            );
                                        })
                                    }
                                </div>
                                {/*End of second column*/}

                                {/*Third column*/}
                                <div className="column">
                                    {
                                        secondHalfSkills.map((skill) => {
                                            return (
                                                <React.Fragment key={skill}>
                                                    <p>{skill}</p>
                                                    <progress className="progress is-info" value={about.me.skills[skill]} max="100" />
                                                </React.Fragment>
                                            );
                                        })
                                    }
                                </div>
                                {/*End of third column*/}

                            </div>
                            {/*End of all columns*/}

                        </div>
                        {/* End of content */}

                    </div>
                    {/*End of card content */}

                </div>
                {/* End of skill card*/}

            </div>
            {/*End of left side column*/}

            {/*Right side column*/}
            {/*<div className="column is-align-self-center">*/}

            {/*    /!* Most Recent Projects Card *!/*/}
            {/*    <div className="card my-4">*/}

            {/*        /!* Card Content *!/*/}
            {/*        <div className="card-content">*/}

            {/*            /!* Content *!/*/}
            {/*            <div className="content">*/}

            {/*                /!* Most recent projects list *!/*/}
            {/*                <h1 className="is-size-4 has-text-centered">Most Recent Projects</h1>*/}
            {/*                {*/}
            {/*                    mostRecentProjects.map((article) => {*/}
            {/*                        return (*/}
            {/*                            <React.Fragment key={article.id}>*/}
            {/*                                <p className="is-size-6 has-text-grey-light mb-0">{article.datecreated2}</p>*/}
            {/*                                <Link className="recent-project-link" to={`/projects/${article.title}+${article.id}`}>*/}
            {/*                                    <p className="is-size-4 has-text-black my-1">{article.title}</p>*/}
            {/*                                </Link>*/}
            {/*                                <p className="is-size-6 mb-6">{article.subcontent1}</p>*/}
            {/*                            </React.Fragment>*/}
            {/*                        );*/}
            {/*                    })*/}
            {/*                }*/}

            {/*            </div>*/}
            {/*            /!* End of content*!/*/}

            {/*        </div>*/}
            {/*        /!*End of card content*!/*/}

            {/*    </div>*/}
            {/*    /!* End of most recent projects card *!/*/}

            {/*</div>*/}
            {/* End of right side column*/}

        </div>
    );
};

// Export component
export default Home;