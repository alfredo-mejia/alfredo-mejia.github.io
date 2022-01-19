import React from "react";

const Footer = () => {
    return (
        <footer className="footer has-background-white is-size-5 is-family-code">

            {/* Content of Footer */}
            <div className="content has-text-centered">
                <p>
                    Website by: <strong>Alfredo Mejia</strong> <br/>
                    Email: <a href="mailto:alfredo.mejia@utexas.edu">alfredo.mejia@utexas.edu</a> <br />
                    CSS by <a href="https://bulma.io/" target="_blank">Bulma</a> & Icons by <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
                </p>
            </div>
            {/* End of content of footer */}
        </footer>
    );
}

export default Footer;