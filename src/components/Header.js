
import { useState } from "react";
// import {motion as m} from 'framer-motion';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';




const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    function handleChange() {
        return (
            setIsNavExpanded(false)
        )
    }
    return (
        <header>
            <nav>
                <a className="brand" href="#home">Rishi.dev</a>
                <ul>
                    <li ><a href="#home" >Home</a></li>
                    <li ><a href="#about" >About</a></li>
                    <li ><a href="#projects">Projects</a></li>
                    <li ><a href="#contact" >Contact</a></li>
                    <li onClick={() => {
                        setIsNavExpanded(!isNavExpanded);

                    }}><i className="fa-solid fa-bars-staggered mobile-menu"></i></li>
                </ul>
            </nav>


            <div className={isNavExpanded ? "mobile-nav open-menu" : "mobile-nav closed-menu"}>
                <div className="nav-menu-back-div">
                    <span onClick={() => {
                        setIsNavExpanded(!isNavExpanded);

                    }}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>

                    <ul>
                        <li onClick={handleChange}><a href="#home"><i class="fa-solid fa-house"></i>Home</a></li>
                        <li onClick={handleChange}><a href="#about"><i class="fa-solid fa-user"></i>About</a></li>
                        <li onClick={handleChange}><a href="#projects"><i class="fa-solid fa-briefcase"></i>Projects</a></li>
                        <li onClick={handleChange}><a href="#contact"> <i class="fa-regular fa-id-badge"></i>Contact</a></li>
                    </ul>
                </div>
                <div >
                    <p>Get in touch.</p>
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rishirajbhargava/" className="nav-socials-links">
                        <i className="fa-brands fa-linkedin"></i></a>
                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/rishirajbhargava/" className="nav-socials-links">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a aria-label="twitter" rel="noreferrer" target="_blank" href="https://github.com/rishirajbhargava/" className="nav-socials-links">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a aria-label="intagram" rel="noreferrer" target="_blank" href="https://github.com/rishirajbhargava/" className="nav-socials-links">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>

            </div>



        </header>

    )
}

export default Header;