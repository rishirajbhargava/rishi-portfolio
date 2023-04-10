
import pro_1 from "../../static/project/pro1.png"
// import Tilt from "react-parallax-tilt"

const Project1 = (props) => {

    return <div className="pro pro_1" onClick={()=>props.setTrigger(true)}>

            <div className="pro-img">
                <a href="#home"> <img src={pro_1} alt="project_1_image"></img></a>
            </div>
            <div className="pro-text">
                <h4>Blog App 📝</h4>
                <p>Blog Api in a website where one can share blogs and read blog of other people.
                    It has features like authentication, create, update or delete posts.</p>

               
                <div className="links"><a target="_blank" href="https://github.com/rishirajbhargava/blog-app" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://blog-app-tj2d.onrender.com/" rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>
                <div className="tech"><span>#nodejs</span> <span>#mongoDB</span><span>#expressJs</span></div>
                
            </div>
        </div>
   

}


export default Project1;