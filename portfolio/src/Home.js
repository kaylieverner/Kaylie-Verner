import React from "react";
import "./App";
// import { Grommet } from 'grommet';
import MainBox from "./components/MainBox/MainBox";
import SecondBox from "./components/SecondBox/SecondBox";
import ThirdBox from "./components/ThirdBox/ThirdBox";
import "./App.css"

function Projects(props) {
    return (
        <div>
        <MainBox/>
        <SecondBox/>
        <ThirdBox/>
        </div>
    )
};

export default Projects;