import React from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.css";

function Projects(props) {
    return (
    <div className="projects-div row" id="Projects">
        <h3 className="mb-4">Projects</h3>

        <div className="row mb-5 projectRow">
            <Thumbnail
                link="https://lit-woodland-41729.herokuapp.com"
                image="https://lh3.googleusercontent.com/pw/ACtC-3fypd2U452oLsmGaDS1Ta_jcQuEtbGVHdJzvvGTHDAYWiFmanYILI1BI3bS5xTgyNzrjx-Vv1JMTqXhZGdsWFjEHoMMvbhZSk_qzkUKjZ2aboyGv95FNFWJFIL1v5yn5zw4tgPKd3CXF_AHfXLfJNwk_Q=w1923-h1164-no?authuser=0"
                title="Renovation Hunter"
                description="Intuitive application connecting homeowners to renovation contractors in their local area."
                github="https://github.com/kaylieverner/Renovation-Hunter"
            />
            <Thumbnail
                link="https://peaceful-anchorage-41860.herokuapp.com/"
                image="https://lh3.googleusercontent.com/pw/ACtC-3fbS9ieQaiS2wHZ5W2vzdj82oSt9UH6sGrXu3vNWetcHjpTUtDd8maX6LPyVrMBLuYzWrus-w2MXamNZxLuGd44_CynNgbCHpkKY6lBYyu-Hihckdn3zsyyhT-2Jv4MWhrMTVLH7Acyj9xbah5YDeipzQ=w1788-h1447-no?authuser=0"
                title="Budgeter"
                description="Budget tracker application that allows users to enter deposits and expenses on the go."
                github="https://github.com/kaylieverner/Budgeter"
            />
            <Thumbnail
                link="https://react-app-jeopardy.herokuapp.com/"
                image="https://lh3.googleusercontent.com/pw/ACtC-3fb8L70gq9KVclU0q4EnV_we_t5B2fRPyTKYGpM2zlRk9dhA3wjmzIhac6Zx7SrzkMGbBXvglYf6HUM-qk-EsCCzSg77EGsUuti78DA8gz0ralID1ykCzi_DsPBx729lfeHG8EH_N1Dc3j-qq2y2EJT4Q=w1923-h911-no?authuser=0"
                title="React Jeopardy"
                description="React-based Jeopardy game using jservice.io."
                github="https://github.com/kaylieverner/React-Jeopardy"
            />
            <Thumbnail
                link="https://rocky-falls-66432.herokuapp.com/notes"
                image="https://lh3.googleusercontent.com/pw/ACtC-3fZwS54JHKS2Aytgy6bMopaqJevkXXGBFWvpNif_em1Hg2ojwqljNX0iQX-jH-eVbx5tvVS6_vKf1tRfvjh1EvOpGGyqr1p_3FYqC74Dwn4G4nkp7PNPuNis71xmfury_50K92ZkdAtWCYWb9aWDqN8aw=w1923-h887-no?authuser=0"
                title="Note Taker"
                description="User friendly application to save, view, and delete existing notes."
                github="https://github.com/kaylieverner/Note-Taker"
            />
        </div>
        </div>
    )
}

export default Projects;