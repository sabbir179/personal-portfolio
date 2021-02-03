import React, { useEffect} from 'react';
import './Contact.css'
import ContactMe from "../../ContactMe/ContactMe";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import './ContactUs.css'

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
      }, [])
    return (
        <div  className="experience">
                    <h3 className="heading" >Have Any Query?</h3>
                    <h1  className="mainHeader">Contact Us</h1>
                    
                    <div className="commonBorder"></div>
                    <div data-aos="zoom-in">
                        <div className="container">
                            <div className="row">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="address ">
                                            <div className="icons">
                                                    <LocationOnIcon />
                                            </div>
                                            <div className="address-text">
                                                
                                                <h5>Locate us</h5>
                                                <p>Banani, Dhaka, Bangladesh</p>
                                            </div>
                                         </div>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <div className="address-phone">
                                            <div className="icons">
                                                <PhoneIcon />
                                            </div>
                                            <div className="address-text">
                                                
                                                <h5>Give us a call</h5>
                                                <p>Office: +880-1711081019</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <div className="address-email">
                                            <div className="icons">
                                                <MailOutlineIcon />
                                            </div>
                                            <div className="address-text">
                                                
                                                <h5>Get in online</h5>
                                                <p>mail.sabbir17@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                             
                    </div>
        </div>
        // <div className="bgMain contact" style={{ backgroundColor: "#1F2235" }}>
        //     <div className="contact-info" style={{ backgroundColor: '#23263A' }}>
        
        //             <div data-aos="zoom-in">
        //                 <h1 className="mainHeader text-center p-2" >Contact</h1>
        //                 <div className="commonBorder"></div>
        //             </div>
        //             <div data-aos="zoom-in">
        //                 <ContactMe />
        //             </div>
        //     </div>
        // </div>
    );
};

export default Contact;