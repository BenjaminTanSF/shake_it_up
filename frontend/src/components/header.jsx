import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <div className="discover-header">
                <Link to="/">Shake it Up!</Link>
            </div>
        );
    }

}

export default Header;

