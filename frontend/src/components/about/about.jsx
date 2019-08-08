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
                        <div className="about-team-cardsContainer">
                            {/* cards container */}
                            <div className="about-team-cardContainer">
                                <div id="Ben" className="about-team-card-image"></div>
                                <div className="about-team-card-content">
                                    <span>Benjamin Tan</span>
                                    <div classname="about-team-card-icons-container">
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub"/>
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub"/>
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub"/>
                                    </div>
                                </div>
                            </div>
                            <div className="about-team-cardContainer">
                                <div id="Frankie" className="about-team-card-image"></div>
                                <div className="about-team-card-content">
                                    <span>Frankie Siino</span>
                                    <div classname="about-team-card-icons-container">
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-team-cardContainer">
                                <div id="Phil" className="about-team-card-image"></div>
                                <div className="about-team-card-content">
                                    <span>Phillip Krasnick</span>
                                    <div classname="about-team-card-icons-container">
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-team-cardContainer">
                                <div id="Rob" className="about-team-card-image"></div>
                                <div className="about-team-card-content">
                                    <span>Rob Roby</span>
                                    <div classname="about-team-card-icons-container">
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                        <img className="about-team-card-icon" src={require('../../assets/icons/GitHub.png')} alt="GitHub" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {/* <a href="https://benjamintan.dev/" target="_blank"><li>Benjamin Tan</li></a>
                        <a href="https://www.frankiesiino.com/" target="_blank"><li>Frankie Siino</li></a>
                        <a href="https://www.phillipkrasnick.com/" target="_blank"><li>Phillip Krasnick</li></a>
                        <a href="https://robmroy.github.io/" target="_blank"><li>Rob Roy</li></a>   */}
                    </div>
                    <div className="about-body-tech">
                        <span>Technology Stack</span>
                        <div className="about-body-tech-iconsContainer">
                            <img className="about-tech-icon" src={require('../../assets/icons/Mongo.png')} alt="MongoDB" />
                            <img className="about-tech-icon" src={require('../../assets/icons/Express.svg')} alt="Express.js" />
                            <img className="about-tech-icon" src={require('../../assets/icons/React.png')} alt="React" />
                            <img className="about-tech-icon" src={require('../../assets/icons/Redux.png')} alt="Redux" />
                            <img className="about-tech-icon" src={require('../../assets/icons/Node.png')} alt="Node.js" />
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default About;

// TODO: Consider adding technology icons in "Technology Stack" section