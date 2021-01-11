import React from 'react';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
// import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Header></Header>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>
            {/* <Skills></Skills> */}
            
        </div>
    );
};

export default Home;