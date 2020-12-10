import React from "react";
import "./services-styles.css"

// Services

function Services() {
    return (
<section className="page-section-services" id="services">
    <div className="container">
        <h2 className="text-center mt-0">Skills</h2>
        <hr className="divider my-4" />
        <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-01.png" alt="icons" className="responsive"/>
                    <h3 className="h4 mb-2">Front End Development

                    </h3>
                    <p className="text-muted mb-0">Designing responsive web pages using, HTML, CSS, JavaScript and Reactjs.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-03.png" alt="icons" className="responsive"/>
                    <h3 className="h4 mb-2">Backend Development</h3>
                    <p className="text-muted mb-0"> Writing REST api using Nodejs, Express(Framework).</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-02.png" alt="icons" className="responsive"/>
                    <h3 className="h4 mb-2">Database</h3>
                    <p className="text-muted mb-0"> Working on MySql Server</p>
                </div>
            </div>
            </div>
        </div>
</section>
);
}

export default Services;