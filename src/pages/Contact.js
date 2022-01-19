import React from "react";

const Contact = () => {
    return (
        <div className="columns">
            <div className="column">
                <div className="card is-family-code m-4">

                    {/* Card content for Article */}
                    <div className="card-content">

                        {/* Content */}
                        <div className="content">
                            <h1 className="has-text-centered">Feedback</h1>
                            <p className="has-text-centered">Thank you for checking out my site. <br/> If you would like to reach me for any reason, please fill out the form below. </p>

                            <div className="columns">
                                <div className="column"></div>
                                <div className="column is-three-fifths">
                                    <div className="field mb-4">
                                        <label className="label"><h2 className="is-size-5 mx-2">Name</h2></label>
                                        <div className="control has-icons-left">
                                            <span className="icon is-left">
                                                <i className="fas fa-signature" />
                                            </span>
                                            <input className="input is-rounded is-info" type="text" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="field mb-4">
                                        <label className="label"><h2 className="is-size-5 mx-2">Email</h2></label>
                                        <div className="control has-icons-left">
                                            <span className="icon is-left">
                                                <i className="fas fa-envelope" />
                                            </span>
                                            <input className="input is-rounded is-info" type="text" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="field mb-4">
                                        <label className="label"><h2 className="is-size-5 mx-2">Message</h2></label>
                                        <div className="control">
                                            <textarea className="textarea is-rounded is-info" placeholder="Message" />
                                        </div>
                                    </div>

                                    <button className="button is-rounded is-info mr-4">Submit</button>
                                    <button className="button is-rounded is-info is-light">Cancel</button>

                                </div>
                                <div className="column"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;