import React from "react";
import Thumbnail from "./Thumbnail";

function Projects(props) {
    return (
        <div>
            <h3>Projects</h3>
            <Thumbnail
                link="lit-woodland-41729.herokuapp.com"
                image="http://https://lit-woodland-41729.herokuapp.com/logo.png-image-url.jpg"
                title="Renovation Hunter"
                category="Desktop App"
                github="https://github.com/kaylieverner/Renovation-Hunter"
            />

            <Thumbnail
                link="/airbnb"
                image="http://airbnb-image-url.jpg>"
                title="Airbnb Experiences"
                category="Website"
                github=""
            />

            <Thumbnail
                link="/photoshop"
                image="http://photoshop-image-url.jpg"
                title="Photoshop Redesign"
                category="Desktop App"
                github=""
            />
        </div>
    )
}

export default Projects;