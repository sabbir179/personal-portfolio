import React from 'react';
import {
    FaFacebookF,
    FaFlickr,
    FaLinkedinIn,
    FaGithub,
  } from "react-icons/fa";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Header.css'
// import Resume from '../../../Components/resume/ResumeofSabbirAhmed.PDF'

const Header = () => {
    const [state] = React.useState({
        title: "I am Sabbir Ahmed",
        text:
          "I'm Sabbir, professional UI/UX designer and web developer with long time \
        experience in this field​",
        image: "/images/sabbir.png",
      });

    return (
        <header className="header">
      <div className="container">
        <div className="row">
        <div className="col-6">
            <div className="profile_img">
              <img id="my-photo" src={state.image} alt="sabbir" />
            </div>
          </div>

          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  {/* <li>
                    <FaFacebookF className="headerIcon" />
                  </li> */}
                  <li>
                     <a target="_blank"  href="https://www.linkedin.com/in/sabbir-ahmed-623b609/"> <FaLinkedinIn className="headerIcon" /></a>
                  </li>
                  <li>
                    
                    <a target="_blank"  href="https://github.com/sabbir179"> <FaGithub className="headerIcon" /></a>
                  </li>
                  <li>
                  <a target="_blank"  href="https://www.flickr.com/photos/sabbir-s_photo/"> <FaFlickr className="headerIcon" /></a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a target="_blank"  href="https://drive.google.com/file/d/1Q0oQ91CR1pJObpkdDEF2mQNrEyDq4RwW/view?usp=sharing"  className="btn btn-outline">
                    Download resume
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
    );
};

export default Header;