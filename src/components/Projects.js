
import Project1 from "./sub-components/Project1"
import Project2 from "./sub-components/Project2";
import Project3 from "./sub-components/Project3";
import Popups from "./sub-components/Popups";

import { useState } from "react";


const Projects = () => {


    const [trigger1, setTrigger1] = useState(false);
    const [trigger2, setTrigger2] = useState(false);
    const [trigger3, setTrigger3] = useState(false);




    return <section id="projects" className="projects">



        <div className="container">
            <div className="projects-content">
                <div className="about-heading">
                    <h3>Projects</h3>
                    <h2>Each project is a unique piece of development 🖱️</h2>
                </div>
                <div className="projects-grid">
                    <Project1 setTrigger={setTrigger1}/>
                    <Project3 setTrigger={setTrigger3}/>

                </div>

            </div>
        </div>
        <Popups trigger1={trigger1}  trigger2={trigger2} trigger3={trigger3}  setTrigger1={setTrigger1} setTrigger2={setTrigger2} setTrigger3={setTrigger3}/>

    </section>
}

export default Projects;