import React from 'react'
import pro_3 from "../../../static/project/pro3.png"

function Popup3(props) {

    return (props.trigger ?
        <div className='project-popup'>
            <div className='project-popup-inner'>
                <div className="project-popup-img">
                   <img src={pro_3} alt="project_3_image"></img>
                </div>
                <div className="project-popup-text">
                    <h4>E-commerce Website</h4>
                    <p>The website features intuitive navigation and search capabilities, along with a wide range of products. With its reusable components and efficient data management, the website offers a seamless shopping experience. Built on a secure and scalable backend technology stack, it demonstrates my skills as a web developer.</p>

                    <div className="card-sub-text">
                        <p>Tools & Frameworks</p>
                        <div >
                            <span>ReactJs</span>
                            <span>Redux</span>
                            <span>TailwindCSS</span>
                            <span>SASS</span>
                        </div>
                    </div>


                    <div className="project-popup-links"><a target="_blank" href="https://github.com/rishirajbhargava/blog-app" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                        <a target="_blank" href="https://blog-app-tj2d.onrender.com/" rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                    </div>

                    <div className='popup-close-btn'>
                        <i className="fa-solid fa-xmark"  onClick={() => props.setTrigger(false)}></i>
                    </div>

                </div>

            </div>

        </div> : ""
    )
}

export default Popup3;
