
import Project1 from "./sub-components/Project1" 
import Project2 from "./sub-components/Project2";
import Project3 from "./sub-components/Project3";


const Projects = () => {

    return <section id="projects" className="projects">



    <div className="container">
            <div className="projects-content">
                <div className="about-heading">
                    <h3>Projects</h3>
                    <h2>Each project is a unique piece of development 🖱️</h2>
                </div>
                <div className="projects-grid">
                  <Project1/>
                  <Project2/>
                  <Project3/>
                </div>
                
                
                
            </div>
        </div>

    </section>
}

export default Projects;