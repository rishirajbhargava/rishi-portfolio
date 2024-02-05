
import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Loader } from '../static/loader.svg'


const Contact = () => {

    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        "service_52iww9q", 
        "template_udgqhvv", 
         form.current, 
        "E-A__ud6OYxEJ9Njz")

    .then((e) => {
        
        toast.success('Message Send!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setIsSending(false);
            setIsDisabled(false);
            e.target.reset();
        }, (error) => {
            
           
            toast.error('Unable to send the mesaage', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsSending(false);
            setIsDisabled(false);
            console.log(error);
           
            e.target.reset();
        });
    };



    return <section id="contact" className="contact" >

        <div className="container">

            <div className="contact-container">
        

                <div className="contact-heading">
                    <div><h3 className="heading_1">Get in touch 👇</h3></div>
                    <div><h2>Looking forward to start a project with me? 📧</h2></div>

                </div>

                <div className="contact-content">

                    <div className="contact-icons">

                        {/* <p>
                            Reach me if you need any help with Front-End or Backend Development.
                        </p> */}


                        <div className="contact-icon-box">
                            <span><i className="fa-solid fa-map-location-dot"></i></span>
                            <div className="contact-info"><h3>Location</h3><p>Lucknow, India</p></div>
                        </div>

                        <div className="contact-icon-box"><span><i className="fa-solid fa-envelope-open-text"></i></span>
                            <div className="contact-info"><h3>Mail</h3><a href="mailto:rishiraj.bhargava00@gmail.com">rishiraj.bhargava00@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact_form_container">

                        <div className="form-logo">
                            <h4>Contact Me </h4>


                        </div>
                        <form className="contact-form" ref={form} onSubmit={(e)=>{                         
                            sendEmail(e);
                            setIsSending(true);
                            setIsDisabled(true);
                        }} >
                            <div class="inputBox">
                                <input className="input-area" type="text" name="user_name" required="required" />
                                <span>Name</span>
                                <i></i>

                            </div>
                            <div className="inputBox">
                                <input className="input-area" type="text" name="user_email" required="required" />
                                <span>Email</span>
                                <i></i>

                            </div>

                            <div className="inputBox">
                                <textarea className="input-area" type="text"  name="message" required="required" rows="3" />
                                <span>Message</span>
                                <i></i>

                            </div>
                            <div className="form-button">
                                
                                <button id="send-button" type="submit" disabled={isDisabled} > { !isSending ?<> Submit <span> <i className="fa-solid fa-paper-plane"></i></span> </>:<>Sending.. <Loader className="spinner" /></>   }</button>
                            </div>



                        </form>
                        <ToastContainer/>
                    </div>



                </div>


            </div>

        </div>









    </section>
}

export default Contact;