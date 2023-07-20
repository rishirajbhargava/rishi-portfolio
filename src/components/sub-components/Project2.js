
import pro_2 from "../../static/project/pro2.png"

const Project2 = (props) => {

    return <div className="pro pro_1" onClick={()=>props.setTrigger(true)}>

            <div className="pro-img">
                <a href="#home"> <img src={pro_2} alt="project_1_image"></img></a>
            </div>
            <div className="pro-text">
                <h4>DSA Vault </h4>
                <p>DSA vault is a full stack application where one can solve various types of DSA problems from various platforms.
                User can track their progress and can also see the progress of other users. 
                </p>
                   
                <div className="links"><a target="_blank" href="https://github.com/rishirajbhargava/dsa-vault" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://dsa-vault-frontend.onrender.com/" rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>
                <div className="tech"><span>#reactjs</span> <span>#nodejs</span><span>#mongodb</span></div>
                
            </div>
        </div>
   

}
export default Project2;