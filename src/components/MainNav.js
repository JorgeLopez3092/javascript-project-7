import React, {useContext} from 'react';
import { NavContext } from '../App'

const MainNav = () => {

    const link = useContext(NavContext)

    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#" onClick={link}>Cats</a></li>
                <li><a href="#" onClick={link}>Dogs</a></li>
                <li><a href="#" onClick={link}>Trombone</a></li>
            </ul>
        </nav>
    );
};

export default MainNav;