
import pro_1 from "../../static/project/pro3.png"


const Project3 = (props) => {

    return <div className="pro pro_1" onClick={()=>props.setTrigger(true)}>

            <div className="pro-img">
                <a href="#home"> <img src={pro_1} alt="project_1_image"></img></a>
            </div>
            <div className="pro-text">
                <h4>E-commerce Website</h4>
                <p>The website features intuitive navigation and search capabilities, along with a wide range of products.
                The website also facilitates the purchase of products from the website.</p>
                   
                <div className="links"><a target="_blank" href="https://www.google.com" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.google.com" rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>
                <div className="tech"><span>#reactjs</span> <span>#redux</span><span>#tailwindCss</span></div>
                
            </div>
        </div>
   

}


export default Project3;