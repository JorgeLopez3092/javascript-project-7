import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import { useParams } from "react-router-dom";
import axios from 'axios'
import apiKey from '../../config.js';
import Photo from './Photo';
import NotFound from './NotFound';
import loadingGif from '../../Loading.gif'

const Gallery = () => {

    const { search } = useParams();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const h2Results = search.replace(/\+/g, ' ');

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&format=json&nojsoncallback=1`)
                const { data } = response;
                const { photos } = data;
                const { photo } = photos;
                setPhotos(photo)
            } catch (error) {
                console.log('Failed to reach Flickr API', error)
            } finally {
                setLoading(false);
            }
        })();
    }, [search])
    console.log(photos);

    return (
        <div className="photo-container">
            <h2>{h2Results}</h2>
            <ul>
            {loading && (
                <li className="loading-gif"><img src={loadingGif} alt='Loading...' /></li>
            )}
            {!loading && photos.map(pic => (
                <Photo 
                    key={pic.id}
                    farm={pic.farm}
                    server={pic.server}
                    id={pic.id}
                    secret={pic.secret}
                />
            ))}
            {photos.length === 0 && loading === false && <NotFound />}
            </ul>
        </div>
    );
};

export default Gallery;