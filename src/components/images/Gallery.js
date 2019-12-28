import React from 'react';
import { UserContext } from '../../App'
import Photo from './Photo';
import NotFound from './NotFound';

const componentName = () => {

    const pics = useContext(UserContext);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {<Photo />}
                <NotFound />
            </ul>
        </div>
    );
};

export default componentName;