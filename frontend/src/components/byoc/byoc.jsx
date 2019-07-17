import React from 'react';
import { Link } from 'react-router-dom';
import byocStyles from '../../styles/discover/byoc.scss'

class BYOCPrompt extends React.Component {

    render() {
        return (
            <div className="byoc-container">
                <h1>Pick your base spirit!</h1>
                <div className="byoc-grid-container">
                    <div className="byoc-spirits">
                        <Link id="d-bs-whiskey" className="byoc-grid-spirit" to="/byoc/:whiskey">Whiskey</Link>
                        <Link id="d-bs-vodka" className="byoc-grid-spirit" to="/byoc/:vodka">Vodka</Link>
                        <Link id="d-bs-tequila" className="byoc-grid-spirit" to="/byoc/:tequila">Tequila</Link>
                        <Link id="d-bs-rum" className="byoc-grid-spirit" to="/byoc/:rum">Rum</Link>
                        <Link id="d-bs-gin" className="byoc-grid-spirit" to="/byoc/:gin">Gin</Link>
                        <Link id="d-bs-brandy" className="byoc-grid-spirit" to="/byoc/:brandy">Brandy</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default BYOCPrompt;

