import React, {useState} from "react";
import jsonDataProjects from "../data/projects.json";
import jsonDataBlogs from "../data/blogArticles.json";
import jsonDataWiki from "../data/wikiArticles.json";
import {capitalize} from "../helper/helper-functions";

const ArticleNav = (props) => {

    // Depending on the page ("projects", "blog", "wiki") it affects what displays
    const pageType = props.page;

    // Used to display dropdown when clicked
    const [isMainFilterDropDownActive, setIsMainFilterDropDownActive] = useState(false);
    const [isMainSortDropDownActive, setIsMainSortDropDownActive] = useState(false);

    // Used to display variables depending on the page type in HTML
    let title = "";
    let filterType = [];
    let filters = [];

    // If projects
    if (pageType === "projects")
    {
        // Change the title and filter type
        title = "Projects";
        filterType = ["Type of Project", "Coding Language", "Field"];

        // Create a set of projects, coding languages, and subjects found in the JSON data
        const typeOfProject = new Set();
        const codingLanguages = new Set();
        const fields = new Set();

        // Add the data to the sets
        jsonDataProjects.articles.map((obj) => {
            typeOfProject.add(capitalize(obj.type, "Nav 36"));
            fields.add(capitalize(obj.subject));
            obj.languages.map((lang) => codingLanguages.add(capitalize(lang)));
        });

        // Push all the data to the filter array IN ORDER with its title coming before the content of filter
        filters.push(filterType[0]);
        typeOfProject.forEach((type) => filters.push(type));
        filters.push(filterType[1]);
        codingLanguages.forEach((lang) => filters.push(lang));
        filters.push(filterType[2]);
        fields.forEach((subj) => filters.push(subj));

    }

    // If page is blog
    else if (pageType === "blog")
    {
        // Change title and filter type
        title = "Blogs";
        filterType = ["Field", "Subject"];

        // Create set to hold fields and subjects
        const fields = new Set();
        const subjects = new Set();

        // Add fields and subjects to the sets
        jsonDataBlogs.articles.map((obj) => {
            fields.add(capitalize(obj.field, "Nav 66"));
            subjects.add(capitalize(obj.subject, "Nav 67"));
        });

        // Push all the data to the filter array IN ORDER with its title coming before the content of filter
        filters.push(filterType[0]);
        fields.forEach((type) => filters.push(type));
        filters.push(filterType[1]);
        subjects.forEach((lang) => filters.push(lang));
    }

    // If page is wiki
    else
    {
        // Change title and filter type
        title = "Wiki";
        filterType = ["Coding Language", "Field", "Subject"];

        // Create set to hold languages, fields, and subjects
        const codingLanguages = new Set();
        const fields = new Set();
        const subjects = new Set();

        // Add languages, fields, and subjects to the sets
        jsonDataWiki.articles.map((obj) => {
            fields.add(capitalize(obj.field, "Nav 91"));
            subjects.add(capitalize(obj.subject, "Nav 92"));

            obj.languages.map((lang) => codingLanguages.add(capitalize(lang, "Nav 94")))
        });

        // Push all the data to the filter array IN ORDER with its title coming before the content of filter
        filters.push(filterType[0]);
        codingLanguages.forEach((type) => filters.push(type));
        filters.push(filterType[1]);
        fields.forEach((lang) => filters.push(lang));
        filters.push(filterType[2]);
        subjects.forEach((subj) => filters.push(subj));
    }

    // Create a hash to use later to determine which filter is being used
    let filterOptionHash = {};

    // Initialize to false all filters
    filters.forEach((filter) => {
        if (!filterType.includes(filter))
            filterOptionHash[filter] = false;
    });

    // All Pages have same sort
    // const sortTypes = ["Alphabetical", "Date", "Last Modified", "Time to Read"];
    const sortTypes = ["Alphabetical", "Date", "Time to Read"];

    // Create hash to determine which sort is being used and initialize all to false
    let sortOptionHash = {};
    sortTypes.forEach((sType) => sortOptionHash[sType] = false);


    // Create useState with the hashes created to change the HTML and show the user which filter and sort is being used
    const [filterOptionOnOff, setFilterOptionOnOff] = useState(filterOptionHash);
    const [sortOptionOnOff, setSortOptionOnOff] = useState(sortOptionHash);

    // Whenever a filter is clicked, this is called
    const updateFilterOption = (filter) => {
        // Updates the filter options on and off data
        setFilterOptionOnOff(obj => {
            // Get the previous data
            let newObject = {...obj};

            // Update the filter that was clicked
            newObject[filter] = !obj[filter];

            // Return object
            return newObject;
        });
    };


    // Whenever a sort is clicked, this is called
    const updateSortOption = (sType) => {
        // Update the sort options on and off data
        setSortOptionOnOff(obj => {
            // Create new hash object
            let newObject = {};

            // There can only be one sort option on, so turn all to off (false)
            for (let i = 0; i < sortTypes.length; i++)
                newObject[sortTypes[i]] = false;

            // Whatever sort was clicked change the value (on -> off & off -> on)
            newObject[sType] = !obj[sType];

            // Return object
            return newObject;
        });
    };

    // HTML (JSX)
    return (
        <div className="card is-family-code m-4">
            {/* Card content for Projects */}
            <div className="card-content">

                {/* Content */}
                <div className="content">
                    <h1 className="is-size-2 has-text-centered">{title}</h1>

                    <div className="columns">

                        {/* First column: Filter & Sort */}
                        <div className="column has-text-right is-two-fifths">
                            {/* Filter */}
                            <div className={isMainFilterDropDownActive ? "dropdown is-active mr-4" : "dropdown mr-4"}>

                                {/* Filter Dropdown */}
                                <div className="dropdown-trigger">

                                    {/* Filter Dropdown Header*/}
                                    <button className="button is-rounded is-info is-outlined" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                                        setIsMainFilterDropDownActive(!isMainFilterDropDownActive);
                                        setIsMainSortDropDownActive(false);
                                    }}>
                                        <span className="icon-text">
                                            <span className="is-family-code">Filter</span>
                                            <span className="icon">
                                                <i className="fas fa-filter" aria-hidden="true"/>
                                            </span>
                                        </span>
                                    </button>
                                </div>

                                {/* Filter Dropdown Menu*/}
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">

                                    {/* Filter Dropdown Content*/}
                                    <div className="dropdown-content" style={{textAlign: "left"}}>

                                        {/* For each filter found */}
                                        {
                                            // Iterate through filters
                                            filters.map((filter, index) => {

                                                // If it is a filter title, separate it
                                                if (filterType.includes(filter)){
                                                    return (
                                                        <p key={index} className="dropdown-item m-0 is-size-6 has-text-info">{filter}</p>
                                                    )
                                                }

                                                // Otherwise, show filter option of check and filter option
                                                // OnClick updates which filter has been selected
                                                return (
                                                    <a key={index} href="#" className={filterOptionOnOff[filter] ? "dropdown-item highlighted-item" : "dropdown-item"} onClick={() => updateFilterOption(filter)}>
                                                        <span className="icon-text">
                                                            <span className="icon">
                                                                <i className={ filterOptionOnOff[filter] ? "fas fa-check" : ""}/>
                                                            </span>
                                                            <span>{filter}</span>
                                                        </span>
                                                    </a>
                                                );
                                            })
                                        }
                                        {/* End of iterating through filters */}

                                    </div>
                                    {/* End of filter dropdown content */}

                                </div>
                                {/* End of filter dropdown menu */}

                            </div>
                            {/* End of filter */}

                            {/* Sort */}
                            <div className={isMainSortDropDownActive ? "dropdown is-active" : "dropdown"}>

                                {/* Sort Dropdown */}
                                <div className="dropdown-trigger">

                                    {/* Sort Dropdown Header*/}
                                    <button className="button is-rounded is-info is-outlined" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                                        setIsMainSortDropDownActive(!isMainSortDropDownActive)
                                        setIsMainFilterDropDownActive(false);
                                    }}>
                                        <span className="icon-text">
                                            <span className="is-family-code">Sort</span>
                                            <span className="icon">
                                                <i className="fas fa-sort" aria-hidden="true"/>
                                            </span>
                                        </span>
                                    </button>
                                </div>

                                {/* Sort Dropdown Menu*/}
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">

                                    {/* Sort Dropdown Content*/}
                                    <div className="dropdown-content" style={{textAlign: "left"}}>

                                        {/* For each sort type */}
                                        {
                                            // Iterate through sort types
                                            sortTypes.map((sType) => {

                                                // Show sort options
                                                // If clicked highlight the option and show check
                                                return (
                                                    <a key={sType} href="#" className={sortOptionOnOff[sType] ? "dropdown-item highlighted-item" : "dropdown-item"} onClick={() => updateSortOption(sType)}>
                                                        <span className="icon-text">
                                                            <span className="icon">
                                                                <i className={sortOptionOnOff[sType] ? "fas fa-check" : ""} />
                                                            </span>
                                                            <span>{sType}</span>
                                                        </span>
                                                    </a>
                                                );

                                            })
                                        }
                                        {/* End of iterating through sorting type */}

                                    </div>
                                    {/* End of sort dropdown content */}

                                </div>
                                {/* End of sort dropdown menu */}

                            </div>
                            {/* End of sort */}

                        </div>
                        {/* End of first column: filter & sort */}

                        {/* Second column: Search bar */}
                        <div className="column">
                            {/* Search bar with icon */}
                            <div className="control has-icons-right">
                                <input className="input is-rounded is-info" type="search" placeholder="Search" />
                                <span className="icon is-small is-right">
                                    <i className="fas fa-search" />
                                </span>
                            </div>
                        </div>
                        {/* End of second column: search bar */}

                        {/* Page Navigation */}
                        <div className="column is-two-fifths">

                            {/* Page navigation */}
                            <nav className="pagination is-rounded is-info is-justify-content-start" role="navigation" aria-label="pagination">

                                {/* Previous page button */}
                                <button className="button is-rounded is-info pagination-previous">
                                    <span className="icon-text">
                                        <span className="icon">
                                            <i className="fas fa-arrow-left" aria-hidden="true"/>
                                        </span>
                                        <span className="is-family-code">Prev</span>
                                    </span>
                                </button>

                                {/* Next page button */}
                                <button className="button is-rounded is-info pagination-next">
                                    <span className="icon-text">
                                        <span className="is-family-code">Next</span>
                                        <span className="icon">
                                            <i className="fas fa-arrow-right" aria-hidden="true"/>
                                        </span>
                                    </span>
                                </button>

                                {/* Page numbers */}
                                <a className="pagination-link page-button-inactive" aria-label="Goto page 1">1</a>
                                <span className="pagination-ellipsis">&hellip;</span>
                                <a className="pagination-link page-button-inactive" aria-label="Goto page 3">3</a>
                                <a className="pagination-link is-current" aria-label="Page 4" aria-current="page" style={{background: "hsl(204, 86%, 53%)", border: "hsl(204, 86%, 53%) 1px solid"}}>4</a>
                                <a className="pagination-link page-button-inactive" aria-label="Goto page 5">5</a>
                                <span className="pagination-ellipsis">&hellip;</span>
                                <a className="pagination-link page-button-inactive" aria-label="Goto page 7">7</a>

                            </nav>
                            {/* End of page navigation */}

                        </div>
                        {/* End of page navigation */}

                    </div>
                    {/* End of all columns */}

                </div>
                {/* Content */}

            </div>
            {/* End of card content for projects */}

        </div>
    );
}

export default ArticleNav;