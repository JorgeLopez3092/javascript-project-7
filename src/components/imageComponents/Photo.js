import React from 'react';

const Photo = ({ farm, server, id, secret }) => {
    return (
        <li>
            <a href={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} target="_blank" rel="noopener noreferrer">
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="search result" />
            </a>
        </li>
        
    );
};

export default Photo;