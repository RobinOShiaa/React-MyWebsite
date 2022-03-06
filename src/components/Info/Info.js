import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import cv from '../../static/Robin CV.pdf';

import './Info.css';
const Info = () => {
    return (
        <div className="about-me">
        
          <div id="about-me-info"><h2>About Me</h2>
            <br></br>
            <p>Hello my name is Robin, I am an enthusiastic, self motivated and eager to learn, as well as evolve my current skill set in order to successfully complete any task given to me. I graduated from Dublin City University in 2020. I have a BSci in Computer Applications and Software Engineering. I am very much interested in all areas of my qualification and have a fine aptitude of experiences in the following areas of expertise.</p>
            <span class="areas">Python</span>
            <span class="areas">Java</span>
            <span class="areas">Javascript</span>
            <span class="areas">HTML</span>
            <span class="areas">CSS</span>
            <span class="areas">C#</span>
            <span class="areas">React</span>
            <span class="areas">MYSQL</span>
            <span class="areas">Unity</span>
            <span class="areas">Assembly</span>
            <span class="areas">MongoDB</span>
            <span class="areas">Nodejs</span>
            <span class="areas">Bash/Batch</span>
            <a href={cv} id = "green-back" class="download btn">Download CV</a>
          </div>
      
        </div>
        
    )
}

export default Info;