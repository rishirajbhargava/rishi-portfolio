
import pro_2 from "../../static/project/pro2.png"
// import Tilt from "react-parallax-tilt"

const Project2 = () => {

    return <div className="pro pro_1">

            <div className="pro-img">
                <a href="#home"> <img src={pro_2} alt="project_1_image"></img></a>
            </div>
            <div className="pro-text">
                <h4>Gym Fitness App </h4>
                <p>Consequat ullamco ut occaecat dolore ad cillum.
                    Sint exercitation id ullamco ut occaecat dolore ad cillum mollit.id ullamco ut occaecat dolore ad cillum mollit</p>
                   
                <div className="links"><a target="_blank" href="https://www.google.com" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.google.com" rel="noreferrer" >Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>
                <div className="tech"><span>#reactjs</span> <span>#tailwindcss</span><span>#typescript</span></div>
                
            </div>
        </div>
   

}
export default Project2;