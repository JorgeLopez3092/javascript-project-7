import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App'

const Photo = ({ farm, server, id, secret }) => {
    return (
        <li>
            <a href={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} target="_blank">
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="picture" />
            </a>
        </li>
        
    );
};

export default Photo;