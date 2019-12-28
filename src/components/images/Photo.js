import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App'

const Photo = () => {
    return (
        <li>
            <img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} alt="picture" />
        </li>
        
    );
};

export default Photo;