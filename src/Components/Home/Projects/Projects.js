import React, { useEffect } from 'react';
import './Projects.css'
import { Chip } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";

import Nav from '../Shared/Navbar/Navbar';
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    FaExternalLinkAlt,
    FaExternalLinkSquareAlt, FaGithub,
} from "react-icons/fa";



const Projects = () => {

    window.scrollTo(0, 0);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="bgMain text-white" >
            <Nav />
            
                <div  className="experience">
                    <h3 className="heading" >Projects</h3>
                    <h1  className="mainHeader">Some Things I've Built</h1>
                    
                    <div className="commonBorder"></div>
                
            <div className="container project__container">
                {/* <div className="work__caption text-center">
                    <h2 data-aos="zoom-in" style={{ borderBottom: '2px solid gray' }} className='pb-3'>Some Things I've Built</h2>
                </div> */}

                {/* first project */}
                <div className="work__project mt-5">
                    <div data-aos="zoom-in">
                        <a href="https://cagency.netlify.app" className="link">
                            <img src='https://i.ibb.co/swLjRx8/1-Landing-page.png' className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div data-aos="fade-down-right">
                        <h5>Featured Project</h5>
                        <h2 style={{ color: "rgb(255, 90, 95)" }}>Creative Agency</h2>
                        <div>
                            <p>
                                ❖ A single-page web app with admin & customer dashboard.
                                When a user logs in, the app can detect whether the user is admin or not. If the user is admin he can
                                see the admin dashboard & if not redirects to the customer dashboard.
                                An admin can add services, make new admin & see all
                                services at the dashboard.
                                Customer can order services, make review & get to know
                                his all order.
                             </p>
                        </div>
                        <div className="work__project__bottom">
                            <Chip label="React" />
                            <Chip label="Firebase" />
                            <Chip label="NodeJs" />
                            <Chip label="MongoDB" />
                            <a href="https://github.com/sabbir179/creative-client" className="link2">
                                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                            </a>
                            <a href="https://cagency.netlify.app" className="link2">
                                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                            </a>
                        </div>
                    </div>
                </div>

                {/* second project */}
                <div className="work__project" data-aos="fade-up">
                    <div >
                        <a href="https://dportal.netlify.app" className="link">
                            {/* <img src='https://i.ibb.co/qC1sGfg/doctor-56b2f293.png' className="img-fluid" alt="" /> */}
                            <img src='https://i.ibb.co/qFRWYW9/Screenshot-2021-01-01-at-7-58-42-PM.png' className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div>
                        <h5>Featured Project</h5>
                        <h2 style={{ color: "red" }}>Doctors Portal</h2>
                        <div>
                            <p>
                                ❖ A single-page web app with a dashboard where patients can pick a date, time & fix an appointment
                                with the doctor.
                                The doctor's and patient's dashboards are separate. When a user logs in, this app can detect whether
                                the user is a doctor or not.
                                A doctor can review his appointment on a particular date & see his all appointments.
                                A patient also can see his appointment with the doctor on
                                a particular date.
                             </p>
                        </div>
                        <div className="work__project__bottom">
                            <Chip label="React" />
                            <Chip label="Firebase" />
                            <Chip label="ExpressJs" />
                            <Chip label="MongoDB" />
                            <a href="https://github.com/sabbir179/doctorspotal-client" className="link2">
                                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                            </a>
                            <a href="https://dportal.netlify.app" className="link2">
                                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                            </a>
                        </div>
                    </div>
                </div>

                {/* third project */}
                {/* <div className="work__project" data-aos="zoom-in">
                    <div >
                        <a href="https://volunteer-network-ccdb0.web.app/" className="link">
                            <img src='https://i.ibb.co/1Ky0F1Z/1-Landing-page.png' className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div >
                        <h5>Featured Project</h5>
                        <h2 style={{ color: "rgb(255, 90, 95)" }}>Volunteer Network</h2>
                        <div>
                            <p>
                                ❖ A single-page web app with dashboard & multiple options
                                of the volunteer event.
                                User can register as a volunteer & check his all previous registered
                                event.
                                To register as a volunteer & check previously registered event user must have to log in first with
                                their google account.
                                Admin can add events or delete registered volunteers.
                             </p>
                        </div>
                        <div className="work__project__bottom">
                            <Chip label="React" />
                            <Chip label="Firebase" />
                            <Chip label="NodeJs" />
                            <Chip label="MongoDB" />
                            <a href="https://github.com/mozumderTushar/volunteer-network-client.git" className="link2">
                                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                            </a>
                            <a href="https://volunteer-network-ccdb0.web.app/" className="link2">
                                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* fourth project */}
                <div className="work__project mb-5" data-aos="fade-up">
                    <div>
                        <a href="https://sabbir179.github.io/weather-app/" className="link">
                            <img src='https://i.ibb.co/2dzpGtX/Screenshot-2021-01-02-at-2-25-22-AM.png' className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div >
                        <h5>Featured Project</h5>
                        <h2 style={{ color: "rgb(255, 90, 95)" }}>Weather app</h2>
                        <div>
                            <p>
                                ❖ User can select any place name into the search box. Than this website will shows that place's current temperature, 
                                wind status, day-night status.
                             </p>
                        </div>
                        <div className="work__project__bottom">
                            <Chip label="JavaScript" />
                            <Chip label="CSS" />
                            <Chip label="API" />
                            {/* <Chip label="MongoDB" /> */}

                            <a href="https://github.com/sabbir179/weather-app" className="link2">
                                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                            </a>

                            <a href="https://sabbir179.github.io/weather-app/" className="link2">
                                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                            </a>

                        </div>
                    </div>
                </div>

                

                
            </div>
        </div>
        
    </div>
    );
};

export default Projects;