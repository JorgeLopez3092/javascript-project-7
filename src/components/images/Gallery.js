import React, { useContext } from 'react';
import { UserContext } from '../../App'
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = () => {

    const pics = useContext(UserContext);
    const results = pics.length;
    console.log(results);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {results > 0 && pics.map(pic => (
                    <Photo 
                        key={pic.id}
                        farm={pic.farm}
                        server={pic.server}
                        id={pic.id}
                        secret={pic.secret}
                    />))}
                {results <= 0 && <NotFound />}
            </ul>
        </div>
    );
};

export default Gallery;