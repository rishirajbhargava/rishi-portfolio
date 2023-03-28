
import pro_1 from "../../static/project/pro3.png"
// import Tilt from "react-parallax-tilt"

const Project3 = () => {

    return <div className="pro pro_1">

            <div className="pro-img">
                <a href="#home"> <img src={pro_1} alt="project_1_image"></img></a>
            </div>
            <div className="pro-text">
                <h4>E-commerce Website</h4>
                <p>Consequat ullamco ut occaecat dolore ad cillum.
                    Sint exercitation id ullamco ut occaecat dolore ad cillum mollit.id ullamco ut occaecat dolore ad cillum mollit</p>
                   
                <div className="links"><a target="_blank" href="https://www.google.com" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.google.com" rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>
                <div className="tech"><span>#reactjs</span> <span>#redux</span><span>#tailwindCss</span></div>
                
            </div>
        </div>
   

}


export default Project3;