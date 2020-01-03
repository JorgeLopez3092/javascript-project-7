import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../App'

const MainNav = () => {

    const link = useContext(NavContext)

    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                <li><Link to="/computers">Computers</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;