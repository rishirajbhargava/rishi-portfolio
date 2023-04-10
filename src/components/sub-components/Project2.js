
import pro_2 from "../../static/project/pro2.png"

const Project2 = (props) => {

    return <div className="pro pro_1" onClick={()=>props.setTrigger(true)}>

            <div className="pro-img">
                <a href="#home"> <img src={pro_2} alt="project_1_image"></img></a>
            </div>
            <div className="pro-text">
                <h4>Gym Fitness App </h4>
                <p>A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.</p>
                   
                <div className="links"><a target="_blank" href="https://www.google.com" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.google.com" rel="noreferrer" >Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>
                <div className="tech"><span>#reactjs</span> <span>#tailwindcss</span><span>#typescript</span></div>
                
            </div>
        </div>
   

}
export default Project2;