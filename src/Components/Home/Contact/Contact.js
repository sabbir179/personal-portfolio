import React, { useEffect} from 'react';
import './Contact.css'
import ContactMe from "../../ContactMe/ContactMe";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div className="bgMain contact" style={{ backgroundColor: "#1F2235" }}>
            <div className="contact-info" style={{ backgroundColor: '#23263A' }}>
        
                    <div data-aos="zoom-in">
                        <h1 className="mainHeader text-center p-2" >Contact</h1>
                        <div className="commonBorder"></div>
                    </div>
                    <div data-aos="zoom-in">
                        <ContactMe />
                    </div>
            </div>
        </div>
    );
};

export default Contact;