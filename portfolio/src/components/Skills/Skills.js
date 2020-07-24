import React from "react";
import "./Skills.css";

function Skills() {

  return (
    <div className="Skills" id="Skills">
        <div className="SkillsContents">
        <h3 className="mb-4">Skills</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="skillHeading"><i class="fas fa-laptop-code"></i> Front End </p>
                <p>HTML | CSS | Javascript | Bootstrap | React | jQuery</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="skillHeading"><i class="fas fa-laptop-code"></i> Back End </p>
                <p>Node | Express | Sequelize | SQL | MySQL | MongoDB</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="skillHeading"><i class="fas fa-laptop-code"></i> Other</p>
                <p>Git | Heroku | JIRA | Kibana | LaunchDarkly | FullStory</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Skills;