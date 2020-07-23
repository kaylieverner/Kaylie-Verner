import React from "react";
import Thumbnail from "./Thumbnail";

function Projects(props) {
    return (
        // <div>
        //     <h3>Projects</h3>
        //     <Thumbnail
        //         link="lit-woodland-41729.herokuapp.com"
        //         image="http://t3.gstatic.com/images?q=tbn:ANd9GcTIM5UV56ixF-AYKF9dHUlUmSTC1-LAo4MiHemi078zl0Hf8l1LrOY1mljY4i_RKKVW6u_hg-62_a2l1_nH6BA"
        //         title="Renovation Hunter"
        //         description="Desktop App"
        //         github="https://github.com/kaylieverner/Renovation-Hunter"
        //     />

        //     <Thumbnail
        //         link="/airbnb"
        //         image="http://airbnb-image-url.jpg>"
        //         title="Airbnb Experiences"
        //         category="Website"
        //         github=""
        //     />

        //     <Thumbnail
        //         link="/photoshop"
        //         image="http://photoshop-image-url.jpg"
        //         title="Photoshop Redesign"
        //         category="Desktop App"
        //         github=""
        //     />
        // </div>


<div className="projects-div">
  <div className="row" >
    <div className="col">
    <h3>Projects</h3>
    </div>
  </div>
  <div className="row mb-5">
  <Thumbnail
                link="lit-woodland-41729.herokuapp.com"
                image="http://t3.gstatic.com/images?q=tbn:ANd9GcTIM5UV56ixF-AYKF9dHUlUmSTC1-LAo4MiHemi078zl0Hf8l1LrOY1mljY4i_RKKVW6u_hg-62_a2l1_nH6BA"
                title="Renovation Hunter"
                description="Desktop App"
                github="https://github.com/kaylieverner/Renovation-Hunter"
            />
  </div>
</div> 
    )
}

export default Projects;