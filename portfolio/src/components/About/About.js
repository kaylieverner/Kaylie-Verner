import React from "react";
import "./About.css";

function About() {

  return (
    <div className="About" id="About">
      <div className="AboutContents">
        <h3 className="mb-4">About</h3>

        <div class="media">
          <div class="media-body">
            Full Stack Web Developer and experienced Technical Success Manager based in NJ. My professional background has included roles in the business side of IT in client product support and data management. After gaining exposure to the SaaS industry, I solidified my interest to pursue coding. I then enrolled in a full stack web development course and have continued to expand my knowledge ever since.

            I have a passion for creating human-centric solutions, understanding the full picture of how applications function, and approaching challenges with an experimental mindset.

            Additional personal interests that promote my creativity are digital and film photography, hiking, and ceramics.
      </div>
          <img class="ml-3" src="https://lh3.googleusercontent.com/pw/ACtC-3c29hG3ScnB2aVwWLHyN6lJXuOhuD_BFtGG-ygwYgOpzf3-lUuHM6zP8sdOfHS9-Hd-tyTigoU3pbvFITOZsgbM2X6qdD6eRnRXGTZ1ZiCkGaOvTBqVnglZiJJEUvjhEBOwh8cu7Z_4vPR0331n7WYHcA=w1913-h1481-no?authuser=0" alt="professional headshot" />
        </div>
      </div>
    </div>
  );
}

export default About;