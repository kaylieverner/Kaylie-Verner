import React from "react";
import "./ThirdBox.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function ThirdBox() {

  return (
    <div className="ThirdBox">
        <div className="ThirdBoxContents">
         <Projects/>
         <Contact/>   
        </div>
    </div>
  );
}

export default ThirdBox;