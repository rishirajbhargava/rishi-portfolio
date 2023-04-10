import React from 'react'
import pro_1 from "../../../static/project/pro1.png"

function Popup1(props) {




   


    
    return (props.trigger ?
        <div className='project-popup'  >
            <div className='project-popup-inner' >
                <div className="project-popup-img">
                    <img src={pro_1} alt="project_1_image"></img>
                </div>
                <div className="project-popup-text">
                    <h4>Blog App 📝</h4>
                    <p>Blog Api in a website where one can share blogs and read blog of other people.
                        It has features like authentication, create, update or delete posts.
                        Blog Api in a website where one can share blogs and read blog of other people.
                        It has features like authentication, create, update or delete posts.</p>



                    <div className="card-sub-text">
                        <p>Tools & Frameworks</p>
                        <div >
                            <span>NodeJS</span>
                            <span>ReactJs</span>
                            <span>MongoDB</span>
                            <span>ExpressJS</span>
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

export default Popup1;
