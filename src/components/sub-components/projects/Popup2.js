import React from 'react'
import pro_2 from "../../../static/project/pro2.png"

function Popup2(props) {

    return (props.trigger ?
        <div className='project-popup'>
            <div className='project-popup-inner'>
                <div className="project-popup-img">
                  <img src={pro_2} alt="project_2_image"></img>
                </div>
                <div className="project-popup-text">
                    <h4>DSA Vault 📝</h4>
                    <p>DSA vault is a full stack application where one can solve various types of DSA problems from various platforms.
                User can track their progress and can also see the progress of other users. </p>

                    <div className="card-sub-text">
                        <p>Tools & Frameworks</p>
                        <div >
                            <span>ReactJs</span>
                            <span>NodeJS</span>
                            <span>MongoDB</span>
                            <span>ExpressJS</span>
                        </div>
                    </div>


                    <div className="project-popup-links"><a target="_blank" href="https://github.com/rishirajbhargava/dsa-vault" rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                        <a target="_blank" href="https://dsa-vault-frontend.onrender.com/" rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                    </div>

                    <div className='popup-close-btn'>
                        <i className="fa-solid fa-xmark"  onClick={() => props.setTrigger(false)}></i>
                    </div>

                </div>

            </div>

        </div> : ""
    )
}

export default Popup2;
