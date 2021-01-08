import React from 'react';
import "./Skills.css"

import Progress from './Progress';

// const Progess = ({done}) => {
    
//     const [style, setStyle] = useState({});

//     setTimeout(() => {
//         const newStyle = {
//             opacity: 1,
//             width:`${done}%`
//         }
//         setStyle(newStyle);
//     }, 200)

//     return(
//         <div className="progress">
//             <div className="progress-done" style={style} >
//             {done}%
//             </div>
            
//         </div>
//     )
// }

const Skills = () => {
    return (
        <section>
             <div className="skills">
                <h3 className="heading" >Why Choose Me</h3>
                <h1 className="mainHeader">My expertise area</h1>
                <div className="commonBorder"></div>
            </div>
            <div className="skills_container bd-grid">
                <div className="skills_content bd-grid">
                    <h3 className="skills_subtitle">Frontend</h3>

                    <div className="skills_data">
                        <span className="skills_name">HTML</span>
                        <Progress done="90"/>
                        {/* <span className="skills_number">90%</span> */}
                        <span className="skills_bar skills_html"></span>
                    </div>

                    <div className="skills_data">
                        <span className="skills_name">CSS</span>
                        <Progress done="85"/>
                        {/* <span className="skills_number">85%</span> */}
                        <span className="skills_bar skills_css"></span>
                    </div>

                    <div className="skills_data">
                        <span className="skills_name">JavaScript</span>
                        <span className="skills_number">78%</span>
                        <span className="skills_bar skills_js"></span>
                    </div>

                    <div className="skills_data">
                        <span className="skills_name">React js</span>
                        <span className="skills_number">74%</span>
                        <span className="skills_bar skills_react"></span>
                    </div>

                    <div className="skills_data">
                        <span className="skills_name">Bootstrap</span>
                        <span className="skills_number">80%</span>
                        <span className="skills_bar skills_bs"></span>
                    </div>
                    <div className="skills_data">
                        <span className="skills_name">Material design</span>
                        <span className="skills_number">78%</span>
                        <span className="skills_bar skills_md"></span>
                    </div>
                </div>
                <div className="skills_content">
                    <h3 className="skills_subtitle">Backend</h3>

                    <div className="skills_data">
                        <span className="skills_name">Node js</span>
                        <span className="skills_number">50%</span>
                        <span className="skills_bar skills_node"></span>
                    </div>

                    <div className="skills_data">
                        <span className="skills_name">Express js</span>
                        <span className="skills_number">54%</span>
                        <span className="skills_bar skills_express"></span>
                    </div>

                    <div className="skills_data">
                        <span className="skills_name">Firebase</span>
                        <span className="skills_number">70%</span>
                        <span className="skills_bar skills_firebase"></span>
                    </div>

                    
                </div>

            </div>
        </section>
    );
};

export default Skills;