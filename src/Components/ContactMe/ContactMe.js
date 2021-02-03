import React, { useEffect} from 'react';
import emailjs, { init } from 'emailjs-com';

// init("user_7Vz37KbNgD34w8l5gHuKC");
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3vrjbly', e.target, 'user_7Vz37KbNgD34w8l5gHuKC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert('Your Message Successfully send')
        e.target.reset();
    }

    useEffect(() => {
        Aos.init({ duration: 2000})
    },[])

    return (
        <div style={{ height: '100vh', backgroundColor: '#1F2235' }}>
            <div className="bgMain" data-aos="zoom-in">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto mb-5">
                            <input type="submit" className="btn btn-info mb-2" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;