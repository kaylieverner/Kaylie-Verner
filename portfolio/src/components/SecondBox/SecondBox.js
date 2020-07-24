import React from "react";
import "./SecondBox.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function SecondBox() {

  return (
    <div className="SecondBox">
        <div className="SecondBoxContents">
         <About/>
         <Skills/>  
         <Projects/>
         <Contact/>  
        </div>
    </div>
  );
}

export default SecondBox;