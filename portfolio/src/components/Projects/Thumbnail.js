import React from 'react'; 
import {Link} from 'react-router-dom'; 
import "./Projects.css";
 
 
function Thumbnail(props) {
    return (
    <div className="col-4 text-center mb-1 mt-3 project-container">
      <img src={props.image}
        alt="Card image cap" className="project-image"/>
      <div className="overlay">
        <div className="text">
        <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button type="button" className="btn btn-link"><a target="_blank"
              href={props.github}>Repository</a></button>
          <button type="button" className="btn btn-link"><a target="_blank"
              href={props.link}>Link</a></button>
        </div>
      </div>
    </div>
    )
  }
 
export default Thumbnail;