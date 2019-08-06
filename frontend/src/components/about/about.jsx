import React from 'react';
import about from '../../styles/about/about.scss';
import GitHub from '../../assets/icons/GitHub.png';

class About extends React.Component {

    render () {

        return(
            <div className="about-container">
                <div className="about-header">
                    <h1>About</h1>
                </div>
                <div className="about-body">
                    <div className="about-body-projectRepo">
                        <span className="animate-flicker">GitHub Repo</span>
                        <a href="https://github.com/BenjaminT88/shake_it_up" target="_blank" rel="noopener noreferrer">
                            <img className={ `about-body-icon` } src={ GitHub } alt="GitHub"/>
                        </a>
                    </div>
                    <div className="about-body-content">
                        <span>Team</span>
                        <a href="https://benjamintan.dev/" target="_blank"><li>Benjamin Tan</li></a>
                        <a href="https://www.frankiesiino.com/" target="_blank"><li>Frankie Siino</li></a>
                        <a href="https://www.phillipkrasnick.com/" target="_blank"><li>Phillip Krasnick</li></a>
                        <a href="https://robmroy.github.io/" target="_blank"><li>Rob Roy</li></a>  
                    </div>
                    <div className="about-body-content">
                        <span>Technology Stack</span>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React.js / Redux</li>
                        <li>Node.js</li>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default About;

// TODO: Consider adding technology icons in "Technology Stack" section
// TODO: Consider adding team photos under "Team" section