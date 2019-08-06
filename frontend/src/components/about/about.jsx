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
                </div>
            </div>
        ); 
    }
}

export default About;