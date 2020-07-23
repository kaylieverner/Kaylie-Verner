import React from "react";
import "./MainBox.css";

function MainBox() {

  return (
    <div className="MainBox">
      <div className="MainBoxContents">
        <div className="MainHeading">
          <h1>Kaylie Verner</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <div id="LinksContainer">
        <div className="MainLinksDiv">
          <ul id="MainLinksList">
            <li><a href="#">About</a> </li>
            <li><a href="#">Skills</a> </li>
            <li><a href="#">Project</a> </li>
            <li><a href="#">Contact</a> </li>
          </ul>
        </div>
        </div>
    </div>
    </div>
  );
}

export default MainBox;
