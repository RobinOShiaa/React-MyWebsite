import React from 'react';
import { FaBeer, FaFacebookF, FaLinkedin, FaGithub, FaSearchLocation,FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import profile from '../../static/profiler.jpg';

import './About.css';

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="info">
                <div className="name" >
                    <p className='fade-in-one'>Hello, I'm</p>
                    <h1 className="title">Robin O'Shea</h1>
                    <h2 className="subTitle">Software Engineer</h2> 
                </div>
                
                <div className="contactDetails">
                    <div className="iconTextDivider">
                        <FiMail className="icon" />
                        <p>robinoshea10@gmail.com</p>
                    </div>

                    <div className="iconTextDivider">
                        <FaPhoneAlt className="icon" />
                        <p>0830795030</p>
                    </div>

                    <div className="iconTextDivider">
                        <FaSearchLocation className="icon" />
                        <p>37 Carrickbrack Heath Sutton, Dublin, Ireland</p>
                    </div>
                </div>

                <div className="contactIcons">
                    <a href="www.facebook.com/robby.oshea.3/">
                        <IconContext.Provider value={{ color: "white" }}>
                            <div>
                                <FaFacebookF size={28}/>
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.linkedin.com/in/robin-o-shea-035b2a223">
                        <IconContext.Provider value={{ color: "white" }}>
                            <div>
                                <FaLinkedin size={28}/>
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="https://github.com/RobinOShiaa">
                        <IconContext.Provider value={{ color: "white" }}>
                            <div>
                                <FaGithub size={28}/>
                            </div>
                        </IconContext.Provider>
                    </a>
                </div>
               
            </div>
        

            <img className="profile" src={profile} alt="Photo of me" />

            

            
        </div>
    )
}

export default About;